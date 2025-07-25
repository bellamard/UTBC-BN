import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  User,
  AuthResponse,
  Verification,
  VerificationStatus,
} from "@/lib/types";
import { get } from "http";

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add request interceptor for auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> =>
    apiClient.post("/auth/login", { email, password }),

  logout: (): Promise<AxiosResponse<void>> => apiClient.post("/logout"),

  getUser: (): Promise<AxiosResponse<User>> => apiClient.get("/auth/me"),
};

export const bookAPI = {
  getBooks: (): Promise<AxiosResponse<any[]>> => apiClient.get("/ouvrages"),

  getBookById: (id: string): Promise<AxiosResponse<any>> =>
    apiClient.get(`/ouvrages/${id}`),

  createBook: (data: any): Promise<AxiosResponse<any>> =>
    apiClient.post("/ouvrages", data),

  updateBook: (id: string, data: any): Promise<AxiosResponse<any>> =>
    apiClient.put(`/ouvrages/${id}`, data),

  deleteBook: (id: string): Promise<AxiosResponse<void>> =>
    apiClient.delete(`/ouvrages/${id}`),

  favoriteBook: (id: string): Promise<AxiosResponse<any>> =>
    apiClient.post(`/ouvrages/${id}/favorite`),

  unfavoriteBook: (id: string): Promise<AxiosResponse<any>> =>
    apiClient.delete(`/ouvrages/${id}/unfavorite`),

  getFavorites: (): Promise<AxiosResponse<any[]>> =>
    apiClient.get("/ouvrages/favorites"),

  getFavoriteById: (id: string): Promise<AxiosResponse<any>> =>
    apiClient.get(`/ouvrages/favorites/${id}`),

  getBookAnnotations: (id: string): Promise<AxiosResponse<any[]>> =>
    apiClient.get(`/ouvrages/${id}/annotations`),

  createAnnotation: (
    id: string,
    content: string
  ): Promise<AxiosResponse<any>> =>
    apiClient.post(`/ouvrages/${id}/annotations`, { content }),

  updateAnnotation: (
    id: string,
    annotationId: string,
    content: string
  ): Promise<AxiosResponse<any>> =>
    apiClient.put(`/ouvrages/${id}/annotations/${annotationId}`, {
      content,
    }),

  deleteAnnotation: (
    id: string,
    annotationId: string
  ): Promise<AxiosResponse<void>> =>
    apiClient.delete(`/ouvrages/${id}/annotations/${annotationId}`),
    
  createSession: (id: string, bookId: string): Promise<AxiosResponse<any>> =>
    apiClient.post(`/ouvrages/${bookId}/sessions`, { id }),

  updateSession: (
    id: string,
    sessionId: string,
    data: any
  ): Promise<AxiosResponse<any>> =>
    apiClient.put(`/ouvrages/${id}/sessions/${sessionId}`, data),
};

export const verificationAPI = {
  getVerifications: (): Promise<AxiosResponse<Verification[]>> =>
    apiClient.get("/verifications"),

  updateStatus: (
    id: number,
    status: VerificationStatus
  ): Promise<AxiosResponse<Verification>> =>
    apiClient.put(`/verifications/${id}`, { status }),
};
