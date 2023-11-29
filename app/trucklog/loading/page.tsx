"use client"

import { DateTimePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import { Button, Container, Stack, Box } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useTruckCheckIn } from '@/app/providers/truckcheckin/TruckCheckInContext'; // Import the context
import TruckInfo from '../../components/TruckInfo';

interface FormData {
  clockNumber: string;
  loadingstarttime: Date | null;
  loadingstoptime: Date | null;
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

    const response = await fetch("/api/loading", {
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
      <Container fixed>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ border: '1px solid lightgray', padding: '20px' }}>
            <Stack spacing={1} direction="row" sx={{ marginBottom: 4 }}>
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
              
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <Controller
                name="loadingstarttime"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <DateTimePicker
                    {...field}
                        
                    label="Loading Start time"
                    
                  />
                )}
              />
              <Controller
                name="loadingstoptime"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <DateTimePicker
                    {...field}
               

                    label="Loading Stop time"
             
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
            </Stack>
            <Button variant="outlined" size='large' type="submit">
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
