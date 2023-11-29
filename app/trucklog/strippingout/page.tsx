"use client"
import { DateTimePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import { Button, Container, Stack, Box, Paper } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useTruckCheckIn } from '@/app/providers/truckcheckin/TruckCheckInContext'; // Import the context
import TruckInfo from '../../components/TruckInfo';


interface FormData {
  clockNumber: string;
  newLocation: string;
  strippingOutStartTime: Date | null;
  strippingOutEndTime: Date | null;
  comments: string;
  truckCheckInId: number | null;
}

export default function Page() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const { truckCheckInId } = useTruckCheckIn(); // Access the truckCheckInId from the context
  console.log(truckCheckInId);
  const onSubmit = async (data: FormData) => {
    // Include the truckCheckInId in your form data
    const formDataWithTruckCheckInId = { ...data, truckCheckInId };

    const response = await fetch("/api/stripping", {
      method: "POST",
      body: JSON.stringify(formDataWithTruckCheckInId),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (!responseData.ok) {
      alert("Submitting form failed");
      return;
    }
  };


  return (
    <>
      <Container>
      
        <form onSubmit={handleSubmit(onSubmit)}> 
          <Box sx={{ border: '1px solid lightgray', padding: '20px' }}>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <Controller
                name="clockNumber"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="*Enter Clock Number*"
                    fullWidth
                  />
                )}
              />
              <Controller
                name="newLocation"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="*New Location*"
                    fullWidth
                  />
                )}
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <Controller
                name="strippingOutStartTime"
                control={control}
                defaultValue={null}
                render={({ field: {onChange, value}}) => (
                  <DateTimePicker
                     value={value} onChange={onChange}
                        
                    label="Stripping Out Start Time"
                    
                  />
                )}
              />
              <Controller
                name="strippingOutEndTime"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <DateTimePicker
                    {...field}
               

                    label="Stripping Out End Time"
             
                  />
                )}
              />
            </Stack>
            <Stack spacing={1} direction="row" sx={{ marginBottom: 4 }}>
            <Controller
              name="comments"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Comments"
                  fullWidth
                />
              )}
            />
            {errors.clockNumber && (
              <span style={{ color: 'red' }}>{errors.clockNumber.message}</span>
            )}
            {errors.newLocation && (
              <span style={{ color: 'red' }}>{errors.newLocation.message}</span>
            )}
            </Stack>
            <Button variant="outlined" size="large" type="submit">
              Submit
            </Button>
          </Box>
        </form>
        <Box
            sx={{
            padding: '20px',
            marginTop: '20px', // Add margin to separate the Paper from the form
            border: '1px solid lightgray',
            
          }}>
      
         <TruckInfo /></Box>
       
      </Container>
    </>
  );
}
