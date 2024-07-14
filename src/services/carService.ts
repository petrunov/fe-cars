import { Car } from '../interfaces/Car';

export async function fetchCars(): Promise<Car[]> {
  const response = await fetch('http://localhost:3001/cars');
  if (!response.ok) {
    throw new Error('Failed to fetch cars');
  }
  const data = await response.json();
  return data;
}

export async function fetchCarById(id: number): Promise<Car> {
  const response = await fetch(`http://localhost:3001/cars/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch car');
  }
  const data = await response.json();
  return data;
}

export async function createCar(car: Partial<Car>): Promise<void> {
  const response = await fetch('http://localhost:3001/cars', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
  if (!response.ok) {
    throw new Error('Failed to create car');
  }
}

export async function updateCar(id: number, car: Partial<Car>): Promise<void> {
  const response = await fetch(`http://localhost:3001/cars/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
  if (!response.ok) {
    throw new Error('Failed to update car');
  }
}

export async function deleteCar(id: number): Promise<void> {
  const response = await fetch(`http://localhost:3001/cars/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete car');
  }
}
