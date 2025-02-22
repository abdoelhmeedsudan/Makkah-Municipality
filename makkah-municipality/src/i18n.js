// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arTranslation from './i18n/ar.json';
import enTranslation from './i18n/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: arTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    fallbackLng: 'ar', // default language set to Arabic
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
