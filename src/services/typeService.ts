import { Option } from '../interfaces/Options';

const fetchTypeOptions = async (): Promise<Option[]> => {
  return [
    { value: 'Sedan', label: 'Sedan' },
    { value: 'Hatchback', label: 'Hatchback' },
    { value: 'Truck', label: 'Truck' },
    { value: 'SUV', label: 'SUV' },
    { value: 'Touring', label: 'Touring' },
    { value: 'Other', label: 'Other' },
  ];
};

export default fetchTypeOptions;
