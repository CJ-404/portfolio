import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import { CTA } from "../components";
import { educations, achivements } from "../constants";
import { arrow, oss } from "../assets/icons";
import cv from "../assets/Charith_Jayarangana_Resume.pdf";

import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Education
        </span>{" "}
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Currently ranked among the top 25 computer science undergraduates at my university, 
        I have consistently demonstrated academic excellence with a CGPA of 3.79. 
        My journey reflects a deep passion for technology and a commitment to mastering the 
        principles of computer science, equipping me with a strong foundation to tackle real-world 
        challenges.
        </p>

        <div className='flex flex-row align-center justify-between'>
            <a
              href={cv}
              target='_blank'
              className='btn btn-primary'
              rel='noreferrer'
            >
              Download CV
            </a>

            {/* <a
              href='/transcript.pdf'
              target='_blank'
              className='btn btn-primary'
              rel='noreferrer'
            >
              Download Current Transcript
            </a> */}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>My Education</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've completed my education from various institutions, 
            where I've had the opportunity to improve my skills and knowledge as well as 
            my interpersonal & leadership skills.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {educations.map((education, index) => (
              <VerticalTimelineElement
                key={education.company_name}
                date={education.date}
                iconStyle={{ background: education.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={education.icon}
                      alt={education.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: education.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {education.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {education.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {education.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <h3 className='subhead-text mt-12 mb-2'>Achivements</h3>
        <div className='mt-0 flex flex-col gap-3 text-slate-500'>
          <p>
            While pursuing my education, I've been fortunate to receive recognition for my work & dedication.
          </p>
        </div>
        <div className='flex flex-wrap my-5 gap-16'>
          {achivements.map((achivement) => (
            <div className='lg:w-[400px] w-full' key={achivement.name}>
  
              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {achivement.name}
                </h4>
                <p className='mt-2 text-slate-500'>{achivement.description}</p>
                {
                  // TODO: link to proofs
                  achivement.hasProof &&
                  <div className='mt-5 flex items-center gap-2 font-poppins'>
                    <Link
                      to={achivement.link}
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
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Education;
