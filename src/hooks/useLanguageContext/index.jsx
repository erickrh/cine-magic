import React from 'react';
import { createContext } from 'react';
import translation from './locales.json';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState('en');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const dataLang = {
    translation,
    language,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={dataLang}>
      {children}
    </LanguageContext.Provider>
  );
};

function useLanguageContext() {
  const lang = React.useContext(LanguageContext);
  return lang;
}

export { LanguageProvider, useLanguageContext };