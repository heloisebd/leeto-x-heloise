import axios from 'axios';
import type { GiftCard } from 'types/gift-card/GiftCard';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getGiftCard = async (id: number): Promise<GiftCard> => {
  const { data } = await axios.get(`http://localhost:3001/gift-cards/${id}`);
  await delay(3000);
  return data;
};
