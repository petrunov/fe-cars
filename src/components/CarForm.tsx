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
  Slider,
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
              value={
                formik.values.year ? new Date(formik.values.year, 0, 1) : null
              }
              onChange={(value) => {
                const year = value ? value.getFullYear() : undefined;
                formik.setFieldValue('year', year);
              }}
              renderInput={(params) => (
                <TextField
                  name="year"
                  margin="normal"
                  fullWidth
                  error={formik.touched.year && Boolean(formik.errors.year)}
                  helperText={formik.touched.year && formik.errors.year}
                  value={params.inputProps?.value}
                  onBlur={params.inputProps?.onBlur}
                  onChange={params.inputProps?.onChange}
                  label={params.label}
                  variant={params.variant}
                  inputRef={params.inputRef}
                  InputLabelProps={params.InputLabelProps}
                  InputProps={params.InputProps}
                  FormHelperTextProps={params.FormHelperTextProps}
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
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography component="label" variant="body1">
              HP
            </Typography>
            <Slider
              name="hp"
              value={formik.values.hp}
              onChange={(_event, value) => formik.setFieldValue('hp', value)}
              step={1}
              min={30}
              max={3000}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography component="label" variant="body1">
              Price
            </Typography>
            <Slider
              name="price"
              value={formik.values.price}
              onChange={(_event, value) => formik.setFieldValue('price', value)}
              step={500}
              min={0}
              max={1000000}
              valueLabelDisplay="auto"
            />
          </Box>
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
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography component="label" variant="body1">
              Mileage
            </Typography>
            <Slider
              name="mileage"
              value={formik.values.mileage}
              onChange={(_event, value) =>
                formik.setFieldValue('mileage', value)
              }
              step={1000}
              min={1000}
              max={1000000}
              valueLabelDisplay="auto"
            />
          </Box>
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
