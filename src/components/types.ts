import type { ResolvedPathname } from '$app/types';

export type FileItem =
	| {
			name: string;
			type: 'file' | 'directory';
			href: ResolvedPathname;
			path: string;
			hidden?: boolean;
	  }
	| {
			name: string;
			type: 'parent';
			href: ResolvedPathname;
			hidden?: boolean;
	  };

export type ResolvedFileItem =
	| {
			name: string;
			type: 'file' | 'directory';
			href: ResolvedPathname;
			size?: string;
			modified: string;
			hidden?: boolean;
	  }
	| {
			name: string;
			type: 'parent';
			href: ResolvedPathname;
			modified: string;
			hidden?: boolean;
	  };
