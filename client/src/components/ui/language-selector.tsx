import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GoogleTranslateService } from "@/lib/google-translate";

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const translateService = GoogleTranslateService.getInstance();

  const languages = translateService.getSupportedLanguages();

  const handleLanguageChange = async (languageCode: string) => {
    setSelectedLanguage(languageCode);
    try {
      await translateService.translateTo(languageCode);
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  return (
    <Select value={selectedLanguage} onValueChange={handleLanguageChange} data-testid="language-selector">
      <SelectTrigger className="w-32 bg-white border border-border">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code} data-testid={`language-${language.code}`}>
            {language.nativeName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
