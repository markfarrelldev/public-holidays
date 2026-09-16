import { Country, Holiday } from './definitions';

export async function fetchCountries(): Promise<Country[]>{
		// Fetch country list from Open Holidays API
		const data = await fetch('https://openholidaysapi.org/Countries?languageIsoCode=EN');

		if(!data.ok) {
			throw new Error('Failed to fetch country list');
		}
		
		return data.json();
}

export async function fetchHolidays(country: string): Promise<Holiday[]>{
	
	const d = new Date();
	const year = d.getFullYear();

	console.log(`country: ${country} year: ${year}`);

	// Fetch holiday list from given country from Open Holidays API
	const data = await fetch(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${country}&validFrom=${year}-01-01&validTo=${year}-12-31&languageIsoCode=EN`);

	if(!data.ok) {
		throw new Error('Failed to fetch holiday list');
	}

	const holidays = data.json();
	console.log(holidays);

	return holidays;
}