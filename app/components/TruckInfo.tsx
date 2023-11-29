import React from 'react';
import { useTruckCheckIn } from '@/app/providers/truckcheckin/TruckCheckInContext'; // Import the context

const TruckInfo = () => {
  const {

    company,
    pickupNumber,
    driversName,
    location,
    trailerType,
    destinationState,
  } = useTruckCheckIn();

  return (
    <div>
      <h2>TRUCK INFORMATION</h2>
      <table>
        <tbody>
          
          <tr>
            <td>Company:</td>
            <td>{company}</td>
          </tr>
          <tr>
            <td>destination:</td>
            <td>{destinationState}</td>
          </tr>
          <tr>
            <td>Pickup Number:</td>
            <td>{pickupNumber}</td>
          </tr>
          <tr>
            <td>Driver's Name:</td>
            <td>{driversName}</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>{location}</td>
          </tr>
          <tr>
            <td>Trailer Type:</td>
            <td>{trailerType}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TruckInfo;

