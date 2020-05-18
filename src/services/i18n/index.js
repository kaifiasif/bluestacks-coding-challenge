import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./translations/en.json";
import fr from './translations/fr.json';

i18n.use(LanguageDetector).init({

  resources: {
    en: en,
    fr: fr
  },
  fallbackLng: "en",
  debug: true,

  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, 

  interpolation: {
    escapeValue: false, 
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
