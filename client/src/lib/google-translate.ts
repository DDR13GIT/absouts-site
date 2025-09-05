// Google Translate integration utility
export class GoogleTranslateService {
  private static instance: GoogleTranslateService;
  private initialized = false;

  static getInstance(): GoogleTranslateService {
    if (!GoogleTranslateService.instance) {
      GoogleTranslateService.instance = new GoogleTranslateService();
    }
    return GoogleTranslateService.instance;
  }

  async initialize() {
    if (this.initialized) return;

    return new Promise<void>((resolve) => {
      // Load Google Translate script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      
      // Create callback function
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,ar,fr,de,es',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
        
        this.initialized = true;
        resolve();
      };

      document.head.appendChild(script);

      // Create hidden translate element
      if (!document.getElementById('google_translate_element')) {
        const translateDiv = document.createElement('div');
        translateDiv.id = 'google_translate_element';
        translateDiv.style.display = 'none';
        document.body.appendChild(translateDiv);
      }
    });
  }

  async translateTo(languageCode: string) {
    if (!this.initialized) {
      await this.initialize();
    }

    // Wait for Google Translate to be ready
    const checkReady = () => {
      return new Promise<void>((resolve) => {
        const interval = setInterval(() => {
          if ((window as any).google && (window as any).google.translate) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });
    };

    await checkReady();

    // Trigger translation
    const selectElement = document.querySelector('select.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = languageCode;
      selectElement.dispatchEvent(new Event('change'));
    }
  }

  getSupportedLanguages() {
    return [
      { code: 'en', name: 'English', nativeName: 'English' },
      { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
      { code: 'fr', name: 'French', nativeName: 'Français' },
      { code: 'de', name: 'German', nativeName: 'Deutsch' },
      { code: 'es', name: 'Spanish', nativeName: 'Español' }
    ];
  }
}
