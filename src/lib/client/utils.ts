const formatter = Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
	hour: '2-digit',
	minute: '2-digit',
	hour12: false,
});

export const formatTimestamp = (timestamp: Date | string): string => {
	return formatter.format(new Date(timestamp));
};
