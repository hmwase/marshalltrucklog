//  import { useState, ReactNode } from 'react';
// // import LoadsContext, {LoadsType, LoadsContextType} from './LoadsContext';

// interface LoadsProviderProps {
//     children: ReactNode;
// }

// // // function LoadsProvider({ children }: LoadsProviderProps) {
// // //     const [loads, setLoads] = useState<LoadsType[]>([]);

// // //     return (
// // //         <LoadsContext.Provider value={{ loads, setLoads }}>
// // //             {children}
// // //         </LoadsContext.Provider>
// // //     );
// // // }

// // export default LoadsProvider;

// function LoadsProvider({ children }: LoadsProviderProps) {
//     const [loads, setLoads] = useState<LoadsType[]>([]);

//     const deleteLoad = (LoadId: number) => {
//         setLoads((prevLoads) => prevLoads.filter(load => load.LoadId !== LoadId));
//     };

//     const contextValue: LoadsContextType = {
//         loads,
//         setLoads,
//         deleteLoad,
//     };

//     return (
//         <LoadsContext.Provider value={contextValue}>
//             {children}
//         </LoadsContext.Provider>
//     );
// }

// export default LoadsProvider;