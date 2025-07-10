import { useQuery } from '@tanstack/react-query';
import { verificationAPI } from '@/lib/api';
import { Verification } from '@/lib/types';

export const useVerifications = () => {
  return useQuery<Verification[]>({
    queryKey: ['verifications'],
    queryFn: () => verificationAPI.getVerifications().then(res => res.data),
  });
};