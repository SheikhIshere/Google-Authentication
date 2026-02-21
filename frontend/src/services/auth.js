const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export const authAPI = {
  googleLogin: async (token) => {
    const response = await fetch(`${API_URL}/auth/google/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    if (!response.ok) throw new Error('Login failed');
    return response.json();
  },

  register: async (userData) => {
    const response = await fetch(`${API_URL}/auth/register/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Registration failed');
    return response.json();
  },

  getProfile: async (accessToken) => {
    const response = await fetch(`${API_URL}/auth/profile/`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) throw new Error('Could not fetch profile');
    return response.json();
  },

  logout: async (refreshToken, accessToken) => {
    await fetch(`${API_URL}/auth/logout/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });
  },

  refresh: async (refreshToken) => {
    const response = await fetch(`${API_URL}/auth/refresh/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: refreshToken }),
    });
    if (!response.ok) throw new Error('Token refresh failed');
    return response.json();
  },
};
