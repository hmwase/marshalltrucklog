import Image from 'next/image';
import { UpdateTruckLoad, DeleteTruckLoad, Location } from '@/app/ui/loads/buttons';
import TruckLogStatus from '@/app/ui/trucklogs/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import {  fetchAllLoadsForToday, fetchTotalFilteredLoadsForToday, fetchFilteredLoadsForToday, fetchAllLoads} from '@/app/lib/data';
import Load from '@/app/lib/models/TruckCheckIn';


export default async function TruckLogTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
})  {
  const loads = await  fetchAllLoadsForToday(query, currentPage);
  console.log(`this is fetchAllLoads ${loads}`)
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className=" rounded-lg bg-gray-50 p-2 md:pt-0">
          
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
              <th scope="col" className="px-3 py-5 font-bold">
                 Load Set
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Scheduled Date
                </th>
                            
               
                      
              
                <th scope="col" className="px-3 py-5 font-bold">
                  Pro Number
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Carrier
                </th>
                
               
                
               
                <th scope="col" className="px-3 py-5 font-bold">
                  Destination
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                 State
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {loads?.map((load) => (
                <tr
                  key={load.LoadId}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{load.loadSet}</p>
                    </div>
                  </td>
                   <td className="whitespace-nowrap px-3 py-3">
                   {load.scheduledDate.toLocaleString('en-US', {month: 'long'})}
                  </td>
                  
                  
                  <td className="whitespace-nowrap px-3 py-3">
                    {load.proNumber}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {load.carrier}
                  </td>
                 
                  <td className="whitespace-nowrap px-3 py-3 ">
                    {load.destination}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 ">
                    {load.state}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateTruckLoad id={load.LoadId} />
                    
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
