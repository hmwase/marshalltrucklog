"use client";

import { TruckCheckInProvider } from "../providers/truckcheckin/TruckCheckInContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";



export function Provider({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
    <TruckCheckInProvider>
      {children}
    </TruckCheckInProvider>
    </QueryClientProvider>
  );    

}




