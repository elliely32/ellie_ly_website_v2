'use client';
import { motion } from 'framer-motion';

import GridGallery from '@/components/GridGallery';
import GalleryHeader from '@/components/GalleryHeader';
import projectData from '@/components/projectData.json';

const Story = () => {
  const storyProject = [...projectData.projects].filter((project) =>
    project.tag.includes('story')
  );
  const title = 'Story Projects',
    description = 'Story time! Hear me out about this fascinating tall tale';
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className="flex flex-col items-center 2xl:items-start p-10">
        <GalleryHeader title={title} description={description} />
        <GridGallery projects={storyProject} />
      </div>
    </motion.section>
  );
};

export default Story;
