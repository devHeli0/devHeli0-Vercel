import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next'; // Importe useTranslation
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation(); // Use o hook useTranslation

  return (
    <header className="header text-white py-8 top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-gray-100 hover:text-gray-300"
        >
          {t('header.title')}
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            {t('header.home')}
          </Link>
          <Link to="/projetos" className="hover:text-gray-300">
            {t('header.projects')}
          </Link>
          <Link to="/contato" className="hover:text-gray-300">
            {t('header.contact')}
          </Link>
          <a
            href={'https://github.com/devHeli0'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 inline-flex items-center"
          >
            {t('header.github')}
            <FontAwesomeIcon
              icon={faGithub}
              className="ml-1 mb-0"
              size="sm"
            />
          </a>
        </nav>
        <LanguageSwitcher />{' '}
      </div>
    </header>
  );
};

export default Header;
