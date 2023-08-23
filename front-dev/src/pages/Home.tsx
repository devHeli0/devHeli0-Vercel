import React from 'react';
import Footer from '../components/Footer/Footer';
import Gengar from '../assets/gengar.gif';
import Header from '../components/Header/Header';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <Header />
      <div className="text-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md mx-auto text-slate-700">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Bem-vindo a devHeli0!
          </h1>
          <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
            <img
              src={Gengar}
              alt="https://br.pinterest.com/pin/gengar-gif-discover-more-purple-cartoon-cute-gengar-pokemon-gif-download-httpswwwicegifcomgengar48-in-2023--950470696339693043/"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-justify mb-8 text-gray-200">
            I'm an enthusiastic Full Stack Developer with a
            distinctive background in Biology. My journey into the
            tech world began during my biology studies when I
            harnessed languages like R and Python for statistical
            analysis and data manipulation. As I embraced programming
            challenges, I immersed myself in development, cloud
            computing, and databases. Currently pursuing a degree in
            Systems Analysis and Development, I am excited to channel
            my software expertise into solving the most versatile
            problems.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
