import type { ResolvedPathname } from '$app/types';

export type FileItem =
	| {
			name: string;
			type: 'file';
			href: ResolvedPathname;
			hidden?: boolean;
			path: string;
	  }
	| {
			name: string;
			type: 'directory';
			href: ResolvedPathname;
			hidden?: boolean;
	  };

export type ResolvedFileItem =
	| {
			name: string;
			type: 'file';
			href: ResolvedPathname;
			hidden?: boolean;
			size?: string;
			modified: string;
	  }
	| Extract<FileItem, { type: 'directory' }>;
