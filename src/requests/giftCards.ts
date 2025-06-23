import axios from 'axios';
import type { GiftCard } from '../types/gift-card/GiftCard';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getGiftCards = async (): Promise<Array<GiftCard>> => {
  const { data } = await axios.get('http://localhost:3001/gift-cards');
  await delay(3000);
  return data;
};
