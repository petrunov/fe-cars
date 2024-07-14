import { Option } from '../interfaces/Options';

const fetchCityOptions = async (): Promise<Option[]> => {
  return [
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Houston', label: 'Houston' },
    { value: 'Phoenix', label: 'Phoenix' },
    { value: 'Philadelphia', label: 'Philadelphia' },
    { value: 'San Antonio', label: 'San Antonio' },
    { value: 'San Diego', label: 'San Diego' },
    { value: 'Dallas', label: 'Dallas' },
    { value: 'San Jose', label: 'San Jose' },
  ];
};

export default fetchCityOptions;
