

import {Sequelize, DataTypes,} from 'sequelize';
import { Op, fn, col, QueryTypes } from 'sequelize';
import { TruckCheckInFields, TruckLoadFields } from './definition';
import { unstable_noStore as noStore } from 'next/cache';
// Define the TruckCheckIn model for the "truck_check_in" table
import TruckCheckIn from './models/TruckCheckIn';
import Load from './models/load';
import sequelize from "@/app/lib/database";

// Define a method to get the total number of trucks checked in for today
export const getTotalTrucksCheckedInForToday = async () => {
    const today = new Date(); // Get the current date
    today.setHours(0, 0, 0, 0); // Set the time to midnight
  
    const totalTrucksCheckedIn = await TruckCheckIn.findAll({
      where: {
        inPlantDateTime: {
          [Op.gte]: today, // Use Sequelize operators to compare dates
        },
      },
    });
  
    // Return the length of the totalTrucksCheckedIn array to get the count
    return totalTrucksCheckedIn.length;
  };

    // Define a method to get the total number of trucks checked in for today

    export const getTotalTrucksCheckedInForCurrentMonth = async () => {
        const currentDate = new Date();
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      
        const totalTrucksCheckedIn = await TruckCheckIn.count({
          where: {
            inPlantDateTime: {
              [Op.between]: [startOfMonth, endOfMonth],
            },
          },
        });
        console.log(totalTrucksCheckedIn);
        return totalTrucksCheckedIn;
      };


      export const getTotalTrucksCheckedInForCurrentYear = async () => {
        const currentDate = new Date();
        const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
        const endOfYear = new Date(currentDate.getFullYear(), 11, 31);
      
        const totalTrucksCheckedIn = await TruckCheckIn.count({
          where: {
            inPlantDateTime: {
              [Op.between]: [startOfYear, endOfYear],
            },
          },
        });
      
        return totalTrucksCheckedIn;
      };


      export const getTotalUniqueCompaniesForCurrentMonth = async () => {
        const currentDate = new Date();
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      
        const uniqueCompanies = await TruckCheckIn.count({
          distinct: true, // Count distinct values
          col: 'company', // Specify the column to count distinct values on (replace with your actual column name)
          where: {
            inPlantDateTime: {
              [Op.between]: [startOfMonth, endOfMonth],
            },
          },
        });
      
        return uniqueCompanies;
    };

    interface CompanyResults {
        company: string;
    }

    // Define a method to get the names of the top ten companies checked in for the current month

    // Define an interface or type to represent the result structure
interface CompanyResult {
  company: string;
}

// Define a method to get the names of the top ten companies checked in for the current month
export const getTopTenCompaniesForCurrentMonth = async () => {
  const currentDate = new Date();
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const topTenCompanies: CompanyResult[] = await TruckCheckIn.findAll({
    attributes: [
      'company', // Include the company name in the SELECT list
      [fn('COUNT', col('company')), 'count'], // Include the count of each company
    ],
    where: {
      inPlantDateTime: {
        [Op.between]: [startOfMonth, endOfMonth],
      },
    },
    group: ['company'],
    order: [[fn('COUNT', col('company')), 'DESC']], // Order by the count in descending order
    limit: 10,
  });

  // Extract the company names from the result
  const companyNames = topTenCompanies.map((item) => item.company);

  return companyNames;
};

export const fetchTruckCheckIns = async () => {
  const truckCheckIns = await TruckCheckIn.findAll();
  return truckCheckIns;
};


const ITEMS_PER_PAGE = 10;


export async function fetchFilteredTruckCheckIns(query: string, currentPage: number): Promise<TruckCheckInFields[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const limit = ITEMS_PER_PAGE;

  
  try {
    const truckCheckIns = await TruckCheckIn.findAll({
      attributes: [
        'pickupNumber',
        'purpose',
        'deliveryContents',
        'company',
        'driversName',
        'truckNumber',
        'location',
        'destinationCity',
        'destinationState',
        'inPlantDateTime',
        'exitPlantDateTime',
        'status',
      ],
      where: {
        [Op.or]: [
          { pickupNumber: { [Op.like]: `%${query}%` } }, // Use Op.like for LIKE operator
          { purpose: { [Op.like]: `%${query}%` } },
          { company: { [Op.like]: `%${query}%` } },
          { driversName: { [Op.like]: `%${query}%` } },
          { truckNumber: { [Op.like]: `%${query}%` } },
          { location: { [Op.like]: `%${query}%` } },
          { destinationCity: { [Op.like]: `%${query}%` } },
          { destinationState: { [Op.like]: `%${query}%` } },
          { inPlantDateTime: { [Op.like]: `%${query}%` } },
          { exitPlantDateTime: { [Op.like]: `%${query}%` } },
          { status: { [Op.like]: `%${query}%` } },
          
        ],
      },
      order: [['inPlantDateTime', 'DESC']], // You can change the ordering as needed
      limit: limit,
      offset: offset,
    });

    return truckCheckIns;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch truck check-ins.');
  }
}

export async function fetchTotalFilteredTruckCheckIns(query: string) {
  try {
    const {count, rows} = await TruckCheckIn.findAndCountAll({
      where: {
        [Op.or]: [
          { pickupNumber: { [Op.like]: `%${query}%` } },
          { purpose: { [Op.like]: `%${query}%` } },
          { company: { [Op.like]: `%${query}%` } },
          { driversName: { [Op.like]: `%${query}%` } },
          { truckNumber: { [Op.like]: `%${query}%` } },
          { location: { [Op.like]: `%${query}%` } },
          { destinationCity: { [Op.like]: `%${query}%` } },
          { destinationState: { [Op.like]: `%${query}%` } },
          { inPlantDateTime: { [Op.like]: `%${query}%` } },
          { exitPlantDateTime: { [Op.like]: `%${query}%` } },
          { status: { [Op.like]: `%${query}%` } },
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the total number of filtered truck check-ins.');
  }
}

export async function fetchTruckCheckInById(id: number) {
  try {
    const truckCheckIn = await TruckCheckIn.findByPk(id);

    if (!truckCheckIn) {
      throw new Error('Truck check-in not found');
    }

    // Optionally, you can convert the truckCheckIn data to a plain object
    // before returning it to remove Sequelize-specific properties.
    return truckCheckIn.toJSON();
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch truck check-in.');
  }
}


export const getTrucksCheckedInByMonth = async () => {
  try {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // Fetch data for each month
    const truckCheckInsByMonth = [];

    // Iterate over each month from the current month backwards
    for (let i = 0; i < 12; i++) {
      const monthStartDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i,
        1
      );
      const monthEndDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i + 1,
        0
      );

      const totalTrucksCheckedIn = await TruckCheckIn.count({
        where: {
          inPlantDateTime: {
            [Op.between]: [monthStartDate, monthEndDate],
          },
        },
      });

      truckCheckInsByMonth.push({
        month: monthStartDate.toLocaleDateString('en-US', { month: 'short' }), // Format the month
        totalTrucksCheckedIn,
      });
    }

    return truckCheckInsByMonth.reverse(); // Reverse the array to have the data in ascending order of months
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch truck check-in data.');
  }
};


export async function fetchAllTruckCheckInsForToday() {
  try {
    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set the time to the beginning of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999); // Set the time to the end of the day

    const truckCheckIns = await TruckCheckIn.findAll({
      where: {
        inPlantDateTime: {
          [Op.between]: [startOfDay, endOfDay], // Filter for today's date
        },
      },
      order: [['inPlantDateTime', 'DESC']], // You can change the ordering as needed
    });

    return truckCheckIns;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch truck check-in data for today.');
  }
}




export async function fetchFilteredTruckCheckInsForToday(query: string, currentPage: number): Promise<TruckCheckInFields[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const limit = ITEMS_PER_PAGE;

  try {
    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set the time to the beginning of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999); // Set the time to the end of the day

    const truckCheckIns = await TruckCheckIn.findAll({
      attributes: [
        'pickupNumber',
        'purpose',
        'deliveryContents',
        'company',
        'driversName',
        'truckNumber',
        'location',
        'destinationCity',
        'destinationState',
        'inPlantDateTime',
        'exitPlantDateTime',
        'loadingStartTime',
        'loadingEndTime',
        'strippingStartTime',
        'strippingEndTime',
        'truckCheckInId',
        'status',
      ],
      where: {
        [Op.and]: [
          {
            [Op.or]: [
              { pickupNumber: { [Op.like]: `%${query}%` } }, // Use Op.like for LIKE operator
              { purpose: { [Op.like]: `%${query}%` } },
              { company: { [Op.like]: `%${query}%` } },
              { driversName: { [Op.like]: `%${query}%` } },
              { truckNumber: { [Op.like]: `%${query}%` } },
              { location: { [Op.like]: `%${query}%` } },
              { destinationCity: { [Op.like]: `%${query}%` } },
              { destinationState: { [Op.like]: `%${query}%` } },
              { inPlantDateTime: { [Op.like]: `%${query}%` } },
              { exitPlantDateTime: { [Op.like]: `%${query}%` } },
              { loadingStartTime: { [Op.like]: `%${query}%` } },
              { loadingEndTime: { [Op.like]: `%${query}%` } },
              { strippingStartTime: { [Op.like]: `%${query}%` } },
              { strippingEndTime: { [Op.like]: `%${query}%` } },
              { truckCheckInId: { [Op.like]: `%${query}%` } },
              { status: { [Op.like]: `%${query}%` } },
            ],
          },
          {
            inPlantDateTime: {
              [Op.between]: [startOfDay, endOfDay], // Filter for today's date
            },
          },
        ],
      },
      order: [['inPlantDateTime', 'DESC']], // You can change the ordering as needed
      limit: limit,
      offset: offset,
    });

    return truckCheckIns;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch truck check-ins for today.');
  }
}


export async function fetchFilteredLoadsForToday(query: string, currentPage: number): Promise<TruckLoadFields[]> {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const limit = ITEMS_PER_PAGE;
  
  try {
    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set the time to the beginning of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999); // Set the time to the end of the day

    const loads = await Load.findAll({
      attributes: [
        'LoadId',
        'loadSet',
          
        'proNumber',
        'carrier',
        'destination'
       
        
       
    
      ],
      where: {
        [Op.and]: [
          {
            [Op.or]: [
              { loadSet: { [Op.like]: `%${query}%` } },
                               
              { proNumber: { [Op.like]: `%${query}%` } },
              { carrier: { [Op.like]: `%${query}%` } },
             {destination:{[Op.like]:`%${query}%`}},
            
             
              
             
             
            ],
          },
          {
            scheduledDate: {
              [Op.between]: [startOfDay, endOfDay], // Filter for today's date
            },
          },
        ],
      },
      order: [['scheduledDate', 'DESC']], // You can change the ordering as needed
      limit: limit,
      offset: offset,
    });

    return loads;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch loads for today.');
  }
}



// export async function fetchFilteredLoadsForToday(query: string, currentPage: number): Promise<TruckLoadFields[]> {
//   noStore();
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;
//   const limit = ITEMS_PER_PAGE;

//   try {
//     const today = new Date();
//     const startOfDay = new Date(today);
//     startOfDay.setHours(0, 0, 0, 0); // Set the time to the beginning of the day
//     const endOfDay = new Date(today);
//     endOfDay.setHours(23, 59, 59, 999); // Set the time to the end of the day

//     const queryText = `
//       SELECT "LoadId", "loadSet", "scheduledDate", "shipDate", "status", "doWSchedule", "doWShip", 
//       "Span", "proNumber", "carrier", "appointment", "eta", "arrivalTime", "timeRDDow", "comments"
//       FROM "Loads" AS "Load"
//       WHERE (
//         (
//           "Load"."loadSet" LIKE :query OR
//           "Load"."status" LIKE :query OR
//           "Load"."doWSchedule" LIKE :query OR
//           "Load"."doWShip" LIKE :query OR
//           "Load"."Span" LIKE :query OR
//           "Load"."proNumber" LIKE :query OR
//           "Load"."carrier" LIKE :query OR
//           "Load"."appointment" LIKE :query OR
//           "Load"."eta" LIKE :query OR
//           "Load"."arrivalTime" LIKE :query OR
//           "Load"."timeRDDow" LIKE :query OR
//           "Load"."comments" LIKE :query
//         )
//         AND
//         "Load"."scheduledDate" BETWEEN :startOfDay AND :endOfDay
//       )
//       ORDER BY "Load"."scheduledDate" DESC
//       OFFSET :offset ROWS FETCH NEXT :limit ROWS ONLY;
//     `;

//     const replacements = {
//       query: `%${query}%`,
//       startOfDay: startOfDay.toISOString(),
//       endOfDay: endOfDay.toISOString(),
//       offset: offset,
//       limit: limit,
//     };

//     const loads = await sequelize.query(queryText, {
//       replacements,
//       type: sequelize.QueryTypes.SELECT,
//     });

//     return loads;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch loads for today.');
//   }
// }


export async function fetchAllLoadsForToday(query: string, currentPage: number): Promise<TruckLoadFields[]> {
  try {
    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set the time to the beginning of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999); // Set the time to the end of the day

    const loadsForToday = await Load.findAll({
      where: {
        
        scheduledDate: {
          [Op.between]: [startOfDay, endOfDay], // Filter for today's date
        },
      },
      order: [['scheduledDate', 'DESC']], // You can change the ordering as needed
    });

    return loadsForToday;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch load data for today.');
  }
}


export async function fetchTotalLoadsForToday() {
  try {
    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set the time to the beginning of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999); // Set the time to the end of the day

    const loadsForToday = await Load.findAll({
      where: {
        scheduledDate: {
          [Op.between]: [startOfDay, endOfDay], // Filter for today's date
        },
      },
      order: [['scheduledDate', 'DESC']], // You can change the ordering as needed
    });

    const {count, rows} = await Load.findAndCountAll({
      where: {
        scheduledDate: {
          [Op.between]: [startOfDay, endOfDay], // Filter for today's date
        },
      },
    });

    return { loadsForToday, count };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch load data for today.');
  }
}

export async function fetchLoadsToday(id: number) {
  try {
    const load = await Load.findByPk(id);

    if (!load) {
      throw new Error('Truck check-in not found');
    }

    // Optionally, you can convert the truckCheckIn data to a plain object
    // before returning it to remove Sequelize-specific properties.
    return load.toJSON();
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch load loadId.');
  }
}



// export async function fetchTotalFilteredLoadsForToday(query: string) {
//   try {
//     const today = new Date();
//     const startOfDay = new Date(today);
//     startOfDay.setHours(0, 0, 0, 0); // Set the time to the beginning of the day
//     const endOfDay = new Date(today);
//     endOfDay.setHours(23, 59, 59, 999); // Set the time to the end of the day

//     const count = await Load.count({
//       where: {
//         [Op.and]: [
//           {
//             [Op.or]: [
//               // Your conditions for filtering by attributes...
//               { loadSet: { [Op.like]: `%${query}%` } },
//               { status: { [Op.like]: `%${query}%` } },
//               { doWSchedule: { [Op.like]: `%${query}%` } },
//               { doWShip: { [Op.like]: `%${query}%` } },
//               { Span: { [Op.like]: `%${query}%` } },
//               { proNumber: { [Op.like]: `%${query}%` } },
//               { carrier: { [Op.like]: `%${query}%` } },
//               { appointment: { [Op.like]: `%${query}%` } },
//               { eta: { [Op.like]: `%${query}%` } },
//               { arrivalTime: { [Op.like]: `%${query}%` } },
//               { timeRDDow: { [Op.like]: `%${query}%` } },
//               { comments: { [Op.like]: `%${query}%` } },
//             ],
//           },
//           {
//             scheduledDate: {
//               [Op.between]: [startOfDay, endOfDay], // Filter for today's date
//             },
//           },
//         ],
//       },
//     });

//     const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch the total number of filtered loads.');
//   }
// }

// export async function fetchTotalFilteredLoadsForToday(query: string) {
//   try {
//     const today = new Date();
//     const startOfDay = new Date(today);
//     startOfDay.setHours(0, 0, 0, 0); // Set the time to the beginning of the day
//     const endOfDay = new Date(today);
//     endOfDay.setHours(23, 59, 59, 999); // Set the time to the end of the day

//     const count = await Load.count({
//       where: {
//         [Op.or]: [
//           { loadSet: { [Op.like]: `%${query}%` } },
//           { status: { [Op.like]: `%${query}%` } },
//           { doWSchedule: { [Op.like]: `%${query}%` } },
//           { doWShip: { [Op.like]: `%${query}%` } },
//           { Span: { [Op.like]: `%${query}%` } },
//           { proNumber: { [Op.like]: `%${query}%` } },
//           { carrier: { [Op.like]: `%${query}%` } },
//           { appointment: { [Op.like]: `%${query}%` } },
//           { eta: { [Op.like]: `%${query}%` } },
//           { arrivalTime: { [Op.like]: `%${query}%` } },
//           { timeRDDow: { [Op.like]: `%${query}%` } },
//           { comments: { [Op.like]: `%${query}%` } },
//         ],
//         scheduledDate: {
//           [Op.between]: [startOfDay, endOfDay], // Filter for today's date
//         },
//       },
//     });

//     const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch the total number of filtered loads.');
//   }
// }


export async function fetchTotalFilteredLoadsForToday(query: string) {
  try {
    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0); // Set the time to the beginning of the day
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999); // Set the time to the end of the day

    // Remove the WHERE clause conditions for testing the count without filtering
    const count = await Load.findAndCountAll();

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the total number of filtered loads.');
  }
}



export async function fetchTotalFilteredLoads(query:  string) {
  try {
    const {count,rows} = await Load.findAndCountAll({
      where: {
        [Op.or]: [
          { loadSet: { [Op.like]: `%${query}%` } },
            
          {destination:{[Op.like]: `%${query}%`}},
          { proNumber: { [Op.like]: `%${query}%` } },
          { carrier: { [Op.like]: `%${query}%` } },
         
        
         
          
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the total number of filtered loads.');
  }
}


export async function fetchAllLoads(query: string, currentPage: number): Promise<TruckLoadFields[]> {
  const loads = await Load.findAll();
  return loads;
};