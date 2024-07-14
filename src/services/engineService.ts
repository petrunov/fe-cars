import { Option } from '../interfaces/Options';

const fetchEngineOptions = async (): Promise<Option[]> => {
  return [
    { value: 'Diesel', label: 'Diesel' },
    { value: 'Petrol', label: 'Petrol' },
    { value: 'Electric', label: 'Electric' },
    { value: 'Hybrid', label: 'Hybrid' },
    { value: 'Hydrogen', label: 'Hydrogen' },
    { value: 'Other', label: 'Other' },
  ];
};

export default fetchEngineOptions;
