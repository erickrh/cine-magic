import React from 'react';
import { createContext } from 'react';
import translation from './locales.json';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState('en');

  const changeLanguage = e => {
    setLanguage(e.target.value);
  };

  const nodesLanguage = {
    error: translation[language].error,
    madeBy: translation[language].madeBy,
    trends: translation[language].trends,
    loading: translation[language].loading,
    noFound: translation[language].noFound,
    seeMore: translation[language].seeMore,
    categories: translation[language].categories,
    emptyMovies: translation[language].emptyMovies,
    favoriteMovies: translation[language].favoriteMovies,
    inputPlaceholder: translation[language].inputPlaceholder,
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