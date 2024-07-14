/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Car } from '../interfaces/Car';
import ConfirmationDialog from './ConfirmationDialog';

interface CustomTableProps {
  data: Car[];
  onEdit: (car: Car) => void;
  onDelete: (id: number) => void;
  currentUserId: number | null;
}

function CustomTable({
  data,
  onEdit,
  onDelete,
  currentUserId,
}: CustomTableProps) {
  const [open, setOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setSelectedCarId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCarId(null);
  };

  const handleConfirm = () => {
    if (selectedCarId !== null) {
      onDelete(selectedCarId);
    }
    handleClose();
  };

  return (
    <>
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
              <TableCell className="font-bold">Actions</TableCell>
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
                <TableCell>
                  {currentUserId && row.userId === currentUserId && (
                    <>
                      <IconButton onClick={() => onEdit(row)} aria-label="edit">
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDeleteClick(row.id)}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmationDialog
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Confirm Delete"
        content="Are you sure you want to delete this car?"
      />
    </>
  );
}

export default React.memo(CustomTable);
