import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import { Car } from '../interfaces/Car';

interface CustomTableProps {
  data: Car[];
}

function CustomTable({ data }: CustomTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className="bg-gray-200">
          <TableRow>
            <TableCell className="font-bold">ID</TableCell>
            <TableCell className="font-bold">Make</TableCell>
            <TableCell className="font-bold">Model</TableCell>
            <TableCell className="font-bold">Year</TableCell>
            <TableCell className="font-bold">Engine</TableCell>
            <TableCell className="font-bold">Type</TableCell>
            <TableCell className="font-bold">Gearbox</TableCell>
            <TableCell className="font-bold">Condition</TableCell>
            <TableCell className="font-bold">HP</TableCell>
            <TableCell className="font-bold">Color</TableCell>
            <TableCell className="font-bold">Price</TableCell>
            <TableCell className="font-bold">City</TableCell>
            <TableCell className="font-bold">Mileage</TableCell>
            <TableCell className="font-bold">Extras</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} className="hover:bg-gray-100">
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.make}</TableCell>
              <TableCell>{row.model}</TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.engine}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.gearbox}</TableCell>
              <TableCell>{row.car_condition}</TableCell>
              <TableCell>{row.hp}</TableCell>
              <TableCell>{row.color}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.mileage}</TableCell>
              <TableCell>{row.extras}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
