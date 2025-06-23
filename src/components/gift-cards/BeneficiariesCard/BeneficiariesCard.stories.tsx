import { type Meta, type StoryObj } from '@storybook/react-vite';
import BeneficiariesCard from './BeneficiariesCard';
import { childMock, companionMock, userMock } from '../mock';

const meta: Meta<typeof BeneficiariesCard> = {
  title: 'GiftCards/BeneficiariesCard',
  component: BeneficiariesCard,
};

export default meta;

type Story = StoryObj<typeof BeneficiariesCard>;

export const Default: Story = {
  args: {
    beneficiaries: [userMock, companionMock, childMock],
  },
};

export const WithUserAndCompanion: Story = {
  args: {
    beneficiaries: [userMock, companionMock],
  },
};

export const WithUserAndChild: Story = {
  args: {
    beneficiaries: [userMock, childMock],
  },
};

export const WithChildOnly: Story = {
  args: {
    beneficiaries: [childMock],
  },
};

export const WithChildAndCompanion: Story = {
  args: {
    beneficiaries: [companionMock, childMock],
  },
};
