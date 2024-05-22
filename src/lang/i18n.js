import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationEn from "./translation/translation.usa.json";
import TranslationKo from "./translation/translation.kor.json";

const resource = {
  USA: {
    translations: TranslationEn,
  },
  KOR: {
    translations: TranslationKo,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  lng: "KOR",
  fallbackLng: "KOR",
  debug: true,
  defaultNS: "translations",
  ns: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
