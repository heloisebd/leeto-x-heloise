import { BeneficiaryTypes, type Beneficiary } from 'types/gift-card/GiftCard';
import formatPrice from 'utils/formatPrice';
import ProgressBar from 'components/molecules/ProgressBar/ProgressBar';
import BeneficiaryTypeCircle from 'components/gift-cards/BeneficiariesCard/BeneficiaryTypeCircle/BeneficiaryTypeCircle';

interface Props {
  beneficiary: Beneficiary;
}

const BeneficiaryConsumption = ({ beneficiary }: Props) => {
  const consumedAmountPercentage =
    (beneficiary.consumption.consumedAmount * 100) /
    beneficiary.consumption.allowedAmount;

  return (
    <div className="flex items-center gap-4">
      <BeneficiaryTypeCircle
        type={beneficiary.type}
        name={beneficiary.firstName}
      />
      <div className="flex flex-auto flex-col gap-1">
        <legend className="text-xs text-slate-600">{`${beneficiary.type === BeneficiaryTypes.USER ? 'Vous-même' : beneficiary.firstName} · ${formatPrice(beneficiary.consumption.consumedAmount)} / ${formatPrice(beneficiary.consumption.allowedAmount)}`}</legend>
        <ProgressBar progress={consumedAmountPercentage} />
      </div>
    </div>
  );
};

export default BeneficiaryConsumption;
