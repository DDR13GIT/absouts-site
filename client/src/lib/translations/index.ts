import { en, TranslationKeys } from './en';
import { es } from './es';

export type Language = 'en' | 'es';

export const translations: Record<Language, TranslationKeys> = {
  en,
  es
};

export const languages = [
  { code: 'en' as Language, name: 'English', nativeName: 'English 🇺🇸' },
  { code: 'es' as Language, name: 'Spanish', nativeName: 'Español 🇪🇸' }
];

export * from './en';