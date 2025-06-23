import { type Meta, type StoryObj } from '@storybook/react-vite';
import BeneficiaryConsumption from './BeneficiaryConsumption';
import { childMock, userMock } from '../../mock';

const meta: Meta<typeof BeneficiaryConsumption> = {
  title: 'GiftCards/ConsumptionByBeneficiaryCard/BeneficiaryConsumption',
  component: BeneficiaryConsumption,
};

export default meta;

type Story = StoryObj<typeof BeneficiaryConsumption>;

export const Default: Story = {
  args: {
    beneficiary: userMock,
  },
};

export const Child: Story = {
  args: {
    beneficiary: childMock,
  },
};
