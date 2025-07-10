export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
  email_verified_at: string | null;
}

export interface AuthResponse {
  user: User;
  access_token: string;
  token_type: string;
}