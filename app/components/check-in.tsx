
"use client"

import React from 'react';
import { useForm, Controller, Form } from 'react-hook-form';
import {
  TextField,
  Button,
  Container,
  Stack,
  Box,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useTruckCheckIn } from '../providers/truckcheckin/TruckCheckInContext';
import dayjs, { Dayjs } from 'dayjs';
import { set } from 'zod';
import { z } from 'zod';

// Define a Zod schema for your form data


// Define a TypeScript interface for your form data
interface FormData {
  pickupNumber: string;
  purpose: string;
  deliveryContents: string;
  company: string;
  driversName: string;
  driversComments: string;
  otherDriver: string;
  truckNumber: string;
  trailerNumber: string;
  trailerType: string;
  bolNumber: string;
  sealNumber: string;
  location: string;
  destinationCity: string;
  destinationState: string;
  inPlantDateTime: Date | null;
  exitPlantDateTime: Date | null;
  remarks: string;
}



export default function CheckIn() {
  const { handleSubmit,control, reset, register, formState: {errors, isSubmitting}, setError } = useForm<FormData>(); // Specify the form data type

 const { setTruckCheckInId, setCompany, setDriversName, setPickupNumber, setLocation, setTrailerType, setDestination } = useTruckCheckIn();



  const onSubmit = async (data: FormData) => {
   const response = await fetch("/api/truckcheckin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
   const responseData = await response.json();
   console.log(responseData);
   if(!responseData.ok) {

    console.log(responseData.errors);
   }

   // Assuming responseData contains the truckCheckInId
   if (responseData.truckCheckInId) {
    setTruckCheckInId(responseData.truckCheckInId); // Set the truckCheckInId in the context
    setCompany(responseData.company);
    setDriversName(responseData.driversName);
    setPickupNumber(responseData.pickupNumber);
    setLocation(responseData.location);
    setTrailerType(responseData.trailerType);
    setDestination(responseData.destinationState);
  }

   if(responseData.errors) {
    const errors = responseData.errors;
    if(errors.pickupNumber) {
      setError("pickupNumber", {
        type: "server",
        message: errors.email,
      });
    } else if (errors.purpose) {
      setError("purpose", {
        type: "server",
        message: errors.password
      });
    } else if (errors.deliveryContents) {
      setError("deliveryContents", {
        type: "server",
        message: errors.password
      });
    } else if (errors.company) {
      setError("company", {
        type: "server",
        message: errors.password
      });
    } else if (errors.driversName) {  
      setError("driversName", {
        type: "server",
        message: errors.password
      });
    } else if (errors.driversComments) {
      setError("driversComments", {
        type: "server",
        message: errors.password
      });
    } else if (errors.otherDriver) {  
      setError("otherDriver", {
        type: "server",
        message: errors.password
      });
    } else if (errors.truckNumber) {
      setError("truckNumber", {
        type: "server",
        message: errors.password
      });
    } else if (errors.trailerNumber) {
      setError("trailerNumber", {
        type: "server",
        message: errors.password
      });
    } else if (errors.trailerType) {
      setError("trailerType", {
        type: "server",
        message: errors.password
      });
    } else if (errors.bolNumber) {
      setError("bolNumber", {
        type: "server",
        message: errors.password
      });
    }

    
   }
   
   reset();
  };

  return (
    <>
      <Container fixed>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <Box sx={{ border: '1px solid lightgray', padding: '20px', marginBottom: '30px' }}>
            <Stack spacing={3} direction="row" sx={{ marginBottom: 4 }}>
              {/* Pickup Number/BOL Number/Container Number */}
              <Controller
                name="pickupNumber"
                control={control}
                defaultValue=""
                rules={{ required: 'Pickup Number is required' }}
                render={({ field: {ref, ...field}, fieldState: {invalid, error} }) => (
                  <TextField
                    {...field}
                    inputRef={ref}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="*Pickup Number/BOL Number/Container Number*"
                    error={invalid}
                    fullWidth
                    helperText={errors.pickupNumber && `${errors.pickupNumber.message}`}
                  />
                )}
                
              />
             
               
              {/* Purpose */}
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="purpose">Purpose</InputLabel>
                <Controller
                  name="purpose"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'This field is required' }}
                  render={({ field }) => (
                    <Select label="Purpose" id="purpose" {...field}>
                      <MenuItem value="Delivery">Delivery</MenuItem>
                      <MenuItem value="Drop">Drop</MenuItem>
                      <MenuItem value="Pickup">Pickup</MenuItem>
                      <MenuItem value="Service">Service</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
             
              {/* Delivery Contents */}
              <Controller
                name="deliveryContents"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field: {ref, ...field}, fieldState: {invalid, error} }) => (
                  <TextField
                    {...field}
                    inputRef={ref}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Delivery Contents"
                    error={invalid}
                    helperText={errors.deliveryContents && `${errors.deliveryContents.message}`}
                    fullWidth
                  />
                )}
              />
            </Stack>
             
            {/* Second Stack */}
            <Stack spacing={3} direction="row" sx={{ marginBottom: 4 }}>
              {/* Company */}
              <Controller
                name="company"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field: {ref, ...field}, fieldState: {invalid, error} }) => (
                  <TextField
                    {...field}
                    inputRef={ref}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Company"
                    fullWidth
                    error={invalid}
                    helperText={errors.company && `${errors.company.message}`}
                  />
                )}
              />
            
              {/* Drivers Name */}
              <Controller
                name="driversName"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field: {ref, ...field}, fieldState: {invalid, error} }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Drivers Name"
                    fullWidth
                    error={invalid}
                    helperText={errors.driversName && `${errors.driversName.message}`}
                  />
                )}
              />
           
              {/* Drivers Comments */}
              <Controller
                name="driversComments"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Drivers Comments"
                    fullWidth
                  />
                )}
              />
                  
            </Stack>
            
            {/* Company Driver */}
            <Stack spacing={1} direction="row" sx={{ marginBottom: 4 }}>
              <Controller
                name="otherDriver"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Co-Driver"
                    fullWidth
                  />
                )}
              />
            </Stack>
          
            {/* Truck and Trailer Information */}
            <Stack spacing={3} direction="row" sx={{ marginBottom: 4 }}>
              {/* Truck Number */}
              <Controller
                name="truckNumber"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Truck Number"
                    fullWidth
                  />
                )}
              />
           
              {/* Trailer Number */}
              <Controller
                name="trailerNumber"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field: {ref, ...field}, fieldState: {invalid, error} }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Trailer Number"
                    fullWidth
                    error={invalid}
                    helperText={errors.trailerNumber && `${errors.trailerNumber.message}`}  
                  />
                )}
              />
           
              {/* Trailer Type */}
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="trailerType">Trailer Type</InputLabel>
                <Controller
                  name="trailerType"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'This field is required' }}
                  render={({ field }) => (
                    <Select label="Trailer Type" id="trailerType" {...field}>
                      <MenuItem value="Conestega">Conestega</MenuItem>
                      <MenuItem value="Container">Container</MenuItem>
                      <MenuItem value="Drop Trailer">Drop Trailer</MenuItem>
                      <MenuItem value="Flatbed">Flatbed</MenuItem>
                      <MenuItem value="LTL">LTL</MenuItem>
                      <MenuItem value="Roll Of Dumpster">Roll Of Dumpster</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
               
            </Stack>
           
            {/* BOL and SEAL Numbers */}
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              {/* BOL Number */}
              <Controller
                name="bolNumber"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field: {ref, ...field}, fieldState: {invalid, error}  }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="BOL Number"
                    fullWidth
                    error={invalid}
                    helperText={errors.bolNumber && `${errors.bolNumber.message}`}
                  />
                )}
              />
               
              {/* SEAL Number */}
              <Controller
                name="sealNumber"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field: {ref, ...field}, fieldState: {invalid, error} }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="SEAL Number"
                    fullWidth
                    error={invalid}
                    helperText={errors.sealNumber && `${errors.sealNumber.message}`}
                  />
                )}
              />
            </Stack>
           
            {/* Location and Destination */}
            <Stack spacing={3} direction="row" sx={{ marginBottom: 4 }}>
              {/* Location */}
              <FormControl variant="outlined" fullWidth>
    <InputLabel htmlFor="location">Location</InputLabel>
    <Controller
      name="location"
      control={control}
      defaultValue=""
      rules={{ required: 'This field is required' }}
      render={({ field }) => (
        <Select label="Location" id="location" {...field}>
          <MenuItem value="A-Wall">A-Wall</MenuItem>
          <MenuItem value="B-Wall">B-Wall</MenuItem>
          <MenuItem value="BareMill Dock">BareMill Dock</MenuItem>
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
          <MenuItem value="Drop Trailer 1">Drop Trailer 1</MenuItem>
          <MenuItem value="Drop Trailer 2">Drop Trailer 2</MenuItem>
          <MenuItem value="Drop Trailer 3">Drop Trailer 3</MenuItem>
          <MenuItem value="Drop Trailer 4">Drop Trailer 4</MenuItem>
          <MenuItem value="Drop Trailer 5">Drop Trailer 5</MenuItem>
          <MenuItem value="Drop Trailer 6">Drop Trailer 6</MenuItem>
          <MenuItem value="Drop Trailer 7">Drop Trailer 7</MenuItem>
          <MenuItem value="Drop Trailer 8">Drop Trailer 8</MenuItem>
          <MenuItem value="Drop Trailer 9">Drop Trailer 9</MenuItem>
          <MenuItem value="Drop Trailer 10">Drop Trailer 10</MenuItem>
          <MenuItem value="Drop Trailer 11">Drop Trailer 11</MenuItem>
          <MenuItem value="Drop Trailer 12">Drop Trailer 12</MenuItem>
          <MenuItem value="Drop Yard">Drop Yard</MenuItem>
          <MenuItem value="Empty Reels">Empty Reels</MenuItem>
          <MenuItem value="Lower-Pad D">Lower-Pad D</MenuItem>
          <MenuItem value="Lower-Pad E">Lower-Pad E</MenuItem>
          <MenuItem value="Lower-Pad F">Lower-Pad F</MenuItem>
          <MenuItem value="Lower-Pad G">Lower-Pad G</MenuItem>
          <MenuItem value="Receiving 1">Receiving 1</MenuItem>
          <MenuItem value="Receiving 2">Receiving 2</MenuItem>
          <MenuItem value="Receiving 3">Receiving 3</MenuItem>
          <MenuItem value="Receiving 4">Receiving 4</MenuItem>
          <MenuItem value="Receiving Baremill">Receiving Baremill</MenuItem>
          <MenuItem value="Receiving Material">Receiving Material</MenuItem>
          <MenuItem value="Receiving Reel">Receiving Reel</MenuItem>
          <MenuItem value="Receiving Rod">Receiving Rod</MenuItem>
          <MenuItem value="Receiving Store">Receiving Store</MenuItem>
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
             
               

              {/* Destination City */}
              <Controller
                name="destinationCity"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field: {ref, ...field}, fieldState: {invalid, error} }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Destination City"
                    fullWidth
                    error={invalid}
                    helperText={errors.destinationCity && `${errors.destinationCity.message}`}
                  />
                )}
              />
                   

              {/* Destination State */}
              <Controller
                name="destinationState"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field: {ref, ...field}, fieldState:{invalid, error} }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Destination State"
                    fullWidth
                    error={invalid}
                    helperText={errors.destinationState && `${errors.destinationState.message}`}
                  />
                )}
              />
            </Stack>
            
            {/* Date and Time Pickers */}
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} justifyContent="space-between">
              {/* In-Plant Date and Time */}
              <Controller
                name="inPlantDateTime"
                control={control}
                defaultValue= {null}
                rules={{ required: 'This field is required' }}
                render={({ field: {onChange, value, ref, ...field}, fieldState: {invalid, error} }) => (
                  <DateTimePicker onChange={onChange} value={value}
                   label="Exit Plant Date and Time"
                   inputRef={ref}
                   onError={console.log}
                  
                   slotProps={{ 
                    textField: {
                           helperText: errors.inPlantDateTime && `${errors.inPlantDateTime.message}`
                    },
                  }}
                   
                   />
                )}
              />
               

              {/* Exit Plant Date and Time */}
              <Controller
                name="exitPlantDateTime"
                control={control}
                defaultValue={null}
                rules={{ required: 'This field is required' }}  
                render={({ field: {onChange, value, ref, ...field} }) => (
                  <DateTimePicker onChange={onChange} value={value}
                   label="Exit Plant Date and Time" 
                   inputRef={ref}
                   onError={console.log}
            
                   slotProps={{ 
                    textField: {
                           helperText: errors.inPlantDateTime && `${errors.inPlantDateTime.message}`
                    },
                  }}
                   />
                   
                )}
              />

            </Stack>
          

            {/* Remarks */}
            <Stack spacing={1} direction="row" sx={{ marginBottom: 4 }}>
              <Controller
                name="remarks"
                control={control}
                defaultValue=""
                rules={{ required: 'This field is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Remarks"
                    fullWidth
                  />
                )}
              />
            </Stack>
                 
            {/* Submit Button */}
            
            <Button variant="outlined" size="large" type="submit">
              Submit
            </Button>
            
          </Box>
        </form>
      </Container>
    </>
  );
}

