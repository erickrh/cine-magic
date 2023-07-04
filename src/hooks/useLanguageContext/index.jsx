import React from 'react';
import { createContext } from 'react';
import translation from './locales.json';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState('es');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const nodesLanguage = {
    error: translation[language].error,
    trends: translation[language].trends,
    seeMore: translation[language].seeMore,
    categories: translation[language].categories,
    emptyMovies: translation[language].emptyMovies,
    favoriteMovies: translation[language].favoriteMovies,
    inputPlaceholder: translation[language].inputPlaceholder,
    madeBy: translation[language].madeBy,
  };

  const dataLang = {
    nodesLanguage,
    language,
    translation,
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