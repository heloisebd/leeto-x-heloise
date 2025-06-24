import type { IconKey } from 'components/atoms/Icon/Icon';
import SquaredIcon from 'components/molecules/SquaredIcon/SquaredIcon';
import type { ReactNode } from 'react';

interface Props {
  icon: IconKey;
  title: string;
  children: ReactNode;
}

const DataCard = ({ icon, title, children }: Props) => (
  <div className="flex flex-col gap-4 rounded-lg border-1 border-slate-300 p-4 sm:p-6">
    <SquaredIcon icon={icon} color="green" />
    <div className="flex flex-col gap-4">
      <h2 className="font-medium">{title}</h2>
      {children}
    </div>
  </div>
);

export default DataCard;
