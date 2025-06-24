import commonEn from './src/locales/en/common.json';
import giftCardsEn from './src/locales/en/gift-cards.json';
import commonFr from './src/locales/fr/common.json';
import giftCardsFr from './src/locales/fr/gift-cards.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { common: commonEn, 'gift-cards': giftCardsEn },
  fr: { common: commonFr, 'gift-cards': giftCardsFr },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  ns: ['common', 'gift-cards'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
