import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationKeys } from './translations';

interface TranslationContextType {
  language: Language;
  t: TranslationKeys;
  setLanguage: (lang: Language) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Get from localStorage or default to 'en'
    const saved = localStorage.getItem('absouts-language');
    return (saved as Language) || 'en';
  });

  const t = translations[language];

  useEffect(() => {
    // Save to localStorage when language changes
    localStorage.setItem('absouts-language', language);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}