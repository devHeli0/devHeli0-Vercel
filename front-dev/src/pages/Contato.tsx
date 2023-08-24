import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Charizard from '../assets/Charizard.gif';
import { useTranslation } from 'react-i18next';

const Contato: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <Header />
      <div className="text-center mb-15">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md text-slate-700">
          <h1 className="text-4xl font-bold mb-4 text-gray-950">
            {t('contact.title')}
          </h1>
          <div className='charizard-pokebola'>
            <img
              src={Charizard}
              alt="Charizard"
              className="resized-charizard object-cover w-min h-min"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                id="nomeCompleto"
                placeholder={t('contact.namePlaceholder')}
                {...register('nomeCompleto', { required: true })}
                className={`input ${errors.nomeCompleto ? 'input-error' : ''}`}
              />
              {errors.nomeCompleto && (
                <p className="text-error mt-1">{t('contact.nameRequired')}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder={t('contact.emailPlaceholder')}
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className={`input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email?.type === 'required' && (
                <p className="text-error mt-1">{t('contact.emailRequired')}</p>
              )}
              {errors.email?.type === 'pattern' && (
                <p className="text-error mt-1">{t('contact.emailInvalid')}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="assunto"
                placeholder={t('contact.subjectPlaceholder')}
                {...register('assunto', { required: true })}
                className={`input ${errors.assunto ? 'input-error' : ''}`}
              />
              {errors.assunto && (
                <p className="text-error mt-1">{t('contact.subjectRequired')}</p>
              )}
            </div>
            <div className="mb-4">
              <textarea
                id="mensagem"
                placeholder={t('contact.messagePlaceholder')}
                {...register('mensagem', { required: true })}
                rows={4}
                className={`input ${errors.mensagem ? 'input-error' : ''}`}
              />
              {errors.mensagem && (
                <p className="text-error mt-1">{t('contact.messageRequired')}</p>
              )}
            </div>
            <button type="submit" className="btn-primary">
              {t('contact.submitButton')}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contato;
