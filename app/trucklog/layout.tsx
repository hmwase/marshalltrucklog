"use client";
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Link from 'next/link';
import { inter} from '@/app/ui/fonts';

import { Provider } from '../components/Provider';



export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     
        <div>
          <Provider>
       
             {children}
            </Provider>
            </div>

    </LocalizationProvider>

  );
}
