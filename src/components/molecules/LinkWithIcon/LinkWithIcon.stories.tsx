import LinkWithIcon from './LinkWithIcon';
import { type Meta, type StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof LinkWithIcon> = {
  title: 'Molecules/LinkWithIcon',
  component: LinkWithIcon,
};

export default meta;

type Story = StoryObj<typeof LinkWithIcon>;

export const Default: Story = {
  args: {
    to: '/',
    label: 'Back to previous page',
    icon: 'arrow-left',
  },
};
