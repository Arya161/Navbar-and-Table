import React, { useMemo } from "react";
import MOCK_DATA from './MOCK_DATA.json';
import MUIDataTable from "mui-datatables";

import { TableContainer, 
         Table,
         TableHead,
         TableBody,
         TableRow,
         TableCell,
         Paper,
 } from '@mui/material';

export const Muitable = () => {

    const tableData = useMemo(() => MOCK_DATA, []);

  return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>IP</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row => (
                        <TableRow key = {row.id} 
                        sx = {{'&:last-child td, &:last-child th' : {border : 0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.gender}</TableCell>
                            <TableCell>{row.ip_address}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}
