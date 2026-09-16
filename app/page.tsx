import PublicHolidays from '@/app/components/public-holidays';

export default async function Home(props: {
  searchParams?: Promise<{country?: string;}>;
}) {

  const searchParams = await props.searchParams;
  const country = searchParams?.country || '';

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-xl flex-col items-center py-24 px-12 sm:items-start">
        <h1 className="text-2xl text-green-600 mb-6">Public Holidays by Country</h1>
        <PublicHolidays selectedCountry={country} />
      </main>
    </div>
  );
}
