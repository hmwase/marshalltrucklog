import React from 'react';
import {CreateTruckLog as createTruckLog } from '@/app/lib/action';
import {
  ClockIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import {updateStrippingLog} from '@/app/lib/action'
import TruckCheckIn from '@/app/lib/models/TruckCheckIn';
import { TruckCheckInFields } from '@/app/lib/definition';


export default function StrippingLog({TruckCheckIn}: {TruckCheckIn: TruckCheckInFields}) {

  const updateTruckLogWithId = updateStrippingLog.bind(null, TruckCheckIn.truckCheckInId)

  return (
    <div className="container mx-auto">
      <form action={updateTruckLogWithId}>
        <div className="border border-gray-300 p-6 mb-6">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-6">
            {/* Pickup Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                *Pickup Number*
              </label>
              <input
                name="pickupNumber"
                type="text"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                required
                defaultValue={TruckCheckIn.pickupNumber}
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                *Company*
              </label>
              <input
                name="company"
                type="text"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                required
                defaultValue={TruckCheckIn.company}
              />
            </div>
          </div>

          {/* Location */}
          <div className="mt-6">
          <select
  name="location"
  className="mt-1 p-2 block w-full rounded-md border border-gray-300"
  required
>
  <option value="Dock 1">Dock 1</option>
  <option value="Dock 2">Dock 2</option>
  <option value="Dock 3">Dock 3</option>
  <option value="Dock 4">Dock 4</option>
  <option value="Dock 5">Dock 5</option>
  <option value="Dock 6">Dock 6</option>
  <option value="Dock 7">Dock 7</option>
  <option value="Dock 8">Dock 8</option>
  <option value="Drop Trailer 1">Drop Trailer 1</option>
  <option value="Drop Trailer 2">Drop Trailer 2</option>
  <option value="Drop Trailer 3">Drop Trailer 3</option>
  <option value="Drop Trailer 4">Drop Trailer 4</option>
  <option value="Drop Trailer 5">Drop Trailer 5</option>
  <option value="Drop Trailer 6">Drop Trailer 6</option>
  <option value="Drop Trailer 7">Drop Trailer 7</option>
  <option value="Drop Trailer 8">Drop Trailer 8</option>
  <option value="Drop Trailer 9">Drop Trailer 9</option>
  <option value="Drop Trailer 10">Drop Trailer 10</option>
  <option value="Drop Trailer 11">Drop Trailer 11</option>
  <option value="Drop Trailer 12">Drop Trailer 12</option>
  <option value="Drop Yard">Drop Yard</option>
  <option value="Empty Reels">Empty Reels</option>
  <option value="Lower-Pad D">Lower-Pad D</option>
  <option value="Lower-Pad E">Lower-Pad E</option>
  <option value="Lower-Pad F">Lower-Pad F</option>
  <option value="Lower-Pad G">Lower-Pad G</option>
  <option value="Receiving 1">Receiving 1</option>
  <option value="Receiving 2">Receiving 2</option>
  <option value="Receiving 3">Receiving 3</option>
  <option value="Receiving 4">Receiving 4</option>
  <option value="Receiving Reel">Receiving Reel</option>
  <option value="Receiving Rod">Receiving Rod</option>
  <option value="Receiving Store">Receiving Store</option>
  <option value="Red Line">Red Line</option>
  <option value="Scrap Area">Scrap Area</option>
  <option value="Silo">Silo</option>
</select>
          </div>

          {/* Loading Start Time */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Stripping Start Time
              </label>
              <input
                name="strippingStartTime"
                type="datetime-local"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </div>

            {/* Loading End Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Stripping End Time
              </label>
              <input
                name="strippingEndTime"
                type="datetime-local"
                className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              />
            </div>
          </div>

          {/* Remarks */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Remarks
            </label>
            <textarea
              name="remarks"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            ></textarea>
          </div>

          {/* Status */}
          <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the Truck Log Status.
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              
             
              <div className="flex items-center">
                <input
                  id="stripping"
                  name="status"
                  type="radio"
                  value="stripping"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="stripping"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-blue-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Stripping <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              
            </div>
          </div>
        </fieldset>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
