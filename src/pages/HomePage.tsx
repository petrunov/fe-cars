/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Button, Alert, CircularProgress } from '@mui/material';
import { Car } from '../interfaces/Car';
import CustomTable from '../components/CustomTable';
import AppAppBar from '../components/CustomAppBar';
import { fetchCars, deleteCar } from '../services/carService';
import { useAuth } from '../hooks/useAuth';

function HomePage() {
  const [data, setData] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user, isAuthenticated, getToken } = useAuth();
  const navigate = useNavigate();

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

  const onDelete = useCallback(
    async (id: number): Promise<void> => {
      const token = getToken();
      if (token) {
        try {
          await deleteCar(id, token);
          setData((prevData) => prevData.filter((car) => car.id !== id));
        } catch (err) {
          setError('Error deleting car');
        }
      } else {
        setError('User is not authenticated');
      }
    },
    [getToken]
  );

  const onEdit = useCallback(
    (row: Car): void => {
      navigate(`/edit/${row.id}`);
    },
    [navigate]
  );

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <AppAppBar />

      {error && (
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      {isAuthenticated && (
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
      )}

      <CustomTable
        data={data}
        onEdit={onEdit}
        onDelete={onDelete}
        currentUserId={user ? user.id : null}
      />
    </>
  );
}

export default React.memo(HomePage);
