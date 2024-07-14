import { Car } from '../interfaces/Car';

export async function fetchCars(): Promise<Car[]> {
  const response = await fetch('http://localhost:3001/cars');
  if (!response.ok) {
    throw new Error('Failed to fetch cars');
  }
  const data = await response.json();
  return data;
}

export async function deleteCar(id: number): Promise<void> {
  const response = await fetch(`http://localhost:3001/cars/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete car');
  }
}

export default fetchCars;
