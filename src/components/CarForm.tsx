import { Link as RouterLink } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Alert,
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
      mileage: '',
      extras: '',
      ...initialData,
    },
    validationSchema: carValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      onSubmit(values);
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
          <TextField
            name="make"
            label="Make"
            fullWidth
            value={formik.values.make}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.make && Boolean(formik.errors.make)}
            helperText={formik.touched.make && formik.errors.make}
          />
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
          <TextField
            name="engine"
            label="Engine"
            fullWidth
            value={formik.values.engine}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.engine && Boolean(formik.errors.engine)}
            helperText={formik.touched.engine && formik.errors.engine}
          />
          <TextField
            name="type"
            label="Type"
            fullWidth
            value={formik.values.type}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
          />
          <TextField
            name="gearbox"
            label="Gearbox"
            fullWidth
            value={formik.values.gearbox}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.gearbox && Boolean(formik.errors.gearbox)}
            helperText={formik.touched.gearbox && formik.errors.gearbox}
          />
          <TextField
            name="car_condition"
            label="Condition"
            fullWidth
            value={formik.values.car_condition}
            onChange={formik.handleChange}
            margin="normal"
            error={
              formik.touched.car_condition &&
              Boolean(formik.errors.car_condition)
            }
            helperText={
              formik.touched.car_condition && formik.errors.car_condition
            }
          />
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
          <TextField
            name="city"
            label="City"
            fullWidth
            value={formik.values.city}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
          <TextField
            name="mileage"
            label="Mileage"
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

CarForm.defaultProps = {
  initialData: undefined,
};

export default CarForm;
