import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'it' ? 'en' : 'it';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="btn btn-primary"
      aria-label="Toggle language"
    >
      <span className={`mr-1 ${i18n.language === 'it' ? 'font-bold' : ''}`}>IT</span>
      /
      <span className={`ml-1 ${i18n.language === 'en' ? 'font-bold' : ''}`}>EN</span>
    </button>
  );
};

export default LanguageToggle;