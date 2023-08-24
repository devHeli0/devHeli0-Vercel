import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Projetos: React.FC = () => {
  const { t } = useTranslation(); // Access translation function

  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      githubLink: t('projects.project1.githubLink'),
      viewOnGitHub: t('projects.project1.viewOnGitHub'),
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      githubLink: t('projects.project2.githubLink'),
      viewOnGitHub: t('projects.project2.viewOnGitHub'),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <Header />
      <div className="text-center mb-15">
        <h1 className="text-4xl font-bold mb-4 text-gray-950">
          Meus Projetos
        </h1>
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-md text-slate-700"
            >
              <h2 className="text-2xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="mb-4 text-justify">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline inline-flex items-center"
              >
                {project.viewOnGitHub}
                <FontAwesomeIcon
                  icon={faGithub}
                  className="ml-2"
                  size="xl"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projetos;
