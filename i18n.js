i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    react: { 
      useSuspense: false //   <---- this will do the magic
    }
});