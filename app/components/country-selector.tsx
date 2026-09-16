'use client';

import { Country } from '@/app/lib/definitions';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function CountrySelector({ countries }: { countries: Country[] }) {

	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSelect = (country) => {
		const params = new URLSearchParams(searchParams);

		if(country){
			params.set('country', country);
		} else {
			params.delete('country');
		}
		replace(`${pathname}?${params.toString()}`);
	}

	return(
		<>
			<label htmlFor="country" className="sr-only">Country</label>
			<select
				id="country"
				name="country"
				className="outline w-full p-2 rounded-lg bg-white"
				onChange={(e) => {
					handleSelect(e.target.value);
				}}
			>
				<option value="">Select a country</option>
				{
					countries.map((country) => (
						<option key={country.isoCode} value={country.isoCode}>
							{country.name[0].text}
						</option>
					))
				}
			</select>
		</>
	);
}