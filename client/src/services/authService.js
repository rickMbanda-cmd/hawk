
import api from './api';

class AuthService {
  // Store token in localStorage
  setToken(token) {
    localStorage.setItem('token', token);
  }

  // Get token from localStorage
  getToken() {
    return localStorage.getItem('token');
  }

  // Remove token from localStorage
  removeToken() {
    localStorage.removeItem('token');
  }

  // Store user data in localStorage
  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Get user data from localStorage
  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Remove user data from localStorage
  removeUser() {
    localStorage.removeItem('user');
  }

  // Check if user is authenticated
  isAuthenticated() {
    const token = this.getToken();
    const user = this.getUser();
    return !!(token && user);
  }

  // Register new user
  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData);
      const { token, user } = response.data;
      
      this.setToken(token);
      this.setUser(user);
      
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Login user
  async login(credentials) {
    try {
      const response = await api.post('/auth/login', credentials);
      const { token, user } = response.data;
      
      this.setToken(token);
      this.setUser(user);
      
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Logout user
  async logout() {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      // Continue with logout even if API call fails
      console.warn('Logout API call failed:', error);
    } finally {
      this.removeToken();
      this.removeUser();
    }
  }

  // Get current user from server
  async getCurrentUser() {
    try {
      const response = await api.get('/auth/me');
      return response.data.user;
    } catch (error) {
      this.removeToken();
      this.removeUser();
      throw error;
    }
  }
}

export default new AuthService();
