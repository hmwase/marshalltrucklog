import React from 'react';
import CardWrapper, { Card } from '@/app/ui/dashboard/card';
import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '../ui/skeletons';
import TopTenCompanies from '@/app/ui/company/toptencompanies';
import TrucklogChart from '@/app/ui/dashboard/trucklog-chart';
export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl tracking-wider`}>
        DASHBOARD
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <TrucklogChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <TopTenCompanies />
        </Suspense>
      </div>
    </main>
  )
}
