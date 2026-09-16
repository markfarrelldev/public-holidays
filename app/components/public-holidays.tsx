import CountrySelector from './country-selector';
import HolidayList from './holiday-list';
import { fetchCountries } from '@/app/lib/data';
import { Country } from '@/app/lib/definitions';
import { HolidayListSkeleton } from '@/app/skeletons/holiday-list-skeleton';
import { Suspense } from 'react';

export default async function PublicHolidays({ selectedCountry }: { selectedCountry: string }){

	const countries: Country[] = await fetchCountries();

	return(
		<div className="rounded-lg bg-green-200 border border-zinc-800 shadow-zinc-700 text-zinc-950 p-6 shadow-md w-full">
			<CountrySelector countries={countries} />
			<Suspense fallback={<HolidayListSkeleton />}>
				{selectedCountry != '' && <HolidayList selectedCountry={selectedCountry}/>}
			</Suspense>
		</div>
	);
}