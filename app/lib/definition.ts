export type TruckCheckInFields = {
    pickupNumber: string;
    purpose: string;
    deliveryContents: string;
    company: string;
    driversName: string;
    truckNumber: string;
    trailerNumber: string;
    trailerType: string;
    bolNumber: string;
    sealNumber: string;
    location: string;
    destinationCity: string;
    destinationState: string;
    inPlantDateTime?: Date | null;
    exitPlantDateTime?: Date | null;
     truckCheckInId: number;
  };

  export type user = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

  export type TrucksPerDay  = {
    month: string;
    trucks: number;
  };