import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Alert, CircularProgress } from '@mui/material';
import { Car } from '../interfaces/Car';
import { createCar, updateCar, fetchCarById } from '../services/carService';
import { useAuth } from '../hooks/useAuth';
import CarForm from '../components/CarForm';
import CustomAppBar from '../components/CustomAppBar';

function CarPage() {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Partial<Car>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const fetchData = async (carId: number) => {
    try {
      const fetchedCar = await fetchCarById(carId);
      setCar(fetchedCar);
    } catch (err) {
      setError('Error fetching car');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData(parseInt(id, 10));
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleSave = useCallback(
    async (carData: Partial<Car>) => {
      const token = getToken();
      if (token) {
        try {
          if (id) {
            await updateCar(parseInt(id, 10), carData, token);
          } else {
            await createCar(carData, token);
          }
          navigate('/');
        } catch (err) {
          setError('Error saving car');
        }
      } else {
        setError('User is not authenticated');
      }
    },
    [id, getToken, navigate]
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
    <div>
      <CustomAppBar />
      {error && (
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
      <CarForm initialData={car} onSubmit={handleSave} />
    </div>
  );
}

export default CarPage;
