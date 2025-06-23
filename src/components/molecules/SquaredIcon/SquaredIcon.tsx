import classNames from 'classnames';
import Icon, { type IconKey } from '../../atoms/Icon/Icon';

const colors = {
  pink: 'bg-pink-100 text-pink-800',
  green: 'bg-green-100 text-green-800',
} as const satisfies Record<string, string>;

const sizes = {
  default: 'h-10 w-10',
  large: 'h-16 w-16 max-sm:h-10 max-sm:w-10',
} as const satisfies Record<string, string>;

type Color = keyof typeof colors;
type Size = keyof typeof sizes;

interface Props {
  icon: IconKey;
  color: Color;
  size?: Size;
}

const SquaredIcon = ({ icon, color, size = 'default' }: Props) => (
  <div
    className={classNames(
      'inline-flex items-center justify-center rounded-lg',
      colors[color],
      sizes[size],
    )}
  >
    <Icon
      icon={icon}
      className={classNames({ 'sm:h-5 sm:w-5': size === 'large' })}
    />
  </div>
);

export default SquaredIcon;
