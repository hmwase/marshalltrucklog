"use client"

import Image from 'next/image';
import { UpdateTruckLog, DeleteTruckLog, Location } from '@/app/ui/stripping/buttons';
import TruckLogStatus from '@/app/ui/trucklogs/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredLoadsForToday, fetchTotalFilteredLoadsForToday,  fetchTotalLoadsForToday, fetchAllLoadsForToday } from '@/app/lib/data';
import TruckCheckIn from '@/app/lib/models/TruckCheckIn';
import { CreateTruckLog } from '../truckLoads/buttons';
import { useEffect, useState, useContext } from 'react';
import { LoadFields, TruckLoadFields } from '@/app/lib/definition';
import {useLoadsContext} from '@/app/providers/LoadsContext';


export default function TruckLogTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
})  {
  
  // const loads = await fetchAllLoadsForToday(query, currentPage); 
  
  //  console.log(`this is the number of trucks ${loads}`)

  const {loads} = useLoadsContext(); // Initialize loads state

  // useEffect(() => {
  //   // Fetch loads data and update state when query or currentPage changes
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/loads")
  //       const data = await response.json();
  //       setLoads(data);
  //     } catch (error) {
  //       console.error('Error fetching loads:', error);
  //     }
  //   };

  //   fetchData(); // Fetch data when component mounts or when query/currentPage changes
  // }, []);
   
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {loads?.map((load) => (
              <div
                key={load.LoadId}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      
                      <p>{load.scheduledDate?.toLocaleString()}</p>
                    </div>
                    <p className="text-sm text-gray-500">{load.proNumber}</p>
                  </div>
                  
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {(load.carrier)}
                    </p>
                    <p>{(load.proNumber)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                 Load Set
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Scheduled Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Pro Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Carrier
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Destination
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {loads?.map((load) => (
                <tr
                  key={load.LoadId}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                 
                    {load.loadSet}
                 
                  </td>
                   <td className="whitespace-nowrap px-3 py-3">
                   {load.scheduledDate.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {load.proNumber}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {load.carrier}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {load.destination}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <CreateTruckLog  id={load.LoadId} />
                    
                    </div>
                  </td>          
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
