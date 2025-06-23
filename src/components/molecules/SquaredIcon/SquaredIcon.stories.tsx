import { type Meta, type StoryObj } from '@storybook/react-vite';
import SquaredIcon from './SquaredIcon';

const meta: Meta<typeof SquaredIcon> = {
  title: 'Molecules/SquaredIcon',
  component: SquaredIcon,
};

export default meta;

type Story = StoryObj<typeof SquaredIcon>;

export const Default: Story = {
  args: {
    icon: 'arrow-left',
    color: 'pink',
  },
};

export const ColorGreen: Story = {
  args: {
    icon: 'arrow-left',
    color: 'green',
  },
};

export const SizeLarge: Story = {
  args: {
    icon: 'arrow-left',
    color: 'pink',
    size: 'large',
  },
};
