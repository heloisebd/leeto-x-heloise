import classNames from 'classnames';

interface Props {
  progress: number;
  className?: string;
}

const ProgressBar = ({ progress = 0, className = '' }: Props) => {
  const percentage = Math.min(Math.round(progress), 100);

  return (
    <div className={classNames('flex w-full items-center gap-2', className)}>
      <div className="h-2 w-full rounded-lg bg-slate-300">
        <span
          className="bg-leeto-blue-600 block h-full rounded-lg"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <legend className="text-xs font-medium">{`${percentage}%`}</legend>
    </div>
  );
};

export default ProgressBar;
