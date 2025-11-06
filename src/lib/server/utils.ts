import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import type { FileItem, ResolvedFileItem } from '$components/types';

export const getFileEntries = async (items: FileItem[]): Promise<ResolvedFileItem[]> => {
	return await Promise.all(
		items.map(async (item) => {
			if (item.type === 'directory') {
				return {
					name: item.name,
					type: item.type,
					href: item.href,
					hidden: item.hidden,
					modified: '-',
				};
			}

			return {
				name: item.name,
				type: item.type,
				href: item.href,
				path: item.path,
				hidden: item.hidden,
				modified: item.path ? await checkLastModified(item.path) : '-',
				size: item.path ? await checkFileSize(item.path) : undefined,
			};
		}),
	);
};

export const checkLastModified = async (path: string): Promise<string> => {
	const result = await stat(resolve(path));
	return result.mtime.toISOString();
};

export const checkFileSize = async (path: string): Promise<string> => {
	const result = await stat(resolve(path));
	return formatBytes(result.size);
};

const formatBytes = (bytes: number): string => {
	if (bytes === 0) return '0 B';
	const k = 1024;
	const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
