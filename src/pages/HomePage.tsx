import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';
import { Car } from '../interfaces/Car';
import CustomAppBar from '../components/CustomAppBar';
import { fetchCars } from '../services/carService';

function HomePage() {
  const [data, setData] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const cars = await fetchCars();
        setData(cars);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <CustomAppBar />
      <CustomTable data={data} />
    </>
  );
}

export default HomePage;
