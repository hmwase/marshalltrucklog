"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridRowsProp } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'loadId', headerName: 'ID', width: 90 },
  {
    field: 'LoadSet',
    headerName: 'Load Set',
    width: 150,
    editable: true,
  },
  {
    field: 'ScheduledDate',
    headerName: 'Scheduled Date',
    type: 'date',
    width: 150,
    editable: true,
  },
  {
    field: 'ShippedDate',
    headerName: 'Shipped Date',
    type: 'date',
    width: 110,
    editable: true,
  },
  {
    field: 'carrier',
    headerName: 'Carrier',
    width: 160,
    editable: true,
  },
];

type  DataGridProps = {
    loadId: number,
    loadSet : string,
    scheduledDate: Date,
    shippedDate : Date,
    carrier : string
    
}



export default function DataGridDemo({data} : {data :GridRowsProp<DataGridProps>}) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
    }
