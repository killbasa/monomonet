import type { ResolvedPathname } from '$app/types';

export type FileItem =
	| {
			name: string;
			type: 'file';
			href: ResolvedPathname;
			path: string;
			hidden?: boolean;
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
			size?: string;
			modified: string;
			hidden?: boolean;
	  }
	| {
			name: string;
			type: 'directory';
			href: ResolvedPathname;
			modified: string;
			hidden?: boolean;
	  };
