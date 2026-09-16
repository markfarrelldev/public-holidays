import { Holiday } from '@/app/lib/definitions';
import { fetchHolidays } from '@/app/lib/data';
import { formatDate } from '@/app/lib/utils';

export default async function HolidayList({ selectedCountry }: { selectedCountry: string }) {

	
	const holidays: Holiday[] = await fetchHolidays(selectedCountry);	
	
	return(
		<div className="mt-6">
			<table>
				<tbody>
					{
						holidays.map((holiday) => (
							<tr key={holiday.id}>
								<td className="pr-6">{formatDate(holiday.startDate)}</td>
								<td>{holiday.name[0].text}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	);
}