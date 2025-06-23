import { type Meta, type StoryObj } from '@storybook/react-vite';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: 'arrow-left',
  },
};

export const SizeLarge: Story = {
  args: {
    icon: 'arrow-left',
    size: 'large',
  },
};
