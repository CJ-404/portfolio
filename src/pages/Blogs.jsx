import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { BlogDetails } from "../constants";

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
          Hey, As a student benefiting from Sri Lanka's free education system, 
          I believe in giving back to society by sharing the knowledge I've gained. 
          Here, you'll find insights, ideas, and experiences that I hope will inspire and empower others. 
          Together, let's learn, grow, and contribute to a better future.
        </p>

        <p>
          Also, this is a great way for me to document my journey and keep track of my work.
        </p>
      </div>

      <div className='py-16'>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {BlogDetails.map((blog, index) => (
              <VerticalTimelineElement
                key={blog.hosted_site}
                date={blog.date}
                iconStyle={{ background: blog.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={blog.icon}
                      alt={blog.hosted_site}
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
                  {/* link to the blog post */}
                  <a
                    href={blog.link}
                    target='_blank'
                    rel='noreferrer'
                    className='text-blue-600 text-sm font-normal'
                  >
                    Read more
                  </a>
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
