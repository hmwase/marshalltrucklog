import Image from 'next/image';
import { UpdateTruckLog, DeleteTruckLog, Location } from '@/app/ui/stripping/buttons';
import TruckLogStatus from '@/app/ui/trucklogs/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredTruckCheckInsForToday } from '@/app/lib/data';
import TruckCheckIn from '@/app/lib/models/TruckCheckIn';


export default async function TruckLogTable({
  query = '',
  currentPage,
}: {
  query?: string;
  currentPage: number;
})  {
  const truckCheckIns = await fetchFilteredTruckCheckInsForToday(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {truckCheckIns?.map((truckCheckIn) => (
              <div
                key={truckCheckIn.truckCheckInId}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={truckCheckIn.bolNumber}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt='Customer profile picture'
                      />
                      <p>{truckCheckIn.company}</p>
                    </div>
                    <p className="text-sm text-gray-500">{truckCheckIn.driversName}</p>
                  </div>
                  
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {(truckCheckIn.bolNumber)}
                    </p>
                    <p>{(truckCheckIn.company)}</p>
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
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                 Pickup Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Purpose
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Deliver Contents
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Company
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Drivers Name
                </th>
                
                
                <th scope="col" className="px-3 py-5 font-medium">
                  Truck Number
                </th>
               
                        
                <th scope="col" className="px-3 py-5 font-medium">
                  Location
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Destination City
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Destination State
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Stripping Start Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Stripping End Time
                </th>
                
                <th scope="col" className="px-3 py-5 font-medium">
                  Truck Log Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {truckCheckIns?.map((truckCheckIn) => (
                <tr
                  key={truckCheckIn.truckCheckInId}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{truckCheckIn.pickupNumber}</p>
                    </div>
                  </td>
                   <td className="whitespace-nowrap px-3 py-3">
                    {truckCheckIn.purpose}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {truckCheckIn.deliveryContents}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {truckCheckIn.company}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {truckCheckIn.driversName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {truckCheckIn.truckNumber}
                  </td>
                                    
                  <td className="whitespace-nowrap px-3 py-3">
                  <div className="flex ">
                      <Location title={truckCheckIn.location} />
                    
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {truckCheckIn.destinationCity}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {truckCheckIn.destinationState}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {truckCheckIn.strippingStartTime?.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {truckCheckIn.strippingEndTime?.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <TruckLogStatus status={truckCheckIn.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateTruckLog id={truckCheckIn.truckCheckInId} />
                    
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
