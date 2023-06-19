import i18n, { use } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translation from "./en/translation.json";
import uaTranslation from "./ua/translation.json";

export const resources = {
  en: {
    translation,
  },
  ua: {
    translation: uaTranslation,
  },
};

use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["cookie", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: true,
    },
    interpolation: {
      escapeValue: true,
    },
    resources,
  });

export default i18n;
