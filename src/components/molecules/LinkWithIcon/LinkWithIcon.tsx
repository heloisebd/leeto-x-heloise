import type { IconKey } from 'components/atoms/Icon/Icon';
import Icon from 'components/atoms/Icon/Icon';

interface Props {
  to: string;
  label: string;
  icon: IconKey;
}

const LinkWithIcon = ({ to, label, icon }: Props) => (
  <a href={to} className="text-leeto-blue-600 inline-flex items-center gap-2">
    <span className="flex items-center justify-center max-sm:h-8 max-sm:w-8 max-sm:rounded-lg max-sm:border-1 max-sm:border-slate-300 max-sm:text-slate-900">
      <Icon icon={icon} size="small" className="shrink-0" />
    </span>
    <span className="text-sm font-medium max-sm:hidden">{label}</span>
  </a>
);

export default LinkWithIcon;
