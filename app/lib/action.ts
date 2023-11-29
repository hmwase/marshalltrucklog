"use server"


 import { revalidatePath } from "next/cache";
  import { redirect } from "next/navigation";
  import TruckCheckIn from "./models/TruckCheckIn";
  import {z} from "zod";
import { NextResponse } from "next/server";



const FormSchema = z.object({
    pickupNumber: z.string(),
    purpose: z.string(),
    deliveryContents: z.string(),
    company: z.string(),
    driversName: z.string(),
    driversComments: z.string(),
    truckNumber: z.string(),
    trailerNumber: z.string(),
    trailerType: z.string(),
    bolNumber: z.string(),
    sealNumber: z.string(),
    location: z.string(),
    destinationCity: z.string(),
    destinationState: z.string(),
    inPlantDateTime: z.string(),
    exitPlantDateTime: z.string(),
    truckCheckInId: z.number(),
});

export async function POST(request: Request) {

  const body = await request.json();
    
  return NextResponse.json({});
}

const UpdateTruckLog = FormSchema.omit({truckCheckInId: true, inPlantDateTime: true, exitPlantDateTime: true})



export async function updateTruckLog(id: number, formData: FormData) {
  const validateFields = UpdateTruckLog.safeParse(Object.fromEntries(formData.entries()));
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Please fix the errors below.'
    }

  }

  const {pickupNumber, purpose, deliveryContents, company, driversName, driversComments,truckNumber, trailerNumber, trailerType, bolNumber, sealNumber, location, destinationCity, destinationState} = validateFields.data;
   try {
    

  const createdTruckLog = await TruckCheckIn.create({
 
    pickupNumber,
    purpose,
    deliveryContents,
    company,
    driversName,
    driversComments,
    truckNumber,
    trailerNumber,
    trailerType,
    bolNumber,
    sealNumber,
    location,
    destinationCity,
    destinationState,
  });

 
 


 
} catch (error) {
  console.error('Failed to update truck log:', error);
  throw new Error('Failed to update truck log.');
}

revalidatePath('/dashboard/trucklogs')
redirect('/dashboard/trucklogs')

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

