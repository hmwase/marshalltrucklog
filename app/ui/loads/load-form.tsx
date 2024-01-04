"use client";

import React from 'react';
import {CreateLoad} from '@/app/lib/action'
import TruckCheckIn from '@/app/lib/models/TruckCheckIn';
import { TruckCheckInFields } from '@/app/lib/definition';

import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
  } from '@heroicons/react/24/outline';

function LoadForm() {
  return (
    <div className="max-w-2xl mx-auto">
      <form action={CreateLoad} method="post" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        {/* Row 1 */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loadSet">Load Set</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="loadSet" name="loadSet" type="text" placeholder="Load Set" />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="scheduledDate">Scheduled Date</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="scheduledDate" name="scheduledDate" type="date" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shipDate">Ship Date</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shipDate" name="shipDate" type="date" />
          </div>
          <div >
                {/* Trailer Type */}
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                  required
                >
                  <option value="Conestega">On Time</option>
                  <option value="Container">Late</option>
                  <option value="Flatbed">CUPU Late</option>
                  <option value="LTL">CUPU on Time</option>
                 
                </select>
              </div>
        </div>

        {/* Continue adding rows for the remaining fields */}
        
        {/* Row 3 */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doWSchedule">Do W Schedule</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="doWSchedule" name="doWSchedule" type="number" placeholder="Do W Schedule" />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doWShip">Do W Ship</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="doWShip" name="doWShip" type="number" placeholder="Do W Ship" />
          </div>
        </div>
        {/* Row 4 */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="span">Span</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="span" name="span" type="number" placeholder="Span" />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proNumber">Pro Number</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proNumber" name="proNumber" type="string" placeholder="Pro Number" />
          </div>
        </div>
        {/* Row 5 */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carrier">Carrier</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="carrier" name="carrier" type="string" placeholder="Carrier" />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointment">Appointment</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="appointment" name="appointmen" type="time" placeholder="Appointment" />
          </div>
        </div>
        {/* Row 6 */}
        <div className="mb-4 flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="arrivalTime">Arrival Time</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="arrivalTime" name="arrivalTime" type="time" placeholder="Arrival Time" />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eta">ETA</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="eta" name="eta" type="time" placeholder="ETA" />
          </div>
        </div>
        {/* Row 7 */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeRDDow">Time RD Dow</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="timeRDDow" name="timeRDDow" type="time" placeholder="timeRDDow" />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comments">Comments</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comments" name="comments" type="string" placeholder="Comments" />
          </div>
        </div>

        {/* Continue adding rows for the remaining fields */}
        
        {/* Add rows for other fields similarly */}

        <div className="flex items-center justify-between mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoadForm;
