

import {Sequelize, DataTypes} from 'sequelize';
import { Op, fn, col } from 'sequelize';
import { TruckCheckInFields } from './definition';

// Define the TruckCheckIn model for the "truck_check_in" table
import TruckCheckIn from './models/TruckCheckIn';

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
        'truckCheckInId',
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
          { truckCheckInId: { [Op.like]: `%${query}%` } },
          
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
    const count = await TruckCheckIn.count({
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
          { truckCheckInId: { [Op.like]: `%${query}%` } },
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


