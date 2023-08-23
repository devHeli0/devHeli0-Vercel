import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'activeLanguage' : ''}
      >
        🇺🇸 English
      </button>
      <button
        onClick={() => changeLanguage('ptBr')}
        className={i18n.language === 'ptBr' ? 'activeLanguage' : ''}
      >
        🇧🇷 Português
      </button>
    </div>
  );
};

export default LanguageSwitcher;