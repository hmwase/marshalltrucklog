"use client";

import React from 'react';
import {updateTruckLog} from '@/app/lib/action'
import TruckCheckIn from '@/app/lib/models/TruckCheckIn';
import { TruckCheckInFields } from '@/app/lib/definition';

import { init } from 'next/dist/compiled/webpack/webpack';

export default function EditTruckLog({TruckCheckIn}: {TruckCheckIn: TruckCheckInFields}) {

  const updateTruckLogWithId = updateTruckLog.bind(null, TruckCheckIn.truckCheckInId)


  
    return (
        <div className="container mx-auto">
          <form action={updateTruckLogWithId}>
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
                    defaultValue={TruckCheckIn.pickupNumber}
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
                    defaultValue={TruckCheckIn.deliveryContents}
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
                    defaultValue={TruckCheckIn.company}
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
                    defaultValue={TruckCheckIn.driversName}
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
                  required
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
                    defaultValue={TruckCheckIn.truckNumber}
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
                    defaultValue={TruckCheckIn.trailerNumber}
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
                  <option value="Drop Trailer">Drop Trailer</option>
                  <option value="Flatbed">Flatbed</option>
                  <option value="LTL">LTL</option>
                  <option value="Roll Of Dumpster">Roll Of Dumpster</option>
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
                    defaultValue={TruckCheckIn.bolNumber}
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
                    defaultValue={TruckCheckIn.sealNumber}
                  />
                </div>
              </div>
    
              {/* Eighth Row */}
              <div className="grid grid-cols-3 gap-6 mt-6">
                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    name="location"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                    defaultValue={TruckCheckIn.location}
                  />
                </div>
    
                {/* Destination City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Destination City</label>
                  <input
                    name="destinationCity"
                    type="text"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300"
                    required
                    defaultValue={TruckCheckIn.destinationCity}
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
                    defaultValue={TruckCheckIn.destinationState}
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
                    required
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