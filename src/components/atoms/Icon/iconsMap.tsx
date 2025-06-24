import ArrowLeft from 'design-tokens/icons/ArrowLeft';
import Calendar from 'design-tokens/icons/Calendar';
import Clock from 'design-tokens/icons/Clock';
import Family from 'design-tokens/icons/Family';
import GiftCard from 'design-tokens/icons/GiftCard';
import StackedLineChart from 'design-tokens/icons/StackedLineChart';
import type { ReactElement } from 'react';

const iconsMap = {
  'arrow-left': <ArrowLeft />,
  calendar: <Calendar />,
  clock: <Clock />,
  family: <Family />,
  'gift-card': <GiftCard />,
  'stacked-line-chart': <StackedLineChart />,
} as const satisfies Record<string, ReactElement>;

export default iconsMap;
