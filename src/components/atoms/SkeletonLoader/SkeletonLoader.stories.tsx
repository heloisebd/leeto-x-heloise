import { type Meta, type StoryObj } from '@storybook/react-vite';
import SkeletonLoader from './SkeletonLoader';

const meta: Meta<typeof SkeletonLoader> = {
  title: 'Atoms/SkeletonLoader',
  component: SkeletonLoader,
};

export default meta;

type Story = StoryObj<typeof SkeletonLoader>;

export const Default: Story = {};
