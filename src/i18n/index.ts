import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import it from './locales/it';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
    },
    lng: 'it', // lingua iniziale
    fallbackLng: 'en', // se mancano stringhe in italiano, usa l’inglese

    interpolation: {
      escapeValue: false, // React gestisce già la sicurezza
    },
  });

export default i18n;
