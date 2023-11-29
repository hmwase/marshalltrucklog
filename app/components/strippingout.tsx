"use client"
import { DateTimePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import { Button, Container, Stack, Box, MenuItem, Select, FormControl, InputLabel} from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useTruckCheckIn } from '@/app/providers/truckcheckin/TruckCheckInContext'; // Import the context
import TruckInfo from './TruckInfo';
import { useRouter } from 'next/navigation';

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
    setError,
    reset
  } = useForm<FormData>();
  const router = useRouter(); // Add this line

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
      console.log(responseData);
      console.log(responseData.error);
      
    }
    if(responseData.error) {
      setError('clockNumber', { message: responseData.error })
    } else if (responseData.success) {
      setError('clockNumber', { message: responseData.success })
    } else if (responseData.error) {
      setError('clockNumber', { message: 'Something went wrong' })
    } else if (responseData.success) {
      setError('clockNumber', { message: responseData.success })
    } else {
      setError('clockNumber', { message: 'Something went wrong' })
    }

    reset();
    router.push('/');
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
                render={({ field: {ref, ...field}, fieldState: {invalid, error} }) => (
                  <TextField
                    {...field}
                    type="text"
                    inputRef={ref}
                    variant="outlined"
                    color="secondary"
                    label="*Enter Clock Number*"
                    fullWidth
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="purpose">New Location</InputLabel>
              <Controller
      name="newLocation"
      control={control}
      defaultValue=""
      rules={{ required: 'This field is required' }}
      render={({ field }) => (
        <Select label="Location" id="location" {...field}>
          <MenuItem value="A-Wall">A-Wall</MenuItem>
          <MenuItem value="B-Wall">B-Wall</MenuItem>
          <MenuItem value="C-Wall">C-Wall</MenuItem>
          <MenuItem value="D-Wall">D-Wall</MenuItem>
          <MenuItem value="Dock 1">Dock 1</MenuItem>
          <MenuItem value="Dock 2">Dock 2</MenuItem>
          <MenuItem value="Dock 3">Dock 3</MenuItem>
          <MenuItem value="Dock 4">Dock 4</MenuItem>
          <MenuItem value="Dock 5">Dock 5</MenuItem>
          <MenuItem value="Dock 6">Dock 6</MenuItem>
          <MenuItem value="Dock 7">Dock 7</MenuItem>
          <MenuItem value="Dock 8">Dock 8</MenuItem>
          <MenuItem value="Lower-Pad D">Lower-Pad D</MenuItem>
          <MenuItem value="Lower-Pad E">Lower-Pad E</MenuItem>
          <MenuItem value="Lower-Pad F">Lower-Pad F</MenuItem>
          <MenuItem value="Lower-Pad G">Lower-Pad G</MenuItem>
          <MenuItem value="Red Line">Red Line</MenuItem>
          <MenuItem value="Scrap Area">Scrap Area</MenuItem>
          <MenuItem value="Silo">Silo</MenuItem>
          <MenuItem value="Sleep line">Sleep line</MenuItem>
          <MenuItem value="Stripping Out">Stripping Out</MenuItem>
          <MenuItem value="Tie Down">Tie Down</MenuItem>
          <MenuItem value="West Pad">West Pad</MenuItem>
        </Select>
      )}
    />
    </FormControl>
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <Controller
                name="strippingOutStartTime"
                control={control}
                defaultValue={null}
                rules={{ required: 'This field is required' }}
                render={({ field: {onChange, value}}) => (
                  <DateTimePicker
                     value={value} onChange={onChange}
                     inputRef={null}   
                    label="Stripping Out Start Time"
                    onError={console.log}
                    slotProps={
                      { 
                        textField: {
                          helperText: errors.strippingOutStartTime && `${errors.strippingOutStartTime.message}`
                        },
                      }
                    }
                  />
                )}
              />
              <Controller
                name="strippingOutEndTime"
                control={control}
                defaultValue={null}
                rules={{ required: 'This field is required' }}
                render={({ field: {ref, ...field}, fieldState: {invalid, error} }) => (
                  <DateTimePicker
                    {...field}
                    inputRef={ref}
                    label="Stripping Out End Time"
                    onError={console.log}
                    slotProps={{ 
                      textField: {
                        helperText: errors.strippingOutEndTime && `${errors.strippingOutEndTime.message}`
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
