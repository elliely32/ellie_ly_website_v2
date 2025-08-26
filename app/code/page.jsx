'use client';
import { motion } from 'framer-motion';

import projectData from '@/components/projectData.json';
import GridGallery from '@/components/GridGallery';
import GalleryHeader from '@/components/GalleryHeader';

const Code = () => {
  const codeProject = [...projectData.projects].filter((project) =>
    project.tag.includes('code')
  );

  const title = 'Coding Projects',
    description =
      'Innovative coding projects that allow users to experience new tech.';
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className="flex flex-col items-center 2xl:items-start p-10 w-full h-full">
        <div className="overflow-auto">
          <GalleryHeader title={title} description={description} />
          <GridGallery projects={codeProject} />
        </div>
      </div>
    </motion.section>
  );
};

export default Code;
