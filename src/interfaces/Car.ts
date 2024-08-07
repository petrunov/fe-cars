import { User } from './User';

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  engine: string;
  type: string;
  gearbox: string;
  car_condition: string;
  hp: number;
  color: string;
  price: number;
  city: string;
  mileage: number;
  extras: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  user: User;
}
