import { Option } from '../interfaces/Options';

const fetchGearboxOptions = async (): Promise<Option[]> => {
  return [
    { value: 'Manual', label: 'Manual' },
    { value: 'Automatic', label: 'Automatic' },
  ];
};

export default fetchGearboxOptions;
