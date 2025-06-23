import type { ReactElement } from 'react';
import ArrowLeft from '../../../design-tokens/icons/ArrowLeft';
import Calendar from '../../../design-tokens/icons/Calendar';
import Clock from '../../../design-tokens/icons/Clock';
import GiftCard from '../../../design-tokens/icons/GiftCard';
import StackedLineChart from '../../../design-tokens/icons/StackedLineChart';
import Family from '../../../design-tokens/icons/Family';

export const iconsMap = {
  'arrow-left': <ArrowLeft />,
  calendar: <Calendar />,
  clock: <Clock />,
  family: <Family />,
  'gift-card': <GiftCard />,
  'stacked-line-chart': <StackedLineChart />,
} as const satisfies Record<string, ReactElement>;

export type IconKey = keyof typeof iconsMap;

interface Props {
  icon: IconKey;
  size?: 'default' | 'large';
}

const sizes = {
  default: 'h-4 w-4',
  large: 'h-6 w-6',
};

const Icon = ({ icon, size = 'default' }: Props) => {
  if (!iconsMap[icon]) return null;
  return <div className={sizes[size]}>{iconsMap[icon]}</div>;
};

export default Icon;
