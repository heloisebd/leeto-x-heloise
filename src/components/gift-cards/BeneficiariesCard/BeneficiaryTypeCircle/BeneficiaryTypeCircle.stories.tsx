import BeneficiaryTypeCircle from './BeneficiaryTypeCircle';
import { type Meta, type StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof BeneficiaryTypeCircle> = {
  title: 'GiftCards/BeneficiariesCard/BeneficiaryTypeCircle',
  component: BeneficiaryTypeCircle,
};

export default meta;

type Story = StoryObj<typeof BeneficiaryTypeCircle>;

export const Default: Story = {
  args: {
    type: 'user',
    name: 'Harry',
  },
};

export const Companion: Story = {
  args: {
    type: 'companion',
    name: 'Ginny',
  },
};

export const Child: Story = {
  args: {
    type: 'child',
    name: 'Albus',
  },
};
