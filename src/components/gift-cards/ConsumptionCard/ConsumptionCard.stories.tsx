import ConsumptionCard from './ConsumptionCard';
import { type Meta, type StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ConsumptionCard> = {
  title: 'GiftCards/ConsumptionCard',
  component: ConsumptionCard,
};

export default meta;

type Story = StoryObj<typeof ConsumptionCard>;

export const Default: Story = {
  args: {
    allowedAmount: 500,
    consumedAmount: 400,
  },
};
