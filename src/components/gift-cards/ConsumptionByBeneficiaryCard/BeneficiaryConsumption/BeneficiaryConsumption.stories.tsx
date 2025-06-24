import { type Meta, type StoryObj } from '@storybook/react-vite';
import { childMock, userMock } from '../../mock';
import BeneficiaryConsumption from './BeneficiaryConsumption';

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
