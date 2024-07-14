import { Car } from '../interfaces/Car';

const host = 'http://localhost:3001';

async function fetchWithAuth(
  url: string,
  options: RequestInit,
  accessToken?: string
): Promise<Response> {
  const headers = new Headers(options.headers || {});
  if (accessToken) {
    headers.append('Authorization', `Bearer ${accessToken}`);
  }

  const newOptions: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(url, newOptions);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Request to ${url} failed with status ${response.status}: ${errorText}`
    );
  }
  return response;
}

async function fetchJSON<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Request to ${url} failed with status ${response.status}: ${errorText}`
    );
  }
  return response.json();
}

export async function fetchCars(): Promise<Car[]> {
  return fetchJSON<Car[]>(`${host}/cars`);
}

export async function fetchCarById(id: number): Promise<Car> {
  return fetchJSON<Car>(`${host}/cars/${id}`);
}

export async function createCar(
  car: Partial<Car>,
  accessToken: string
): Promise<void> {
  await fetchWithAuth(
    `${host}/cars`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    },
    accessToken
  );
}

export async function updateCar(
  id: number,
  car: Partial<Car>,
  accessToken: string
): Promise<void> {
  await fetchWithAuth(
    `${host}/cars/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    },
    accessToken
  );
}

export async function deleteCar(
  id: number,
  accessToken: string
): Promise<void> {
  await fetchWithAuth(
    `${host}/cars/${id}`,
    {
      method: 'DELETE',
    },
    accessToken
  );
}
