import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { User, AuthResponse, Verification, VerificationStatus } from '@/lib/types';

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

// Add request interceptor for auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => 
    apiClient.post('/auth/login', { email, password }),
  
  logout: (): Promise<AxiosResponse<void>> => 
    apiClient.post('/logout'),
  
  getUser: (): Promise<AxiosResponse<User>> => 
    apiClient.get('/auth/me'),
};

export const verificationAPI = {
  getVerifications: (): Promise<AxiosResponse<Verification[]>> => 
    apiClient.get('/verifications'),
  
  updateStatus: (id: number, status: VerificationStatus): Promise<AxiosResponse<Verification>> => 
    apiClient.put(`/verifications/${id}`, { status }),
};