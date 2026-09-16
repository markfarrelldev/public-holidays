export const formatDate = (dateStr: string) => {
	
	const date = new Date(dateStr);
	const options: Intl.DateTimeFormatOptions = {
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC'
	};
	const formatter = new Intl.DateTimeFormat('en-US', options);

	return formatter.format(date);
}