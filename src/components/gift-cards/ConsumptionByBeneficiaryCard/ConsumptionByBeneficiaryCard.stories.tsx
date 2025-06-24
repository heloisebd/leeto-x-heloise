import { childMock, companionMock, userMock } from '../mock';
import ConsumptionByBeneficiaryCard from './ConsumptionByBeneficiaryCard';
import { type Meta, type StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ConsumptionByBeneficiaryCard> = {
  title: 'GiftCards/ConsumptionByBeneficiaryCard',
  component: ConsumptionByBeneficiaryCard,
};

export default meta;

type Story = StoryObj<typeof ConsumptionByBeneficiaryCard>;

export const Default: Story = {
  args: {
    beneficiaries: [userMock, companionMock, childMock],
  },
};
