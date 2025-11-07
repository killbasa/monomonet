class BeatDetectorProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.last_rms = 0;
        this.last_hit_time = 0;

        this.MINIMUM_LEVEL = 0.05;
        this.MINIMUM_DELTA = 0.13;
        this.COOLDOWN_MS = 150 / 1000; // cooldown in seconds
    }

    process(inputs, outputs, parameters) {
        const input = inputs[0][0];

        if (!input || input.length === 0) {
            return true;
        }

        // calculate rms
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += Math.pow(input[i], 2);
        }
        const rms = Math.sqrt(sum / input.length);

        const delta_rms = rms - this.last_rms;

		// if (delta_rms > this.MINIMUM_DELTA) {
		// 	this.port.postMessage({rms: rms, delta_rms: delta_rms});
		// }

        if ( (currentTime - this.last_hit_time > this.COOLDOWN_MS) &&
              rms > this.MINIMUM_LEVEL &&
              delta_rms > this.MINIMUM_DELTA )
        {
            this.port.postMessage('beat');
            this.last_hit_time = currentTime;
        }

        this.last_rms = rms;

        return true;
    }
}

registerProcessor('beat-detector-processor', BeatDetectorProcessor);
