import { fakeDelay } from './fakeDelay';
import axios from 'axios';
import type { GiftCard } from 'types/gift-card/GiftCard';

export const getGiftCard = async (id: number): Promise<GiftCard> => {
  const { data } = await axios.get(`http://localhost:3001/gift-cards/${id}`);
  // Fake delay to simulate real API call
  await fakeDelay(1000);
  return data;
};
