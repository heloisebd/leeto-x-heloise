import SkeletonLoader from './SkeletonLoader';
import { type Meta, type StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof SkeletonLoader> = {
  title: 'Atoms/SkeletonLoader',
  component: SkeletonLoader,
};

export default meta;

type Story = StoryObj<typeof SkeletonLoader>;

export const Default: Story = {};
