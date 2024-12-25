import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow, oss } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      Although I have started several projects throughout the years, 
      these are the ones that I am most passionate about. Since some of them are open-source, 
      you are welcome to examine the codes and offer suggestions for improvements if you find something that interests you. 
      Your cooperation is much appreciated!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>

            <div className='flex items-start gap-2 mt-5'>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  {project.iconUrl!== '' && <img
                    src={project.iconUrl}
                    alt='threads'
                    className='w-1/2 h-1/2 object-contain'
                  />}
                </div>
              </div>
              {
              project.isOSS && 
              <div className='block-container w-8 h-8 ml-2'>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={oss}
                    alt='threads'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
              }
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              {
                project.isOSS &&
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </div>
              }
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
