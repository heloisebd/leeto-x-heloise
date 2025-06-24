import { useQuery } from '@tanstack/react-query';
import { getGiftCard } from 'requests/giftCard';

export const useGiftCard = (id: number | undefined) => {
  return useQuery({
    queryKey: ['gift-card'],
    queryFn: () => getGiftCard(id!),
    enabled: !!id,
  });
};
