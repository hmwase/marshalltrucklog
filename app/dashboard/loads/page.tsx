import Pagination from '@/app/ui/loads/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/loads/table';
// import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { CreateLoad } from '@/app/ui/loads/buttons';

import { fetchTotalFilteredLoadsForToday,  fetchTotalFilteredLoads} from '@/app/lib/data';
import loadDataGrid from '@/app/ui/loads/loadDataGrid';
import Loads from '@/app/ui/loads/loads';
export default async function Page(
  {
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    // const query = searchParams?.query || ' ';
    // const currentPage = Number(searchParams?.page) || 1;

    const trimmedQuery = (searchParams?.query || '').trim();
const query = trimmedQuery !== '' ? trimmedQuery : ' ';
const currentPage = Number(searchParams?.page) || 1;



 
    const totalPages = await fetchTotalFilteredLoads (query);
    console.log(`fetchTotalFilteredLoadsForToday ${totalPages}`);
  return (
    <>
      
    
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl tracking-wider`}>TRUCK TRACKING LOADS</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search truck loads..." />
        <CreateLoad />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> 
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} /> 
       </div>
   
    </div> 
     
        
        </>
  );
}

