"use client"

import { set } from "date-fns";
import { Fragment, useState, useRef } from "react";
import {utils, read} from "xlsx";
import Loads from '@/app/ui/loads/loads';
import Table from '@/app/ui/loads/table';
import {ExcelDateToJSDate} from '@/app/lib/utils'
import { SubmitLoads } from '@/app/ui/loads/buttons';
import { BhuTuka_Expanded_One } from "next/font/google";
import { loadGridData } from "@/app/lib/action";
import { TruckCheckInFields, LoadFields } from '@/app/lib/definition';

export default function ImportExcel() {
    const [excelData, setExcelData] = useState<any[]>([])
    const [file, setFile] = useState<File | null>(null);
    const file_types = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel.sheet.macroEnabled.12'];
    const fileRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected_file = e.target.files && e.target.files[0];
        if(selected_file) {
            if(selected_file && file_types.includes(selected_file.type)) {
            let reader = new FileReader();
            reader.onload = (e) => {
                const workbook=read(e.target?.result);
                const sheet = workbook.SheetNames;
                if(sheet.length) {
                    const data: LoadFields[]  = utils.sheet_to_json(workbook.Sheets[sheet[0]]);
                    setExcelData(data);
                }
            }
            reader.readAsArrayBuffer(selected_file);
        } else {
            console.log('Please select an excel file');
        }
    }
}

const clearFile = () => {
  setExcelData([]);
  setFile(null);
  if(fileRef.current) {
    fileRef.current.value = '';
  }
};

    return (
        <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className=" rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" >
                        <input type="file"  
                         onChange={handleChange}
                         ref={fileRef} />
                         <button onClick={clearFile} className="mr-2">
                    Clear File
                </button>
                    </div>
                    
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-3 py-5 font-bold">
                   Load Set
                  </th>
                  <th scope="col" className="px-3 py-5 font-bold">
                    Scheduled Date
                  </th>
                  <th scope="col" className="px-3 py-5 font-bold">
                    Pro Number
                  </th>
                  
                  <th scope="col" className="px-3 py-5 font-bold">
                    Carrier
                  </th>
                  <th scope="col" className="px-3 py-5 font-bold">
                    Destination
                  </th>
                  <th scope="col" className="px-3 py-5 font-bold">
                    State
                  </th>
                  
                </tr>
              </thead>
              <tbody className="bg-white">
                { excelData.length?
                  excelData?.map((load, index) => (
                  <tr
                    key={index}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-3 py-3">
                      
                        {load['Load Set']}
                      
                    </td>
                     <td className="whitespace-nowrap px-3 py-3">
                     {ExcelDateToJSDate(load['Scheduled Date']).toLocaleDateString()}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {load['Pro Number']}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {load['Carrier']}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {load['Destination']}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {load['State']}
                    </td>
                    
                  </tr>
                ))
                :
                (
                    <span>No Data</span>
                )
                }
              </tbody>
            </table>
            <div className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
           
            <button
                onClick={async ()=>{
                     await loadGridData(excelData)
                
                }}
                >
                    Submit Data
                    </button>
            </div>
          </div>
        </div>
        
        </div>
    )
}