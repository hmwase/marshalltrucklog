// import Image from 'next/image';
// import { UpdateTruckLog, DeleteTruckLog, Location } from '@/app/ui/trucklogs/buttons';
// import TruckLogStatus from '@/app/ui/trucklogs/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import {  fetchAllLoadsForToday, fetchTotalFilteredLoadsForToday, fetchFilteredLoadsForToday} from '@/app/lib/data';
// import Load from '@/app/lib/models/TruckCheckIn';

// type loads = {
//     loadSet: string,
//     scheduledDate: Date,
//     shippedDate: Date,
//     proNumber: string,
//     carrier: string,
// }

// export default async function TruckLogTable({
//   loads,
//   query,
//   currentPage,
// }: {
//   query: string;
//   currentPage: number;
//   loads: loads

// })  {
  
//   return (
//     <div className="mt-6 flow-root">
//       <div className="inline-block min-w-full align-middle">
//         <div className=" rounded-lg bg-gray-50 p-2 md:pt-0">
          
//           <table className="hidden min-w-full text-gray-900 md:table">
//             <thead className="rounded-lg text-left text-sm font-normal">
//               <tr>
//                 <th scope="col" className=" w-20 px-4 py-5 font-bold sm:pl-6">
//                  Load Set
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-bold">
//                   Scheduled Date
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-bold">
//                   Shipped Date
//                 </th>
                
//                 <th scope="col" className="px-3 py-5 font-bold">
//                   Pro Number
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-bold">
//                   Carrier
//                 </th>
                
//                 <th scope="col" className="relative py-3 pl-6 pr-3">
//                   <span className="sr-only">Edit</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               {loads?.map((load) => (
//                 <tr
//                   key={load.LoadId}
//                   className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
//                 >
//                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                     <div className="flex items-center gap-3">
//                       <p>{load.loadSet}</p>
//                     </div>
//                   </td>
//                    <td className="whitespace-nowrap px-3 py-3">
//                     {load.scheduledDate.toLocaleString()}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {load.shipDate.toLocaleString()}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {load.status}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {load.doWSchedule}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {load.doWShip}
//                   </td>
                                    
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {load.Span}                    
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {load.proNumber}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {load.carrier}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {load.appointment?.toLocaleString()}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {load.eta?.toLocaleString()}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3 ">
//                     {load.arrivalTime?.toLocaleString()}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3 ">
//                     {load.timeRDDow?.toLocaleString()}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3 ">
//                     {load.comments?.toLocaleString()}
//                   </td>
//                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                     <div className="flex justify-end gap-3">
//                       <UpdateTruckLog id={load.LoadId} />
                    
//                     </div>
//                   </td>          
                  
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
