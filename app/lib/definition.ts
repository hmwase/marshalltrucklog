export type TruckCheckInFields = {
    pickupNumber: string;
    purpose: string;
    deliveryContents: string;
    company: string;
    driversName: string;
    truckNumber: string;
    trailerNumber: string;
    proNumber : string;
    carrierNumber: string,
    trailerType: string;
    bolNumber: string;
    sealNumber: string;
    location: string;
    destinationCity: string;
    destinationState: string;
    inPlantDateTime?: Date;
    exitPlantDateTime?: Date | null;
    scheduledDate: Date | null,
    loadingStartTime?: Date | null,
    loadingEndTime?: Date | null,
    strippingStartTime?: Date | null,
    strippingEndTime?: Date | null,
    status : string;
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

  export type TruckLoadFields = {
    LoadId: number,
    loadSet: string,
    scheduledDate: Date,
    proNumber: string,
    carrier: string,
    destination: string,
    state: string
  }

  export type LoadFields = {
    'Load Set': string,
     'Scheduled Date': number,
    'Pro Number': string,
    Carrier: string,
    Destination: string,
    State: string
  }

  