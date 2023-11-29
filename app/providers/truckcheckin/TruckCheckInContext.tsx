// TruckCheckInContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type TruckCheckInContextType = {
  truckCheckInId: number | null;
  company: string | null;
  pickupNumber: string | null;
  driversName: string | null;
  location: string | null;
  trailerType: string | null; // Add trailerType to the context
  destinationState: string | null;
  setTruckCheckInId: (id: number) => void;
  setCompany: (company: string) => void;
  setPickupNumber: (pickupNumber: string) => void;
  setDriversName: (name: string) => void;
  setLocation: (location: string) => void;
  setTrailerType: (trailerType: string) => void; // Add setter for trailerType
  setDestination: (destinationState: string) => void;
};

const TruckCheckInContext = createContext<TruckCheckInContextType | undefined>(undefined);

type TruckCheckInProviderProps = {
  children: ReactNode;
};

export const TruckCheckInProvider: React.FC<TruckCheckInProviderProps> = ({ children }) => {
  const [truckCheckInId, setTruckCheckInId] = useState<number | null>(null);
  const [company, setCompany] = useState<string | null>(null);
  const [pickupNumber, setPickupNumber] = useState<string | null>(null);
  const [driversName, setDriversName] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [trailerType, setTrailerType] = useState<string | null>(null); // Initialize trailerType state
  const [destinationState, setDestination] = useState<string | null>(null);

  return (
    <TruckCheckInContext.Provider
      value={{
        truckCheckInId,
        company,
        pickupNumber,
        driversName,
        location,
        trailerType,
        destinationState,
        setTruckCheckInId,
        setCompany,
        setPickupNumber,
        setDriversName,
        setLocation,
        setTrailerType, // Include the setter for trailerType
        setDestination,
      }}
    >
      {children}
    </TruckCheckInContext.Provider>
  );
};


export const useTruckCheckIn = () => {
  const context = useContext(TruckCheckInContext);
  if (context === undefined) {
    throw new Error('useTruckCheckIn must be used within a TruckCheckInProvider');
  }
  return context;
};
