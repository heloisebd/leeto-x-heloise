import ProgressBar from './ProgressBar';
import { type Meta, type StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ProgressBar> = {
  title: 'Molecules/ProgressBar',
  component: ProgressBar,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 60,
  },
};
