import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

import { getTopTenCompaniesForCurrentMonth } from '@/app/lib/data';

export default async function LatestInvoices() {
  const companyNames = await getTopTenCompaniesForCurrentMonth(); // Wait for the function to resolve

  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Top Ten Companies for the Month
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* Display the list of top ten company names */}
        <div className="bg-white px-6">
          {companyNames.map((companyName, i) => {
            return (
              <div
                key={i}
                className={clsx('flex flex-row items-center justify-between py-4', {
                  'border-t': i !== 0,
                })}
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {companyName}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
