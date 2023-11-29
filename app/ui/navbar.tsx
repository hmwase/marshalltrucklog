import React from 'react';
import TruckLog from '@/app/ui/truck-log';
import DashboardLogo from './dashboard/dashboard';

export default function NavBar() {
  return (
    <div className="flex flex-row h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-47 justify-between">
      <div>
      <TruckLog />
      </div>
      <div>
      <DashboardLogo />
      </div>
      
         
      </div>
  )
}
