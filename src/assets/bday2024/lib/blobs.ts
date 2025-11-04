export async function loadBlobs(urls: string[]): Promise<string[]> {
	const blobs: string[] = [];
	const images = await Promise.allSettled(urls.map((url) => fetch(url)));

	for (const response of images) {
		if (response.status === 'fulfilled') {
			const blob = await response.value.blob();
			blobs.push(URL.createObjectURL(blob));
		}
	}

	return blobs;
}
