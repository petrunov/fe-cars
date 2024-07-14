export const setToken = (token: string) => {
  sessionStorage.setItem('access_token', token);
};

export const getToken = () => {
  return sessionStorage.getItem('access_token');
};

export const removeToken = () => {
  sessionStorage.removeItem('access_token');
};

export const isLoggedIn = () => {
  return !!getToken();
};

export const setAuthenticatedUser = (user: object) => {
  sessionStorage.setItem('user', JSON.stringify(user));
};

export const getAuthenticatedUser = () => {
  const user = sessionStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const removeAuthenticatedUser = () => {
  sessionStorage.removeItem('user');
};
