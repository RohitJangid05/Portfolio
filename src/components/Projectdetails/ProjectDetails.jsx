import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../assets/assets';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = data.find(item => item.id === parseInt(id));

  if (!project) {
    return <div className="text-center">Project not found</div>;
  }

  return (
    <div className="w-full pt-20 md:pt-40 px-4 md:px-0 flex flex-col md:flex-row justify-center gap-10 pb-20">

      <div className='flex flex-col items-center gap-3 w-full  md:w-1/2'>
        <h1 className="text-3xl font-bold text-center">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full md:w-96 border-4 rounded-xl" />
        <a href={project.url} className="border-2 px-5 py-2 w-24 text-center rounded-full hover:bg-orange-400 hover:text-white transition duration-300">
          Go Live
        </a>
      </div>
      <div className='w-full pt-5 md:w-1/2'>
        <p className='text-2xl mb-4'>{project.description}</p>
        <ul className='px-5 text-lg'>
          {project.ul.map((item, index) => {
            const [title, description] = item.split(': ');
            return (
              <li key={index} className='list-disc'>
                <strong className="font-bold text-orange-400">{title}:</strong> {description}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
