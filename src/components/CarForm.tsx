/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { Car } from '../interfaces/Car';

interface CarFormProps {
  initialData?: Car;
  onSubmit: (car: Partial<Car>) => void;
}

function CarForm({ initialData, onSubmit }: CarFormProps) {
  const [car, setCar] = useState<Partial<Car>>({
    make: '',
    model: '',
    year: 0,
    engine: '',
    type: '',
    gearbox: '',
    car_condition: '',
    hp: 0,
    color: '',
    price: '',
    city: '',
    mileage: '',
    extras: '',
    ...initialData, // If initialData is provided, it will populate the form
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCar((prevCar) => ({ ...prevCar, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(car);
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ mt: 3 }}>
        <Typography component="h1" variant="h5">
          {initialData ? 'Edit Car' : 'Create Car'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            name="make"
            label="Make"
            fullWidth
            value={car.make}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="model"
            label="Model"
            fullWidth
            value={car.model}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="year"
            label="Year"
            fullWidth
            type="number"
            value={car.year}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="engine"
            label="Engine"
            fullWidth
            value={car.engine}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="type"
            label="Type"
            fullWidth
            value={car.type}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="gearbox"
            label="Gearbox"
            fullWidth
            value={car.gearbox}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="car_condition"
            label="Condition"
            fullWidth
            value={car.car_condition}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="hp"
            label="HP"
            fullWidth
            type="number"
            value={car.hp}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="color"
            label="Color"
            fullWidth
            value={car.color}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="price"
            label="Price"
            fullWidth
            value={car.price}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="city"
            label="City"
            fullWidth
            value={car.city}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="mileage"
            label="Mileage"
            fullWidth
            value={car.mileage}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="extras"
            label="Extras"
            fullWidth
            value={car.extras}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {initialData ? 'Update Car' : 'Create Car'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

CarForm.defaultProps = {
  initialData: undefined,
};

export default CarForm;
