import { Option } from '../interfaces/Options';

const fetchConditionOptions = async (): Promise<Option[]> => {
  return [
    { value: 'New', label: 'New' },
    { value: 'Used', label: 'Used' },
  ];
};

export default fetchConditionOptions;
