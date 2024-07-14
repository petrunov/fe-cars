/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Car } from '../interfaces/Car';
import CustomTable from '../components/CustomTable';
import AppAppBar from '../components/CustomAppBar';
import { fetchCars, deleteCar } from '../services/carService';
import { useAuth } from '../hooks/useAuth';

function HomePage() {
  const [data, setData] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

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

  const onDelete = useCallback(async (id: number): Promise<void> => {
    try {
      await deleteCar(id);
      setData((prevData) => prevData.filter((car) => car.id !== id));
    } catch (err) {
      setError('Error deleting car');
    }
  }, []);

  const onEdit = useCallback((row: Car): void => {
    console.log('Edit car:', row);
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

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: '10vh' }}
      >
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/new"
          sx={{ textDecoration: 'none' }}
        >
          Add New Car
        </Button>
      </Box>

      <CustomTable
        data={data}
        onEdit={onEdit}
        onDelete={onDelete}
        currentUserId={user ? user.sub : null}
      />
    </>
  );
}

export default React.memo(HomePage);
