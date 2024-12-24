import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { BlogDetails, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const Blogs = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Blogs
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        I’m a 4th-year Computer Science undergraduate @UCSC passionate about operating systems, 
        microkernel architectures, and modern web and mobile development & architecture design 
        with the help of my profound knowledge in computer science fundamentals.
        </p>
      </div>

      <div className='py-16'>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {BlogDetails.map((blog, index) => (
              <VerticalTimelineElement
                key={blog.company_name}
                date={blog.date}
                iconStyle={{ background: blog.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={blog.icon}
                      alt={blog.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: blog.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {blog.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {blog.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {blog.points.map((point, index) => (
                    <li
                      key={`blog-point-${index}`}
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
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Blogs;