import type { Beneficiary } from 'types/gift-card/GiftCard';
import DataCard from 'components/organisms/DataCard/DataCard';
import BeneficiaryConsumption from 'components/gift-cards/ConsumptionByBeneficiaryCard/BeneficiaryConsumption/BeneficiaryConsumption';

interface Props {
  beneficiaries: Array<Beneficiary>;
}

const ConsumptionByBeneficiaryCard = ({ beneficiaries = [] }: Props) => {
  const user = beneficiaries.find(({ type }) => type === 'user');
  const others = beneficiaries.filter(({ type }) => type !== 'user');

  return (
    <DataCard title="Suivi de consommation" icon="stacked-line-chart">
      <div className="flex flex-col gap-4">
        {user ? <BeneficiaryConsumption beneficiary={user} /> : null}

        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          {others.length > 0
            ? others.map((beneficiary) => (
                <BeneficiaryConsumption
                  key={beneficiary.id}
                  beneficiary={beneficiary}
                />
              ))
            : null}
        </div>
      </div>
    </DataCard>
  );
};

export default ConsumptionByBeneficiaryCard;
