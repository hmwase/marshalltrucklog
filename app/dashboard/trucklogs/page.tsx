
import { InvoicesTableSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';


import Pagination from '@/app/ui/trucklogs/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/trucklogs/table';
import LoadTable from '@/app/ui/truckLoads/table'
import { lusitana } from '@/app/ui/fonts';
import { fetchTotalFilteredTruckCheckIns, fetchFilteredLoadsForToday, fetchTotalFilteredLoadsForToday, fetchAllLoadsForToday } from '@/app/lib/data';
import { CreateTruckLog } from '@/app/ui/trucklogs/buttons';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const currentPage = Number(searchParams?.page) || 1;
  
  const totalPages = await fetchTotalFilteredTruckCheckIns(query);

  // Calculate today's date
  // Calculate today's date
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  // Update the title with today's date
  const pageTitle = `TRUCK LOGS FOR ${formattedDate}`;
  const pageTitle2 = `TRUCK LOADS FOR ${formattedDate}`;
  return (
    <div className="w-full">
     
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl tracking-wider`}>{pageTitle}</h1>
      </div>


      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search truck log..." />
         <CreateTruckLog />
      </div>

      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    
    </div>
  );
}
