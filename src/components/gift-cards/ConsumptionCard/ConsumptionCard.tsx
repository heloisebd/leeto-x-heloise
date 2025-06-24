import ProgressBar from 'components/molecules/ProgressBar/ProgressBar';
import { useTranslation } from 'react-i18next';
import formatPrice from 'utils/formatPrice';

interface Props {
  allowedAmount: number;
  consumedAmount: number;
}

const ConsumptionCard = ({ allowedAmount, consumedAmount }: Props) => {
  const { t } = useTranslation('gift-cards');
  const remainingAmount = Math.max(allowedAmount - consumedAmount, 0);
  const consumedAmountPercentage = (consumedAmount * 100) / allowedAmount;

  return (
    <div className="flex items-end gap-6">
      <div className="flex flex-col gap-0.5 text-slate-800">
        <span className="text-xl font-semibold sm:text-2xl">
          {formatPrice(remainingAmount)}
        </span>
        <span className="text-xs font-medium sm:text-sm">{t('available')}</span>
      </div>
      <div className="flex flex-auto flex-col gap-2">
        <legend className="text-xs text-slate-600">
          {t('consumedOnAllowed', {
            consumed: formatPrice(consumedAmount),
            allowed: formatPrice(allowedAmount),
          })}
        </legend>
        <ProgressBar
          progress={consumedAmountPercentage}
          className="max-w-[370px]"
        />
      </div>
    </div>
  );
};

export default ConsumptionCard;
