import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

interface Data {
  id: number;
  make: string;
  model: string;
  year: number;
  engine: string;
  type: string;
  gearbox: string;
  condition: string;
  hp: number;
  color: string;
  price: number;
  city: string;
  mileage: string;
  extras: string;
}

const data: Data[] = [
  {
    id: 1,
    make: 'Mercedes',
    model: 'C-Class',
    year: 2022,
    engine: 'V6',
    type: 'Sedan',
    gearbox: 'Automatic',
    condition: 'New',
    hp: 250,
    color: 'Red',
    price: 50000,
    city: 'Skopje',
    mileage: '10000',
    extras: 'ABS',
  },
  {
    id: 2,
    make: 'BMW',
    model: 'M4',
    year: 2020,
    engine: 'V8',
    type: 'Sports car',
    gearbox: 'Manual',
    condition: 'Used',
    hp: 400,
    color: 'Black',
    price: 100000,
    city: 'Tirana',
    mileage: '50000',
    extras: 'Sport mode',
  },
  {
    id: 3,
    make: 'Audi',
    model: 'A8',
    year: 2021,
    engine: 'V10',
    type: 'Luxury car',
    gearbox: 'Automatic',
    condition: 'New',
    hp: 500,
    color: 'White',
    price: 150000,
    city: 'Pristina',
    mileage: '100000',
    extras: 'Leather seats',
  },
];

function CustomTable() {
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
              <TableCell>{row.condition}</TableCell>
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
