export type VerificationStatus = "pending" | "approved" | "rejected";

export interface Verification {
  id: number;
  user_id: number;
  status: VerificationStatus;
  document_type: string;
  document_url: string;
  created_at: string;
  updated_at: string;
  user?: {
    name: string;
    email: string;
  };
}
