import DataCard from './DataCard';
import { type Meta, type StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof DataCard> = {
  title: 'Organisms/DataCard',
  component: DataCard,
};

export default meta;

type Story = StoryObj<typeof DataCard>;

export const Default: Story = {
  args: {
    title: 'My data card title',
    icon: 'family',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra
        orci feugiat tortor luctus, at suscipit purus maximus. Morbi risus arcu,
        bibendum in pharetra in, tempus eu ex.
      </p>
    ),
  },
};
