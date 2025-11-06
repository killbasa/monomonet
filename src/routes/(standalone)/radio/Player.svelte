<script lang="ts">
	import { onMount } from 'svelte';
	let { src, station, onbeat } = $props();

	// gets returned from the endpoint on initial connect
	interface SSEConnect {
		connect: {
			subs: {
				[station: string]: {
					publications: Array<{ data: NowPlayingData }>;
				};
			};
		};
	}

	// gets returned periodically
	interface SSEUpdate {
		channel: string;
		pub?: { data: NowPlayingData };
	}

	interface NowPlayingData {
		current_time: number;
		np: {
			now_playing: {
				duration: number;
				elapsed: number;
				played_at: number;
				song: {
					title: string;
					art: string;
				};
			};
			station: {
				listen_url: string;
			};
			listeners: {
				total: number;
				unique: number;
			};
		};
	}

	let nowplaying: NowPlayingData | null = $state(null);
	let elapsedSeconds: number = $state(0);

	let durationText: string | null = $derived.by(() => {
		if (nowplaying) {
			return formatDuration(nowplaying.np.now_playing.duration);
		}
		return null;
	});

	let elapsedText: string | null = $derived.by(() => {
		if (nowplaying) {
			return formatDuration(elapsedSeconds);
		}
		return null;
	});

	/// format duration in seconds to H:MM:SS or M:SS
	function formatDuration(seconds: number): string {
		const hrs = Math.floor(seconds / 3600);
		const mins = Math.floor((seconds % 3600) / 60);
		const secs = Math.floor(seconds % 60);

		if (hrs > 0) {
			return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
		} else {
			return `${mins}:${String(secs).padStart(2, '0')}`;
		}
	}

	let audio: HTMLAudioElement | null = $state(null);
	let audio_ctx: AudioContext | null = $state(null);
	let gainNode: GainNode | null = $state(null);
	let playing: boolean = $state(false);
	let volume: number = $state(50);

	$effect(() => {
		if (!audio) return;

		if (playing) {
			audio.play();
		} else {
			audio.pause();
		}
	});

	$effect(() => {
		if (!audio) return;

		const volume_factor = volume / 100;

		audio.volume = volume_factor;

		if (gainNode && audio_ctx) {
			const gain_value = 1 / (audio.volume + 0.001); // avoid division by zero
			gainNode.gain.setTargetAtTime(gain_value, audio_ctx.currentTime, 0.01);
		}
	});

	function updateData(data: NowPlayingData) {
		if (data.np.station.listen_url != nowplaying?.np.station.listen_url && audio) {
			audio.src = `${data.np.station.listen_url}?refresh=${Date.now()}`;
		}

		nowplaying = data;

		elapsedSeconds = Math.floor(nowplaying.np.now_playing.elapsed);
		// console.log('Now Playing Update:', data);
	}

	async function togglePlay() {
		if (!audio) return;

		if (!audio_ctx) {
			await setupAudioContext();
		}

		audio_ctx?.resume();

		playing = !playing;
		if (playing) {
			audio.play();
		} else {
			audio.pause();
		}
		// Implement actual audio play/pause logic here
	}

	async function setupAudioContext() {
		if (!audio) return;

		audio_ctx = new window.AudioContext();
		const source = audio_ctx.createMediaElementSource(audio);

		// offset gain from the audio source volume
		gainNode = audio_ctx.createGain();

		// analyze spectrum
		const analyzer = audio_ctx.createAnalyser();
		analyzer.fftSize = 512;

		// lowpass filter to isolate bass frequencies
		const biquadFilter = audio_ctx.createBiquadFilter();
		biquadFilter.type = 'lowpass';
		biquadFilter.frequency.setValueAtTime(50, audio_ctx.currentTime);

		// detect beats
		await audio_ctx.audioWorklet.addModule('/radio/beat-detector-processor.js');
		const beatDetector = new AudioWorkletNode(audio_ctx, 'beat-detector-processor');
		beatDetector.port.onmessage = (event) => {
			//console.log('BeatDetector message:', event.data);
			if (event.data === 'beat') {
				//console.log('Beat detected');
				onbeat();
			}
		};

		source.connect(gainNode);
		gainNode.connect(biquadFilter);
		biquadFilter.connect(analyzer);
		analyzer.connect(beatDetector);

		source.connect(audio_ctx.destination);
		//analyzer.connect(audio_ctx.destination); // preview the filtered audio
	}

	onMount(() => {
		const uriParams = new URLSearchParams({
			cf_connect: JSON.stringify({
				subs: {
					[`station:${station}`]: { recover: true },
				},
			}),
		});

		const evtSource = new EventSource(`${src}/api/live/nowplaying/sse?` + uriParams.toString());

		evtSource.onmessage = (event) => {
			const data = JSON.parse(event.data) as SSEUpdate | SSEConnect;

			if ('pub' in data) {
				updateData(data.pub!.data);
			} else if ('connect' in data) {
				updateData(data.connect.subs[`station:${station}`].publications.slice(-1)[0].data);
			} else {
				console.warn('Unknown SSE data format:', data);
			}
		};

		let updateInterval = setInterval(() => {
			if (nowplaying) {
				elapsedSeconds++;
			}
		}, 1000);

		audio = new Audio();
		audio.crossOrigin = 'anonymous';
		audio.volume = volume / 100;

		return () => {
			evtSource.close();
			clearInterval(updateInterval);
		};
	});
</script>

<div class="player">
	<div class="player-nowplaying">
		{#if nowplaying}
			{#if nowplaying.np.now_playing.song.art}
				<img
					class="nowplaying-art"
					src={nowplaying.np.now_playing.song.art}
					alt="Album Art"
				/>
			{/if}
			<div class="nowplaying-info">
				<div class="nowplaying-info-top">
					<div class="nowplaying-title">{nowplaying.np.now_playing.song.title}</div>
					<div class="nowplaying-duration">
						{elapsedText} / {durationText}
					</div>
				</div>
				{#if nowplaying.np.listeners.total > 1}
					<div class="nowplaying-listeners">
						listening with {nowplaying.np.listeners.total - 1} other tabemonos!
					</div>
				{/if}
			</div>
		{/if}
	</div>

	<div class="player-controls">
		<button onclick={togglePlay}>
			<svg
				viewBox="0 0 24 24"
				class="icon"
				fill="currentColor"
				focusable="false"
				aria-hidden="true"
			>
				<!-- just steal the icons from the old embed for now -->
				{#if playing}
					<path
						fill="currentColor"
						d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4 14H8V8h8z
					"
					/>
				{:else}
					<path
						fill="currentColor"
						d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M9.5 16.5v-9l7 4.5z"
					/>
				{/if}
			</svg>
		</button>

		<input type="range" min="0" max="100" bind:value={volume} />
	</div>
</div>

<style>
	.player {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.2rem;
		background-color: #f9f9f9;
		border-radius: 8px;
		gap: 5px;
	}

	.player-nowplaying {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.nowplaying-art {
		width: 64px;
		height: 64px;
		object-fit: cover;
		border-radius: 8px;
	}

	.nowplaying-info-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		gap: 1rem;
	}
	.nowplaying-title {
		font-size: 1.2rem;
		font-weight: bold;
	}
	.nowplaying-listeners {
		font-size: 0.9rem;
		color: #666;
	}

	.player-controls {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		gap: 1rem;
	}

	.player-controls button {
		background: none;
		border: none;
		cursor: pointer;
		border-radius: 50%;
		transition: background-color 0.3s;
		padding: 0;
	}

	.player-controls svg {
		display: block;
		width: 1.7em;
		height: 1.5em;
	}
</style>
