import * as yup from 'yup';

const carValidationSchema = yup.object().shape({
  make: yup.string().required('Make is required'),
  model: yup.string().required('Model is required'),
  year: yup
    .number()
    .min(1885, 'Year must be after 1885')
    .required('Year is required'),
  engine: yup.string().required('Engine is required'),
  type: yup.string().required('Type is required'),
  gearbox: yup.string().required('Gearbox is required'),
  car_condition: yup.string().required('Condition is required'),
  hp: yup
    .number()
    .positive('HP must be a positive number')
    .required('HP is required'),
  color: yup.string().required('Color is required'),
  price: yup
    .number()
    .positive('Price must be a positive number')
    .required('Price is required'),
  city: yup.string().required('City is required'),
  mileage: yup
    .number()
    .positive('Mileage must be a positive number')
    .required('Mileage is required'),
  extras: yup.string().required('Extras is required'),
});

export default carValidationSchema;
