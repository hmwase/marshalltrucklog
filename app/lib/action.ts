"use server"

import { format, parseISO } from 'date-fns'; // Import the format function
 import { revalidatePath } from "next/cache";
  import { redirect } from "next/navigation";
  import TruckCheckIn from "./models/TruckCheckIn";
  import Load from "./models/load";
  import {z} from "zod";
import { NextResponse } from "next/server";
import { TruckLoadFields, LoadFields } from './definition';
import { ExcelDateToJSDate } from './utils';

// Define the schema for form validation
const FormSchema = z.object({
  pickupNumber: z.string().min(1), // Adjust validation rules as needed
  purpose: z.string().min(1),
  deliveryContents: z.string().optional(),
  company: z.string().min(1),
  driversName: z.string().min(1),
  driversComments: z.string().optional(),
  otherDriver: z.string().optional(),
  truckNumber: z.string().min(1),
  trailerNumber: z.string().min(1),
  trailerType: z.string().min(1),
  bolNumber: z.string().min(1),
  sealNumber: z.string().min(1),
  location: z.string().min(1),
  destinationCity: z.string().min(1),
  destinationState: z.string().min(1),
  inPlantDateTime: z.string().optional(),
  exitPlantDateTime: z.string().optional(),
  loadingStartTime: z.string().optional(),
  loadingEndTime: z.string().optional(),
  strippingStartTime: z.string().optional(),
  strippingEndTime: z.string().optional(),
  remarks: z.string().optional(),
  status: z.string().min(1),
  truckCheckInId: z.number(), // Assuming this should be included as well
});


export async function POST(request: Request) {

  const body = await request.json();
    
  return NextResponse.json({});
}

const UpdateTruckLog = FormSchema.omit({truckCheckInId: true, inPlantDateTime: true, exitPlantDateTime: true})





export async function updateTruckLog(id: number, formData: FormData) {
   

  // Format the date field exitPlantDateTime to ISO format
  const currentDate = new Date().toISOString();

  try {

   const data = Object.fromEntries(formData.entries());

  // Perform validation using Sequelize validation or manual checks
  // Example (using manual checks, replace with Sequelize validation):
  // if (!data.pickupNumber || !data.purpose || !data.company || !data.driversName || !data.truckNumber || !data.trailerNumber || !data.trailerType || !data.bolNumber || !data.sealNumber || !data.location || !data.destinationCity || !data.destinationState || !data.status) {
  //   return {
  //     errors: { /* Specify the errors appropriately */ },
  //     message: 'Please fill in all required fields.'
  //   };
  // }
    // Find the existing truck log record by ID
    const existingTruckLog = await TruckCheckIn.findByPk(id);

    if (!existingTruckLog) {
      throw new Error(`Truck log with ID ${id} not found.`);
    }

    data.exitPlantDateTime = new Date().toLocaleString();
    data.scheduledDate = new Date().toLocaleDateString();

    // Update the existing truck log record with the new data including the formatted date
    await existingTruckLog.update(data);

    // Perform revalidation logic here if needed
    // revalidatePath('/dashboard/trucklogs');

    // Perform redirection after successful update
    
  } catch (error) {
    console.error('Failed to update truck log:', error);
    throw new Error('Failed to update truck log.');
  }

  revalidatePath('/dashboard/trucklogs');
  redirect('/dashboard/trucklogs');
}



export async function deleteTruckLog(id: number) {
  throw new Error('Error deleting truck log');

  try {
    const deletedInvoice = await TruckCheckIn.destroy({
      where: {
        TruckCheckInId: id,
      },
    });

    if (deletedInvoice === 0) {
      // Handle the case where no invoice was deleted (not found)
      console.error('Invoice not found');
      return;
    }

    // Optionally, you can add revalidation logic here if needed
    // revalidatePath('/dashboard/invoices');
    revalidatePath('/dashboard/trucklogs')

    console.log('Invoice deleted successfully');
  } catch (error) {
    console.error('Failed to delete invoice:', error);
    throw new Error('Failed to delete invoice.');
  }
}

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', Object.fromEntries(formData));
//   } catch (error) {
//     if ((error as Error).message.includes('CredentialsSignin')) {
//       return 'CredentialsSignin';
//     }
//     throw error;
//   }
// }

// Function to create a truck log



export async function CreateTruckLog(formData: FormData) {
  
  try {
    // Parse form data into an object
    const data = Object.fromEntries(formData.entries());

    

    if (!data.exitPlantDateTime) {
      delete data.exitPlantDateTime;
    }

    if (!data.scheduledDate) {
      delete data.scheduledDate;
    }
    // Format the date fields
  //  const currentDate = format(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    // Update the date fields in the data
    data.inPlantDateTime = new Date().toLocaleString()
    // data.exitPlantDateTime = new Date().toLocaleString();
    

    // Create a new truck log in the database using Sequelize
    const createdTruckLog = await TruckCheckIn.create(data);

    // Optionally, you can add revalidation logic here if needed
    // revalidatePath('/dashboard/trucklogs');

    // Redirect to the truck logs dashboard


   
  } catch (error) {
    console.error('Failed to create truck log:', error);
    throw new Error('Failed to create truck log.');
  }

  redirect('/dashboard/trucklogs');
}

// function to create Load. 


export async function CreateLoad(formData: FormData) {
  try {
    // Parse form data into an object
    const data = Object.fromEntries(formData.entries());

    // Convert date fields to ISO format
    data.scheduledDate = new Date().toLocaleString()
    data.shipDate = new Date().toLocaleString()

    // Convert time fields to ISO format or modify them as needed
    // Assuming time fields are in the format 'HH:mm:ss'
    const timeFields = ['appointment', 'arrivalTime', 'timeRDDow'];
    timeFields.forEach((field) => {
      if (data[field]) {
        // Modify the format or convert to ISO as required
        // For example, you can convert time strings to ISO format
        // data[field] = new Date(`1970-01-01T${data[field]}.000Z`).toISOString();
        // Here, `data[field]` is assumed to be a time string in 'HH:mm:ss' format
      }
    });

    // Create a new entry in the database using Sequelize
    const createdLoad = await Load.create(data);

    // Return the created entry
    // return createdLoad;
  } catch (error) {
    console.error('Failed to create load:', error);
    throw new Error('Failed to create load.');
  }

  redirect('/dashboard/loads');
}


// Function to create a truck log



export async function fetchAllTruckCheckIns() {
  try {
    const truckCheckIns = await TruckCheckIn.findAll({
      order: [['inPlantDateTime', 'DESC']], // You can change the ordering as needed
    });

    return truckCheckIns;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch truck check-in data.');
  }
}

function formatDate(value: string | FormDataEntryValue): string {
  try {
    const date = parseISO(value.toString());
    if (isNaN(date.getTime())) {
      return ''; // Return an empty string for invalid dates
    }
    return format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  } catch (error) {
    console.error('Error formatting date:', error);
    return ''; // Return an empty string on error
  }
}


export async function updateLoadingLog(id: number, formData: FormData) {

  try {
    // Parse form data into an object
    const data = Object.fromEntries(formData.entries());

    // Validate required fields (you can add more validation as needed)
    if (!data.pickupNumber || !data.company || !data.location || !data.loadingStartTime || !data.loadingEndTime || !data.status) {
      return {
        errors: {
          // Specify which fields are missing
          // For example: pickupNumber: 'Pickup Number is required.'
          // Repeat for other required fields
        },
        message: 'Please fill in all required fields.',
      };
    }

    // // Format the date fields
    // data.loadingStartTime = formatDate(data.loadingStartTime);
    // data.loadingEndTime = formatDate(data.loadingEndTime);

     // Format the date fields
     const currentDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

     // Update the date fields in the data
     data.loadingStartTime = currentDate;
     data.loadingEndTime = currentDate;

    // Find the existing truck log record by ID
    const existingTruckLog = await TruckCheckIn.findByPk(id);

    if (!existingTruckLog) {
      throw new Error(`Truck log with ID ${id} not found.`);
    }

    // Update the existing truck log record with the new data
    await existingTruckLog.update(data);

    // Optionally, you can add revalidation logic here if needed
    // revalidatePath('/dashboard/trucklogs');

  } catch (error) {
    console.error('Failed to update truck log:', error);
    throw new Error('Failed to update truck log.');
  }

  revalidatePath('/dashboard/trucklogs'); // Revalidate or redirect as needed
  redirect('/dashboard/trucklogs'); // Revalidate or redirect as needed
}

export async function updateStrippingLog(id: number, formData: FormData) {

  try {
    // Parse form data into an object
    const data = Object.fromEntries(formData.entries());

    // Validate required fields (you can add more validation as needed)
    if (!data.pickupNumber || !data.company || !data.location || !data.strippingStartTime || !data.strippingEndTime || !data.status) {
      return {
        errors: {
          // Specify which fields are missing
          // For example: pickupNumber: 'Pickup Number is required.'
          // Repeat for other required fields
        },
        message: 'Please fill in all required fields.',
      };
    }

    // // Format the date fields
    // data.loadingStartTime = formatDate(data.loadingStartTime);
    // data.loadingEndTime = formatDate(data.loadingEndTime);

     // Format the date fields
     const currentDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

     // Update the date fields in the data
     data.strippingStartTime = currentDate;
     data.strippingEndTime = currentDate;

    // Find the existing truck log record by ID
    const existingTruckLog = await TruckCheckIn.findByPk(id);

    if (!existingTruckLog) {
      throw new Error(`Truck log with ID ${id} not found.`);
    }

    // Update the existing truck log record with the new data
    await existingTruckLog.update(data);

    // Optionally, you can add revalidation logic here if needed
    // revalidatePath('/dashboard/trucklogs');

  } catch (error) {
    console.error('Failed to update truck log:', error);
    throw new Error('Failed to update truck log.');
  }

  revalidatePath('/dashboard/trucklogs'); // Revalidate or redirect as needed
  redirect('/dashboard/trucklogs'); // Revalidate or redirect as needed
}



export async function loadGridData(data:any) {


 
  const recordsToCreate: LoadFields[] = data.map((item: LoadFields) => {
    return {
      loadSet: item['Load Set'],
      scheduledDate: ExcelDateToJSDate(item['Scheduled Date']),
        proNumber: item['Pro Number'],
      carrier: item['Carrier'],
      destination: item['Destination'],
      state: item['State']
      // Add other fields mapping as per your Sequelize model
    };
  });
  


  // Bulk create records using Sequelize's bulkCreate method

  Load.bulkCreate(recordsToCreate)
    .then((createdRecords: any) => {
      console.log('Records created:', createdRecords.length);
      // Handle success
    })
    .catch((error: any) => {
      console.error('Error creating records:', error);
      // Handle error
    });
  
  
  
}
