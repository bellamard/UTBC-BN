export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: 'administrateur' | 'etudiant' | 'chercher';
  email_verified_at: string | null;
}

export interface AuthResponse {
  user: User;
  access_token: string;
  token_type: string;
}