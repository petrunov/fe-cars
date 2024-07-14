import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CarForm from '../components/CarForm';
import { Car } from '../interfaces/Car';
import AppAppBar from '../components/CustomAppBar';
import { fetchCarById, createCar, updateCar } from '../services/carService';

function CarPage() {
  const { id } = useParams<{ id: string }>();
  const [initialData, setInitialData] = useState<Car | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchCarById(Number(id)).then(setInitialData).catch(console.error);
    }
  }, [id]);

  async function handleSubmit(car: Partial<Car>) {
    try {
      if (id) {
        await updateCar(Number(id), car);
      } else {
        await createCar(car);
      }
      navigate('/');
    } catch (error) {
      console.error('Failed to save car:', error);
    }
  }

  return (
    <>
      <AppAppBar />
      <CarForm initialData={initialData} onSubmit={handleSubmit} />
    </>
  );
}

export default CarPage;
