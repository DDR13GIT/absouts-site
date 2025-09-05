import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from "@/lib/translation-context";
import { languages, Language } from "@/lib/translations";

export function LanguageSelector() {
  const { language, setLanguage } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode as Language);
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange} data-testid="language-selector">
      <SelectTrigger className="w-32 bg-white border border-border">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} data-testid={`language-${lang.code}`}>
            {lang.nativeName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
