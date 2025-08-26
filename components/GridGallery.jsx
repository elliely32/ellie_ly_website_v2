import React from 'react';
import Image from 'next/image';

const GridGallery = ({ projects = [] }) => {
  return (
    <div className="flex gap-10 flex-wrap">
      {projects.map((project, idx) => {
        return (
          <div className="size-100 relative " key={`code-project-${idx}`}>
            <Image src="/assets/test-thumb.png" alt="test-thumb" fill="true" />
            <div
              className="size-100 absolute bg-secondary top-0 p-5 opacity-50 2xl:opacity-0 hover:opacity-75
            duration-200 ease-in flex justify-center items-center "
            >
              <div
                className={`uppercase text-[40px]
                } leading-snug tracking-normal font-extrabold text-center text-white`}
              >
                {project.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridGallery;
