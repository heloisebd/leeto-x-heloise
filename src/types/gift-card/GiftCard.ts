export const BeneficiaryTypes = {
  USER: 'user',
  COMPANION: 'companion',
  CHILD: 'child',
} as const;

type BeneficiaryType = (typeof BeneficiaryTypes)[keyof typeof BeneficiaryTypes];

export type Beneficiary = {
  id: number;
  type: BeneficiaryType;
  firstName: string;
  consumption: {
    allowedAmount: number;
    consumedAmount: number;
  };
};

export type GiftCard = {
  id: number;
  description: string;
  name: string;
  openingDate: string;
  closingDate: string;
  allowedAmount: number;
  consumedAmount: number;
  beneficiaries: Array<Beneficiary>;
};
