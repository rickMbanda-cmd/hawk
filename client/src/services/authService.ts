
import api from './api';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'candidate' | 'employer' | 'admin';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'candidate' | 'employer';
}

class AuthService {
  // Register new user
  async register(userData: RegisterData): Promise<{ user: User; token: string }> {
    try {
      const response = await api.post('/auth/register', userData);
      const { user, token } = response.data;
      
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
      
      return { user, token };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  }

  // Login user
  async login(credentials: LoginCredentials): Promise<{ user: User; token: string }> {
    try {
      const response = await api.post('/auth/login', credentials);
      const { user, token } = response.data;
      
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
      
      return { user, token };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  }

  // Logout user
  async logout(): Promise<void> {
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
  getCurrentUser(): User | null {
    try {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const user = this.getCurrentUser();
    return !!(token && user);
  }

  // Get auth token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Verify token with backend
  async verifyToken(): Promise<User | null> {
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
