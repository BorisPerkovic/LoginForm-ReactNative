import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LoginFormTranslationEN from '../components/LoginForm/translations/LogInFormTranslation.en.json';
import LoginFormTranslationDE from '../components/LoginForm/translations/LogInFormTranslation.de.json';
import HomePageTranslationEN from '../components/HomePage/translations/HomePageTranslation.en.json';
import HomePageTranslationDE from '../components/HomePage/translations/HomePageTranslation.de.json';

const resources = {
  en: {
    login: LoginFormTranslationEN,
    home: HomePageTranslationEN,
  },
  de: {
    login: LoginFormTranslationDE,
    home: HomePageTranslationDE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
