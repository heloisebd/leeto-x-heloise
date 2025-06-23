import type { IconKey } from '../../atoms/Icon/Icon';
import Icon from '../../atoms/Icon/Icon';
import SquaredIcon from '../../molecules/SquaredIcon/SquaredIcon';

interface Props {
  icon: IconKey;
  title: string;
  metaInfo: Array<{ icon: IconKey; label: string }>;
}

const HeaderBlock = ({ icon, title, metaInfo = [] }: Props) => (
  <header className="flex flex-col gap-2">
    <SquaredIcon icon={icon} color="pink" size="large" />
    <div className="flex flex-col gap-4 sm:gap-2">
      <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">
        {title}
      </h1>

      {metaInfo.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {metaInfo.map(({ icon, label }) => (
            <div className="flex items-center gap-1 text-sm">
              <Icon icon={icon} className="shrink-0" />
              <span className="text-slate-600">{label}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  </header>
);

export default HeaderBlock;
