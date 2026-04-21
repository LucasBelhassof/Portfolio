import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en/translation.json';
import ptTranslation from '../locales/pt/translation.json';

const LANGUAGE_STORAGE_KEY = 'language';
const supportedLanguages = ['en', 'pt'];
const fallbackLanguage = 'en';

const normalizeLanguage = (language) => {
  if (!language || typeof language !== 'string') {
    return null;
  }

  const [baseLanguage] = language.toLowerCase().split('-');

  return supportedLanguages.includes(baseLanguage) ? baseLanguage : null;
};

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return fallbackLanguage;
  }

  try {
    const savedLanguage = normalizeLanguage(
      window.localStorage.getItem(LANGUAGE_STORAGE_KEY),
    );

    if (savedLanguage) {
      return savedLanguage;
    }

    const browserLanguage = normalizeLanguage(window.navigator.language);

    return browserLanguage || fallbackLanguage;
  } catch {
    return fallbackLanguage;
  }
};

const syncDocumentLanguage = (language) => {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.lang = language;
};

const persistLanguage = (language) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    return;
  }
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    pt: {
      translation: ptTranslation,
    },
  },
  lng: getInitialLanguage(),
  fallbackLng: fallbackLanguage,
  interpolation: {
    escapeValue: false,
  },
});

syncDocumentLanguage(i18n.resolvedLanguage || i18n.language || fallbackLanguage);
persistLanguage(i18n.resolvedLanguage || i18n.language || fallbackLanguage);

i18n.on('languageChanged', (language) => {
  syncDocumentLanguage(language);
  persistLanguage(language);
});

export { LANGUAGE_STORAGE_KEY, supportedLanguages };
export default i18n;
