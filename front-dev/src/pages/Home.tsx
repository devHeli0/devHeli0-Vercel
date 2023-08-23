import React from 'react';
import Footer from '../components/Footer/Footer';
import Gengar from '../assets/gengar.gif';
import Header from '../components/Header/Header';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <Header />
      <div className="text-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md mx-auto text-slate-700">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {t('home.welcome')}
          </h1>
          <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
            <img
              src={Gengar}
              alt="https://br.pinterest.com/pin/gengar-gif-discover-more-purple-cartoon-cute-gengar-pokemon-gif-download-httpswwwicegifcomgengar48-in-2023--950470696339693043/"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-justify mb-8 text-gray-200">
            {t('home.intro')}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
