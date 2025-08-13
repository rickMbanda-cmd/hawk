
import api from './api';

class AuthService {
  // Register new user
  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData);
      const { user, token } = response.data;
      
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
      
      return { user, token };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  }

  // Login user
  async login(credentials) {
    try {
      const response = await api.post('/auth/login', credentials);
      const { user, token } = response.data;
      
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
      
      return { user, token };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  }

  // Logout user
  async logout() {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

  // Get current user from localStorage
  getCurrentUser() {
    try {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // Check if user is authenticated
  isAuthenticated() {
    const token = localStorage.getItem('token');
    const user = this.getCurrentUser();
    return !!(token && user);
  }

  // Get auth token
  getToken() {
    return localStorage.getItem('token');
  }

  // Verify token with backend
  async verifyToken() {
    try {
      const response = await api.get('/auth/verify');
      return response.data.user;
    } catch (error) {
      this.logout();
      return null;
    }
  }
}

export default new AuthService();
