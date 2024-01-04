"use client";

import React from 'react';
import {updateTruckLog} from '@/app/lib/action'
import TruckCheckIn from '@/app/lib/models/TruckCheckIn';
import { TruckCheckInFields } from '@/app/lib/definition';
import { CreateTruckLog as createTruckLog} from '@/app/lib/action';
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
  } from '@heroicons/react/24/outline';


export default function CreateTruckLog({TruckCheckIn}: {TruckCheckIn: TruckCheckInFields[]}) {




  
    return (
        <div className="container mx-auto">
          <form action={createTruckLog}>
            <div className="border border-gray-300 p-6 mb-6">
              {/* First Row */}
              <div className="grid grid-cols-2 gap-6">
                {/* Pickup Number/BOL Number/Container Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    *Pickup Number/BOL Number/Container Number*
                  </label>
                  <input
                    name="pickupNumber"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                   
                  />
                </div>
    
                {/* Purpose */}
                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                    Purpose
                  </label>
                  <select
                    name="purpose"
                    id="purpose"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                  >
                    <option value="Delivery">Delivery</option>
                    <option value="Drop">Drop</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Service">Service</option>
                  </select>
                </div>
              </div>
    
              {/* Second Row */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                {/* Delivery Contents */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Delivery Contents</label>
                  <input
                    name="deliveryContents"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                   
                  />
                </div>
    
                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    name="company"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                  
                  />
                </div>
              </div>
    
              {/* Third Row */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                {/* Drivers Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Drivers Name</label>
                  <input
                    name="driversName"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                    
                  />
                </div>
    
                {/* Drivers Comments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Drivers Comments</label>
                  <input
                    name="driversComments"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                
                  />
                </div>
              </div>
    
              {/* Fourth Row */}
              <div className="mt-6">
                {/* Co-Driver */}
                <label className="block text-sm font-medium text-gray-700">Co-Driver</label>
                <input
                  name="otherDriver"
                  type="text"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              
                />
              </div>
    
              {/* Fifth Row */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                {/* Truck Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Truck Number</label>
                  <input
                    name="truckNumber"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                    
                  />
                </div>
    
                {/* Trailer Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Trailer Number</label>
                  <input
                    name="trailerNumber"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                    
                  />
                </div>
              </div>
    
              {/* Sixth Row */}
              <div className="mt-6">
                {/* Trailer Type */}
                <label className="block text-sm font-medium text-gray-700">Trailer Type</label>
                <select
                  name="trailerType"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                  required
                >
                  <option value="Conestega">Conestega</option>
                  <option value="Container">Container</option>
                  <option value="Flatbed">Flatbed</option>
                  <option value="LTL">LTL</option>
                  <option value="Roll Of Dumpster">Roll Of Dumpster</option>
                </select>
              </div>
               
              <div className="mt-6">
                {/* Trailer Type */}
                <label className="block text-sm font-medium text-gray-700">Location</label>
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
              {/* Seventh Row */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                {/* BOL Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">BOL Number</label>
                  <input
                    name="bolNumber"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                    
                  />
                </div>
    
                {/* SEAL Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">SEAL Number</label>
                  <input
                    name="sealNumber"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                    
                  />
                </div>
              </div>
    
              {/* Eighth Row */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                {/* Location */}
               
    
                {/* Destination City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Destination City</label>
                  <input
                    name="destinationCity"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                   
                  />
                </div>
    
                {/* Destination State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Destination State</label>
                  <input
                    name="destinationState"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                    
                  />
                </div>
               
    
                {/* Destination State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Carrier Number</label>
                  <input
                    name="carrierNumber"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                    
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pro-Number</label>
                  <input
                    name="proNumber"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                   
                  />
                </div>
              </div>
    
              {/* Ninth Row */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                {/* In-Plant Date and Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    In-Plant Date and Time
                  </label>
                  <input
                    name="inPlantDateTime"
                    type="datetime-local"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                    defaultValue={new Date().toISOString().slice(0, 16)}
                  />
                </div>
    
                {/* Exit Plant Date and Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Exit Plant Date and Time
                  </label>
                  <input
                    name="exitPlantDateTime"
                    type="datetime-local"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                   Scheduled Date
                  </label>
                  <input
                    name="scheduledDate"
                    type="datetime-local"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    disabled
                  />
                </div>
              </div>
             
              {/* Tenth Row */}
              <div className="mt-6">
                {/* Remarks */}
                <label className="block text-sm font-medium text-gray-700">Remarks</label>
                <textarea
                  name="remarks"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300"
           
                ></textarea>
                <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the Truck Log Status.
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="checkedin"
                  name="status"
                  type="radio"
                  value="checkedin"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="checkedin"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-yellow-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Checked-In<ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="checkedout"
                  name="status"
                  type="radio"
                  value="checkedout"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="checkedout"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Checked-Out <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              
              
            </div>
          </div>
        </fieldset>
              </div>
    
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