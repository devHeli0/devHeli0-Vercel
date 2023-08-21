import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Página Inicial</h1>
        <p className="text-lg mb-8">Esta é uma página inicial confortável e amigável.</p>
        <Link to="/contato" className="text-blue-600 hover:underline">
          Ir para a página de contato &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Home;
