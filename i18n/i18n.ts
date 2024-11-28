import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt.json';
import en from './locales/en.json';

const getDeviceLanguage = () => {
  const languageTag = Intl.DateTimeFormat().resolvedOptions().locale;
  return languageTag.startsWith('en') ? 'en' : 'pt';
};

i18n.use(initReactI18next).init({
  ns: [
    'login',
    'register',
    'step-by-step',
    'home',
    'analysis',
    'history',
    'profile',
    'edit-profile',
    'create-animal',
  ],
  resources: {
    pt,
    en,
  },
  lng: getDeviceLanguage(),
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
