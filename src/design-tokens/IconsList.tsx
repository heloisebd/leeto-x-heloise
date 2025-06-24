import Icon, { type IconKey } from 'components/atoms/Icon/Icon';
import iconsMap from 'components/atoms/Icon/iconsMap';

const IconsList = () => (
  <div className="flex flex-wrap gap-4">
    {Object.keys(iconsMap).map((iconKey) => (
      <div
        key={iconKey}
        className="inline-flex flex-col items-center gap-2 rounded-lg border-1 border-slate-200 bg-slate-50 px-4 pt-4 pb-3"
      >
        <Icon icon={iconKey as IconKey} />
        <div>{iconKey}</div>
      </div>
    ))}
  </div>
);
export default IconsList;
