import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable/CustomTable';
import { Car } from '../interfaces/Car';
import AppAppBar from '../components/AppAppBar/AppAppBar';
import { fetchCars as fetchData } from '../services/carService';

function HomePage() {
  const [data, setData] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Ensure error is declared only once

  useEffect(() => {
    const getData = async () => {
      try {
        const cars = await fetchData();
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
      <AppAppBar />
      <CustomTable data={data} />
    </>
  );
}

export default HomePage;
