
// "use client"

// import React from 'react';
// import { usehtmlForm, Controller, htmlForm } from 'react-hook-htmlForm';
// import {
//   TextField,
//   Button,
//   Container,
//   Stack,
//   Box,
//   htmlFormControl,
//   MenuItem,
//   Select,
//   InputLabel,
// } from '@mui/material';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { useTruckCheckIn } from '../../providers/truckcheckin/TruckCheckInContext';
// import { set } from 'zod';

// // Define a TypeScript interface htmlFor your htmlForm data
// interface htmlFormData {
//   pickupNumber: string;
//   purpose: string;
//   deliveryContents: string;
//   company: string;
//   driversName: string;
//   driversComments: string;
//   otherDriver: string;
//   truckNumber: string;
//   trailerNumber: string;
//   trailerType: string;
//   bolNumber: string;
//   sealNumber: string;
//   location: string;
//   destinationCity: string;
//   destinationState: string;
//   inPlantDateTime: Date | null;
//   exitPlantDateTime: Date | null;
//   remarks: string;
// }



// export default function Page() {
//   const { handleSubmit,control, reset, register, htmlFormState: {errors, isSubmitting}, setError } = usehtmlForm<htmlFormData>(); // Specify the htmlForm data type

//  const { setTruckCheckInId, setCompany, setDriversName, setPickupNumber, setLocation, setTrailerType, setDestination } = useTruckCheckIn();

//   const onSubmit = async (data: htmlFormData) => {
//    const response = await fetch("/api/truckcheckin", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//    const responseData = await response.json();
//    console.log(responseData);
//    if(!responseData.ok) {

//     console.log(responseData.errors);
//    }

//    // Assuming responseData contains the truckCheckInId
//    if (responseData.truckCheckInId) {
//     setTruckCheckInId(responseData.truckCheckInId); // Set the truckCheckInId in the context
//     setCompany(responseData.company);
//     setDriversName(responseData.driversName);
//     setPickupNumber(responseData.pickupNumber);
//     setLocation(responseData.location);
//     setTrailerType(responseData.trailerType);
//     setDestination(responseData.destinationState);
//   }

//    if(responseData.errors) {
//     const errors = responseData.errors;
//     if(errors.pickupNumber) {
//       setError("pickupNumber", {
//         type: "server",
//         message: errors.email,
//       });
//     } else if (errors.purpose) {
//       setError("purpose", {
//         type: "server",
//         message: errors.password
//       });
//     } else if (errors.deliveryContents) {
//       setError("deliveryContents", {
//         type: "server",
//         message: errors.password
//       });
//     } else if (errors.company) {
//       setError("company", {
//         type: "server",
//         message: errors.password
//       });
//     } else if (errors.driversName) {  
//       setError("driversName", {
//         type: "server",
//         message: errors.password
//       });
//     } else if (errors.driversComments) {
//       setError("driversComments", {
//         type: "server",
//         message: errors.password
//       });
//     } else if (errors.otherDriver) {  
//       setError("otherDriver", {
//         type: "server",
//         message: errors.password
//       });
//     } else if (errors.truckNumber) {
//       setError("truckNumber", {
//         type: "server",
//         message: errors.password
//       });
//     } else if (errors.trailerNumber) {
//       setError("trailerNumber", {
//         type: "server",
//         message: errors.password
//       });
//     } else if (errors.trailerType) {
//       setError("trailerType", {
//         type: "server",
//         message: errors.password
//       });
//     } else if (errors.bolNumber) {
//       setError("bolNumber", {
//         type: "server",
//         message: errors.password
//       });
//     }

    
//    }
//    // reset();
//   };

//   return (
//     <>
//       <Container fixed>
//         <htmlForm onSubmit={handleSubmit(onSubmit)}>
          
//           <Box sx={{ border: '1px solid lightgray', padding: '20px' }}>
//             <Stack spacing={3} direction="row" sx={{ marginBottom: 4 }}>
//               {/* Pickup Number/BOL Number/Container Number */}
//               <Controller
//                 name="pickupNumber"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="*Pickup Number/BOL Number/Container Number*"
//                     fullWidth
//                   />
//                 )}
//               />

//               {/* Purpose */}
//               <htmlFormControl variant="outlined" fullWidth>
//                 <InputLabel htmlhtmlFor="purpose">Purpose</InputLabel>
//                 <Controller
//                   name="purpose"
//                   control={control}
//                   defaultValue=""
//                   render={({ field }) => (
//                     <Select label="Purpose" id="purpose" {...field}>
//                       <MenuItem value="Delivery">Delivery</MenuItem>
//                       <MenuItem value="Drop">Drop</MenuItem>
//                       <MenuItem value="Pickup">Pickup</MenuItem>
//                       <MenuItem value="Service">Service</MenuItem>
//                     </Select>
//                   )}
//                 />
//               </htmlFormControl>

//               {/* Delivery Contents */}
//               <Controller
//                 name="deliveryContents"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="Delivery Contents"
//                     fullWidth
//                   />
//                 )}
//               />
//             </Stack>

//             {/* Second Stack */}
//             <Stack spacing={3} direction="row" sx={{ marginBottom: 4 }}>
//               {/* Company */}
//               <Controller
//                 name="company"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="Company"
//                     fullWidth
//                   />
//                 )}
//               />

//               {/* Drivers Name */}
//               <Controller
//                 name="driversName"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="Drivers Name"
//                     fullWidth
//                   />
//                 )}
//               />

//               {/* Drivers Comments */}
//               <Controller
//                 name="driversComments"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="Drivers Comments"
//                     fullWidth
//                   />
//                 )}
//               />
//             </Stack>

//             {/* Company Driver */}
//             <Stack spacing={1} direction="row" sx={{ marginBottom: 4 }}>
//               <Controller
//                 name="otherDriver"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="Co-Driver"
//                     fullWidth
//                   />
//                 )}
//               />
//             </Stack>

//             {/* Truck and Trailer InhtmlFormation */}
//             <Stack spacing={3} direction="row" sx={{ marginBottom: 4 }}>
//               {/* Truck Number */}
//               <Controller
//                 name="truckNumber"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="Truck Number"
//                     fullWidth
//                   />
//                 )}
//               />

//               {/* Trailer Number */}
//               <Controller
//                 name="trailerNumber"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="Trailer Number"
//                     fullWidth
//                   />
//                 )}
//               />

//               {/* Trailer Type */}
//               <htmlFormControl variant="outlined" fullWidth>
//                 <InputLabel htmlhtmlFor="trailerType">Trailer Type</InputLabel>
//                 <Controller
//                   name="trailerType"
//                   control={control}
//                   defaultValue=""
//                   render={({ field }) => (
//                     <Select label="Trailer Type" id="trailerType" {...field}>
//                       <MenuItem value="Conestega">Conestega</MenuItem>
//                       <MenuItem value="Container">Container</MenuItem>
//                       <MenuItem value="Drop Trailer">Drop Trailer</MenuItem>
//                       <MenuItem value="Flatbed">Flatbed</MenuItem>
//                       <MenuItem value="LTL">LTL</MenuItem>
//                       <MenuItem value="Roll Of Dumpster">Roll Of Dumpster</MenuItem>
//                     </Select>
//                   )}
//                 />
//               </htmlFormControl>
//             </Stack>

//             {/* BOL and SEAL Numbers */}
//             <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
//               {/* BOL Number */}
//               <Controller
//                 name="bolNumber"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="BOL Number"
//                     fullWidth
//                   />
//                 )}
//               />

//               {/* SEAL Number */}
//               <Controller
//                 name="sealNumber"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="SEAL Number"
//                     fullWidth
//                   />
//                 )}
//               />
//             </Stack>

//             {/* Location and Destination */}
//             <Stack spacing={3} direction="row" sx={{ marginBottom: 4 }}>
//               {/* Location */}
//               <Controller
//                 name="location"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="Location"
//                     fullWidth
//                   />
//                 )}
//               />

//               {/* Destination City */}
//               <Controller
//                 name="destinationCity"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="Destination City"
//                     fullWidth
//                   />
//                 )}
//               />

//               {/* Destination State */}
//               <Controller
//                 name="destinationState"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="Destination State"
//                     fullWidth
//                   />
//                 )}
//               />
//             </Stack>

//             {/* Date and Time Pickers */}
//             <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} justifyContent="space-between">
//               {/* In-Plant Date and Time */}
//               <Controller
//                 name="inPlantDateTime"
//                 control={control}
//                 defaultValue={null}
//                 render={({ field: {onChange, value} }) => (
//                   <DateTimePicker value={value} onChange={onChange}
//                    label="Exit Plant Date and Time"/>
//                 )}
//               />

//               {/* Exit Plant Date and Time */}
//               <Controller
//                 name="exitPlantDateTime"
//                 control={control}
//                 defaultValue={null}
//                 render={({ field: {onChange, value} }) => (
//                   <DateTimePicker value={value} onChange={onChange}
//                    label="Exit Plant Date and Time"/>
//                 )}
//               />
//             </Stack>
//             {/* Remarks */}
//             <Stack spacing={1} direction="row" sx={{ marginBottom: 4 }}>
//               <Controller
//                 name="remarks"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     type="text"
//                     variant="outlined"
//                     color="secondary"
//                     label="Remarks"
//                     fullWidth
//                   />
//                 )}
//               />
//             </Stack>

//             {/* Submit Button */}
            
//             <Button variant="outlined" size="large" type="submit">
//               Submit
//             </Button>
            
//           </Box>
//         </htmlForm>
//       </Container>
//     </>
//   );
// }

import React from 'react'

export default function Page() {
  return (
    <div>
    <div className="sm:hidden">
    <label htmlFor="tabs" className="sr-only">Select your country</label>
    <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>Profile</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
    </select>
</div>
<ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
    <li className="w-full">
        <a href="#" className="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Profile</a>
    </li>
    <li className="w-full">
        <a href="#" className="inline-block w-full p-4r bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Dashboard</a>
    </li>
    <li className="w-full">
        <a href="#" className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Settings</a>
    </li>
    <li className="w-full">
        <a href="#" className="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Invoice</a>
    </li>
</ul>
</div>
  )
}


