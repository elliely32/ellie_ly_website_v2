'use client';
import { motion } from 'framer-motion';
import projectData from '@/components/projectData.json';

const Code = () => {
  const codeProject = [...projectData.projects].filter((project) =>
    project.tag.includes('code')
  );
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className="flex flex-col items-center 2xl:items-start p-10">
        <h1 className="h1 uppercase"> Code Based Projects</h1>
        <h2 className="h3">
          Innovative coding projects that allow users to experience new tech.
        </h2>
        <div className="flex gap-10 flex-wrap">
          {codeProject.map((project, idx) => {
            return (
              <div className="size-64  bg-accent" key={`code-project-${idx}`}>
                {project.title}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Code;
