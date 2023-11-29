"use client"

import { DateTimePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import { Button, Container, Stack, Box } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useTruckCheckIn } from '@/app/providers/truckcheckin/TruckCheckInContext'; // Import the context
import TruckInfo from './TruckInfo';

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
    formState: { errors, },
    setError,
    reset
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
      console.log(responseData);
      console.log(responseData.error);
      return;
    }

    if(responseData.error) {
      setError('clockNumber', { message: responseData.error })
    } else if(responseData.success) {
      setError('clockNumber', { message: responseData.success })
    } else if(responseData.error) {
      setError('clockNumber', { message: 'Something went wrong' })
    } else if(responseData.success) {
      setError('clockNumber', { message: responseData.success })
    } else {
      setError('clockNumber', { message: 'Something went wrong' })
    }

    reset();
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
                render={({ field: {ref, ...field}, fieldState: {invalid, error} }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="*Enter Clock Number*"
                    fullWidth
                    inputRef={ref}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
              
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <Controller
                name="loadingstarttime"
                control={control}
                defaultValue={null}
                rules={{ required: 'This field is required' }}
                render={({ field: {ref, ...field}, fieldState: {}}) => (
                  <DateTimePicker
                    {...field}
                    inputRef={ref} 
                    label="Loading Start time"
                    onError={console.log}
                    slotProps={{ 
                    textField: {
                           helperText: errors.loadingstarttime && `${errors.loadingstarttime.message}`
                    },
                  }}
                  />
                )}
              />
              <Controller
                name="loadingstoptime"
                control={control}
                defaultValue={null}
                rules={{ required: 'This field is required' }}
                render={({ field: {ref, ...field}, fieldState: {invalid, error} }) => (
                  <DateTimePicker
                    {...field}
                    label="Loading Stop time"
                    inputRef={ref}
                    onError={console.log}
                    slotProps={{ 
                    textField: {
                           helperText: errors.loadingstoptime && `${errors.loadingstoptime.message}`
                    },
                  }}
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
