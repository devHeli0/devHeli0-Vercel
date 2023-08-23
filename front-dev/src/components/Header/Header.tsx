// components/Header/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header: React.FC = () => {
  return (
    <header className="header text-white py-8 top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-gray-100 hover:text-gray-300"
        >
          devHeli0
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/projetos" className="hover:text-gray-300">
            Projetos
          </Link>
          <Link to="/contato" className="hover:text-gray-300">
            Contato
          </Link>
          <a
            href={'https://github.com/devHeli0'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 inline-flex items-center"
          >
            GitHub
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
