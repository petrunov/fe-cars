import { Car } from '../interfaces/Car';

export async function fetchCars(): Promise<Car[]> {
  const response = await fetch('http://localhost:3001/cars');
  if (!response.ok) {
    throw new Error('Failed to fetch cars');
  }
  const data = await response.json();
  return data;
}

export default fetchCars;
