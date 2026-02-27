import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export interface ConsultationRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function useSubmitConsultation() {
  const queryClient = useQueryClient();
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: ConsultationRequest) => {
      if (!actor) throw new Error('Actor not initialized');
      // Backend is empty, so we just simulate success
      return { success: true };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['consultations'] });
    },
  });
}
