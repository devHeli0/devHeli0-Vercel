import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projetos: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      githubLink: 'https://github.com/yourusername/project2',
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
              <p className="mb-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline inline-flex items-center"
              >
                Ver no GitHub
                <FontAwesomeIcon icon={faGithub} className="ml-2" size='xl' />
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
