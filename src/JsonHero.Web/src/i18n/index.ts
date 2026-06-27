import {
  createContext,
  createElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "./locales/en";
import zhCN from "./locales/zh-CN";
import zhTW from "./locales/zh-TW";

export type Language = "en" | "zh-CN" | "zh-TW";
export type TranslationValues = Record<string, string | number>;
export type TranslationResource = {
  [key: string]: string | TranslationResource;
};
export type TranslationFunction = (
  key: string,
  values?: TranslationValues
) => string;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const languageStorageKey = "jsonhero.language";
const defaultLanguage: Language = "zh-CN";
const translations: Record<Language, TranslationResource> = {
  en,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
};

export const languages: Language[] = ["en", "zh-CN", "zh-TW"];

export const languageLabels: Record<Language, string> = {
  en: "en",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
};

export const languageLocales: Record<Language, string> = {
  en: "en-US",
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(loadLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(languageStorageKey, language);
    } catch {
      // Ignore storage failures so language switching still works in memory.
    }

    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );

  return createElement(LanguageContext.Provider, { value }, children);
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}

export function useTranslation(): { t: TranslationFunction } {
  const { language } = useLanguage();

  const t = useMemo(() => createTranslator(language), [language]);

  return { t };
}

export function createTranslator(language: Language): TranslationFunction {
  return (key, values) => interpolate(translate(language, key), values);
}

export function translate(language: Language, key: string): string {
  return (
    findTranslation(translations[language], key) ??
    findTranslation(translations.en, key) ??
    key
  );
}

export function localeForLanguage(language: Language): string {
  return languageLocales[language];
}

export function isLanguage(value: unknown): value is Language {
  return (
    typeof value === "string" && languages.includes(value as Language)
  );
}

function loadLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  try {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    return isLanguage(savedLanguage) ? savedLanguage : defaultLanguage;
  } catch {
    return defaultLanguage;
  }
}

function interpolate(message: string, values?: TranslationValues): string {
  if (!values) {
    return message;
  }

  return Object.entries(values).reduce((result, [key, value]) => {
    return result.replaceAll(`{${key}}`, String(value));
  }, message);
}

function findTranslation(
  resource: TranslationResource,
  key: string
): string | undefined {
  const directValue = resource[key];

  if (typeof directValue === "string") {
    return directValue;
  }

  let current: string | TranslationResource | undefined = resource;

  for (const part of key.split(".")) {
    if (typeof current !== "object" || current === undefined) {
      return undefined;
    }

    current = current[part];
  }

  return typeof current === "string" ? current : undefined;
}
