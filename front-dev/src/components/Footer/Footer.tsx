import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer text-white bottom-0 w-full">
      <div className="container mx-auto flex flex-col items-center">
        <div className="footer__social-icons flex mb-4">
          <a
            href="#"
            className="footer__social-icon mr-4 hover:text-blue-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="#"
            className="footer__social-icon mr-4 hover:text-blue-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="#"
            className="footer__social-icon mr-4 hover:text-red-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="#"
            className="footer__social-icon mr-4 hover:text-blue-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="#"
            className="footer__social-icon hover:text-red-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
        <div className="footer__copyright mb-4">
          <p> {t('footer.rights', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
