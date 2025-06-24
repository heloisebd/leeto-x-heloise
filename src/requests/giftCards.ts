import { fakeDelay } from './fakeDelay';
import axios from 'axios';
import type { GiftCard } from 'types/gift-card/GiftCard';

export const getGiftCards = async (): Promise<Array<GiftCard>> => {
  const { data } = await axios.get('http://localhost:3001/gift-cards');
  // Fake delay to simulate real API call
  await fakeDelay(1000);
  return data;
};
