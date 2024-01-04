
// import { set } from "date-fns";
// import { createContext, Dispatch, SetStateAction } from "react";

// export type LoadsType = {
//     LoadId: number,
//     loadSet: string,
//     scheduledDate: Date,
//     proNumber: string,
//     carrier: string,
//     destination: string,
//     state: string
// };

// export type LoadsContextType = {
//     loads: LoadsType[];
//     setLoads: Dispatch<SetStateAction<LoadsType[]>>;
//     deleteLoad: (LoadId: number) => void;
// };

// const initialContext: LoadsContextType = {
//     loads:[],
//     setLoads: () => {},
//     deleteLoad: (LoadId:number) => void
//   }

// const LoadsContext = createContext(initialContext)
  


// export default LoadsContext;

import React, { createContext, Dispatch, SetStateAction, useState, useContext, useEffect } from "react";

export type LoadsType = {
  
  LoadId: number;
  loadSet: string;
  scheduledDate: Date;
  proNumber: string;
  carrier: string;
  destination: string;
  state: string;
};

export type LoadsContextType = {
  loads: LoadsType[];
  setLoads: Dispatch<SetStateAction<LoadsType[]>>;
  deleteLoad: (LoadId: number) => void;
};

const initialLoads: LoadsType[] = [];

export const LoadsContext = createContext<LoadsContextType>({

  loads: initialLoads,
  setLoads: () => null,
  deleteLoad: () => {}
});

interface LoadsProviderProps {
  children: React.ReactNode;
}

// export const LoadsProvider: React.FC<LoadsProviderProps> = ({ children }) => {
//   const [loads, setLoads] = useState<LoadsType[]>(initialLoads);

//   const deleteLoad = (LoadId: number) => {
//     console.log("Deleting load with ID:", LoadId); // Debugging: Log LoadId
//     setLoads((prevLoads) =>
//       prevLoads.filter((load) => load.LoadId !== LoadId)
//     );
//   };

//   console.log("Current loads:", loads); // Debugging: Log current loads

//   return (
//     <LoadsContext.Provider value={{ loads, setLoads, deleteLoad }}>
//       {children}
//     </LoadsContext.Provider>
//   );
// };


export const LoadsProvider: React.FC<LoadsProviderProps> = ({ children }) => {
  const [loads, setLoads] = useState<LoadsType[]>(initialLoads);

  const deleteLoad = (LoadId: number) => {
    console.log("Deleting load with ID:", LoadId);
    setLoads((prevLoads) =>
      prevLoads.filter((load) => load.LoadId !== LoadId)
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/loads");
        const data = await response.json();
        setLoads(data);
      } catch (error) {
        console.error('Error fetching loads:', error);
      }
    };

    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array means it fetches data only once when the component mounts

  return (
    <LoadsContext.Provider value={{ loads, setLoads, deleteLoad }}>
      {children}
    </LoadsContext.Provider>
  );
};


export const useLoadsContext = () => useContext(LoadsContext);

export default LoadsProvider;


