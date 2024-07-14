import { Option } from '../interfaces/Options';

const fetchMakeOptions = async (): Promise<Option[]> => {
  return [
    { value: 'BMW', label: 'BMW' },
    { value: 'Mercedes', label: 'Mercedes' },
    { value: 'Audi', label: 'Audi' },
  ];
};

export default fetchMakeOptions;
