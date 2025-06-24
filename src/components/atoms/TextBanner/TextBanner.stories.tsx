import TextBanner from './TextBanner';
import { type Meta, type StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof TextBanner> = {
  title: 'Atoms/TextBanner',
  component: TextBanner,
};

export default meta;

type Story = StoryObj<typeof TextBanner>;

export const Default: Story = {
  args: {
    title: 'Title of my text banner',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat placerat tortor ut eleifend.',
  },
};
