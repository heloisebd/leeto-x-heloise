import HeaderBlock from './HeaderBlock';
import { type Meta, type StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof HeaderBlock> = {
  title: 'Organisms/HeaderBlock',
  component: HeaderBlock,
};

export default meta;

type Story = StoryObj<typeof HeaderBlock>;

export const Default: Story = {
  args: {
    title: 'Header block title',
    icon: 'gift-card',
    metaInfo: [
      {
        icon: 'calendar',
        label: 'Useful information',
      },
      { icon: 'clock', label: 'Another very useful information' },
    ],
  },
};
