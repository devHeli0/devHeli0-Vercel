import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../components/Footer/Footer';

const Contato: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center">
        <div className="bg-gray-800 p-8 rounded-md shadow-md w-full max-w-md mx-auto text-slate-700">
          <h1 className="text-4xl font-bold mb-4 text-gray-950">
            Página de Contato
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                id="nomeCompleto"
                placeholder="Nome Completo"
                {...register('nomeCompleto', { required: true })}
                className={`mt-1 p-2 w-full border ${
                  errors.nomeCompleto ? 'border-error' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
              />
              {errors.nomeCompleto && (
                <p className="text-error mt-1">Campo obrigatório</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className={`mt-1 p-2 w-full border ${
                  errors.email ? 'border-error' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
              />
              {errors.email?.type === 'required' && (
                <p className="text-error mt-1">Campo obrigatório</p>
              )}
              {errors.email?.type === 'pattern' && (
                <p className="text-error mt-1">E-mail inválido</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="assunto"
                placeholder="Assunto"
                {...register('assunto', { required: true })}
                className={`mt-1 p-2 w-full border ${
                  errors.assunto ? 'border-error' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
              />
              {errors.assunto && (
                <p className="text-error mt-1">Campo obrigatório</p>
              )}
            </div>
            <div className="mb-4">
              <textarea
                id="mensagem"
                placeholder="Mensagem"
                {...register('mensagem', { required: true })}
                rows={4}
                className={`mt-1 p-2 w-full border ${
                  errors.mensagem ? 'border-error' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
              />
              {errors.mensagem && (
                <p className="text-error mt-1">Campo obrigatório</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contato;
