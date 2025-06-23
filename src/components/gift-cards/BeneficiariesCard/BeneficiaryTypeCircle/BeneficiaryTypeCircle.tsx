import type { Beneficiary } from '../../../../types/gift-card/GiftCard';

interface Props {
  type: Beneficiary['type'];
  name: string;
}

const emojiByType: Record<Beneficiary['type'], string> = {
  user: '🙋‍♂️',
  child: '👶',
  companion: '💙',
};

const BeneficiaryTypeCircle = ({ type, name }: Props) => (
  <div
    className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs"
    title={name}
  >
    {emojiByType[type]}
  </div>
);

export default BeneficiaryTypeCircle;
