import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import type { FileItem, ResolvedFileItem } from '$components/types';

export const getFileEntries = async (items: FileItem[]): Promise<ResolvedFileItem[]> => {
	return await Promise.all(
		items.map(async (item) => {
			if (item.type === 'directory') {
				return item;
			}

			const path = resolve(item.path);
			const info = await stat(resolve(path));

			return {
				...item,
				modified: info.mtime.toISOString(),
				size: formatBytes(info.size),
			};
		}),
	);
};

const formatBytes = (bytes: number): string => {
	if (bytes === 0) return '0 B';
	const k = 1024;
	const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
