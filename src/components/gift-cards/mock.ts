import { BeneficiaryTypes } from '../../types/gift-card/GiftCard';

export const userMock = {
  id: 1,
  type: BeneficiaryTypes.USER,
  firstName: 'Harry',
  consumption: {
    allowedAmount: 200,
    consumedAmount: 50,
  },
};

export const companionMock = {
  id: 2,
  type: BeneficiaryTypes.COMPANION,
  firstName: 'Ginny',
  consumption: {
    allowedAmount: 100,
    consumedAmount: 20,
  },
};
export const childMock = {
  id: 3,
  type: BeneficiaryTypes.CHILD,
  firstName: 'Albus',
  consumption: {
    allowedAmount: 300,
    consumedAmount: 250,
  },
};
