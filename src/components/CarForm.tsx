/* eslint-disable react/require-default-props */
import { Link as RouterLink } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { SketchPicker } from 'react-color';
import { useFormik } from 'formik';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Car } from '../interfaces/Car';
import carValidationSchema from '../utils/validationSchemas';

interface CarFormProps {
  initialData?: Partial<Car>;
  onSubmit: (car: Partial<Car>) => void;
}

const makeOptions = ['BMW', 'Mercedes', 'Audi'];
const gearboxOptions = ['Manual', 'Automatic'];
const typesOptions = ['Sedan', 'Hatchback', 'Truck', 'SUV', 'Touring', 'Other'];
const engineOptions = [
  'Diesel',
  'Petrol',
  'Electric',
  'Hybrid',
  'Hydrogen',
  'Other',
];
const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
];

const conditions = ['New', 'Used'];

function CarForm({ initialData, onSubmit }: CarFormProps) {
  const formik = useFormik({
    initialValues: {
      make: '',
      model: '',
      year: null,
      engine: '',
      type: '',
      gearbox: '',
      car_condition: '',
      hp: 0,
      color: '',
      price: '',
      city: '',
      mileage: 0,
      extras: '',
      ...initialData,
    },
    validationSchema: carValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      const cleanedValues = {
        ...values,
        year: values.year || undefined, // Convert null to undefined
      };
      onSubmit(cleanedValues);
    },
  });

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ mt: 3 }}>
        <Typography component="h1" variant="h5">
          {initialData && initialData.id ? 'Edit Car' : 'Create Car'}
        </Typography>
        {Object.keys(formik.errors).length > 0 && formik.touched && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {Object.values(formik.errors).map((error) => (
              <div key={error}>{error}</div>
            ))}
          </Alert>
        )}
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Make</InputLabel>
            <Select
              name="make"
              value={formik.values.make}
              onChange={formik.handleChange}
              label="Make"
            >
              {makeOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            name="model"
            label="Model"
            fullWidth
            value={formik.values.model}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.model && Boolean(formik.errors.model)}
            helperText={formik.touched.model && formik.errors.model}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={['year']}
              label="Year"
              minDate={new Date(1885, 0, 1)}
              maxDate={new Date(2024, 11, 31)}
              value={formik.values.year}
              onChange={(value) =>
                formik.setFieldValue('year', value?.getFullYear() || '')
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="year"
                  margin="normal"
                  fullWidth
                  error={formik.touched.year && Boolean(formik.errors.year)}
                  helperText={formik.touched.year && formik.errors.year}
                />
              )}
            />
          </LocalizationProvider>
          <FormControl fullWidth margin="normal">
            <InputLabel>Engine</InputLabel>
            <Select
              name="engine"
              value={formik.values.engine}
              onChange={formik.handleChange}
              label="Engine"
            >
              {engineOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Type</InputLabel>
            <Select
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              label="Type"
            >
              {typesOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Gearbox</InputLabel>
            <Select
              name="gearbox"
              value={formik.values.gearbox}
              onChange={formik.handleChange}
              label="Gearbox"
            >
              {gearboxOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Condition</InputLabel>
            <Select
              name="car_condition"
              value={formik.values.car_condition}
              onChange={formik.handleChange}
              label="Condition"
            >
              {conditions.map((condition) => (
                <MenuItem key={condition} value={condition}>
                  {condition}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            name="hp"
            label="HP"
            fullWidth
            type="number"
            value={formik.values.hp}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.hp && Boolean(formik.errors.hp)}
            helperText={formik.touched.hp && formik.errors.hp}
          />
          <TextField
            name="price"
            label="Price"
            fullWidth
            value={formik.values.price}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>City</InputLabel>
            <Select
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              label="City"
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            name="mileage"
            label="Mileage"
            type="number"
            fullWidth
            value={formik.values.mileage}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.mileage && Boolean(formik.errors.mileage)}
            helperText={formik.touched.mileage && formik.errors.mileage}
          />
          <TextField
            name="extras"
            label="Extras"
            fullWidth
            value={formik.values.extras}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.extras && Boolean(formik.errors.extras)}
            helperText={formik.touched.extras && formik.errors.extras}
          />
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography component="label" variant="body1">
              Color
            </Typography>
            <SketchPicker
              color={formik.values.color || '#fff'}
              onChangeComplete={(color) =>
                formik.setFieldValue('color', color.hex)
              }
            />
            {formik.touched.color && formik.errors.color && (
              <Alert severity="error" sx={{ mt: 1 }}>
                {formik.errors.color}
              </Alert>
            )}
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {initialData && initialData.id ? 'Update Car' : 'Create Car'}
          </Button>
          <Button
            variant="contained"
            fullWidth
            component={RouterLink}
            to="/"
            sx={{ mb: 10 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default CarForm;
