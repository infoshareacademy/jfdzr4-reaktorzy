import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';


function createData(date, segregation, bags, clothes, transport, action, dishes, home, plants, food) {
  return { date, segregation, bags, clothes, transport, action, dishes, home, plants, food};
}

const allRows = [
  createData('07-10-2021', false, true , true, false, false, false, false, false, false),
  createData('08-10-2021', false, true , true, false, true, false, false, true, false),
  createData('09-10-2021', false, true , true, false, false, true, false, false, false),
  createData('10-10-2021', false, true , true, false, false, false, false, false, false),
  createData('11-10-2021', false, true , true, false, false, false, false, false, false),
  createData('12-10-2021', false, true , true, false, true, false, false, false, false),
  createData('13-10-2021', false, true , true, false, false, false, false, true, false),
];



// const CheckboxTable = () => {
//     return (
//         <Checkbox checked={} color="success" />
//     )
  
// }

export const History = () => {
    const [rows, setRows] = useState(allRows)

    useEffect(()=> {
        setRows(allRows)
    },[])

    const handleClick = (event,index, name) => {
        
        // const modifiedRow = rows[index] = {
        //     ...rows[index],
        //     name: event.target.checked
        // }

    }

    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Garbage segregation</TableCell>
              <TableCell>No plastic bags</TableCell>
              <TableCell>Eco clothes</TableCell>
              <TableCell>Public transport</TableCell>
              <TableCell>Eco action</TableCell>
              <TableCell>Reausable dishes</TableCell>
              <TableCell>Eco home</TableCell>
              <TableCell>Plant plants</TableCell>
              <TableCell>Eco food</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.date}</TableCell>
                <TableCell align="center">{ <Checkbox checked={row.segregation} onClick={(e)=> {handleClick(e, index, 'segregation')}}color="success" />}</TableCell>
                <TableCell align="center">{ <Checkbox checked={row.bags} color="success" />}</TableCell>
                <TableCell align="center">{ <Checkbox checked={row.clothes} color="success" />}</TableCell>
                <TableCell align="center">{ <Checkbox checked={row.transport} color="success" />}</TableCell>
                <TableCell align="center">{ <Checkbox checked={row.action} color="success" />}</TableCell>
                <TableCell align="center">{ <Checkbox checked={row.dishes} color="success" />}</TableCell>
                <TableCell align="center">{ <Checkbox checked={row.home} color="success" />}</TableCell>
                <TableCell align="center">{ <Checkbox checked={row.plants} color="success" />}</TableCell>
                <TableCell align="center">{ <Checkbox checked={row.food} color="success" />}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
} 