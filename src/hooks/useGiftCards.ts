import { useQuery } from '@tanstack/react-query';
import { getGiftCards } from 'requests/giftCards';

export const useGiftCards = () => {
  return useQuery({
    queryKey: ['gift-cards'],
    queryFn: getGiftCards,
  });
};
