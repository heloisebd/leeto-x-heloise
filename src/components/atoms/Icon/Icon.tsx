import iconsMap from './iconsMap';
import classNames from 'classnames';

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
