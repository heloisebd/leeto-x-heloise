import { type Meta, type StoryObj } from '@storybook/react-vite';
import ConsumptionByBeneficiaryCard from './ConsumptionByBeneficiaryCard';
import { childMock, companionMock, userMock } from '../mock';

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
