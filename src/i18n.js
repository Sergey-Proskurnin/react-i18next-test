import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  // Connecting the backend i18next
  .use(Backend)
  // Automatic language detection
  .use(LanguageDetector)
  // Initialization module
  .use(initReactI18next)
  .init({
    // Standard language
    fallbackLng: 'en',
    debug: true,
    // Recognition and caching of language cookies
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
