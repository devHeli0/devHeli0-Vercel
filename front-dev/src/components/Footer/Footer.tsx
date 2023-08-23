import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-900 text-white bottom-0 w-full">
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
        <div className="footer__contact-info mb-4">
          <p>
            Entre em contato:{' '}
            <a
              href="mailto:contato@devheli0.com"
              className="text-blue-400 hover:text-blue-600 transition duration-300"
            >
              contato@devheli0.com
            </a>
          </p>
        </div>
        <div className="footer__copyright mb-4">
          <p>
            &copy; {new Date().getFullYear()} devHeli0. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;