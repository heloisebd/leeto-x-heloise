import classNames from 'classnames';
import ArrowLeft from 'design-tokens/icons/ArrowLeft';
import Calendar from 'design-tokens/icons/Calendar';
import Clock from 'design-tokens/icons/Clock';
import Family from 'design-tokens/icons/Family';
import GiftCard from 'design-tokens/icons/GiftCard';
import StackedLineChart from 'design-tokens/icons/StackedLineChart';
import type { ReactElement } from 'react';

export const iconsMap = {
  'arrow-left': <ArrowLeft />,
  calendar: <Calendar />,
  clock: <Clock />,
  family: <Family />,
  'gift-card': <GiftCard />,
  'stacked-line-chart': <StackedLineChart />,
} as const satisfies Record<string, ReactElement>;

export type IconKey = keyof typeof iconsMap;

const sizes = {
  small: 'h-3 w-3',
  default: 'h-4 w-4',
  large: 'h-6 w-6',
} as const satisfies Record<string, string>;

type Size = keyof typeof sizes;

interface Props {
  icon: IconKey;
  size?: Size;
  className?: string;
}

const Icon = ({ icon, size = 'default', className = '' }: Props) => {
  if (!iconsMap[icon]) return null;
  return (
    <div
      className={classNames(
        'inline-flex items-center justify-center',
        sizes[size],
        className,
      )}
    >
      {iconsMap[icon]}
    </div>
  );
};

export default Icon;
