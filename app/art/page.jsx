'use client';
import { motion } from 'framer-motion';
import projectData from '@/components/projectData.json';
import GridGallery from '@/components/GridGallery';
import GalleryHeader from '@/components/GalleryHeader';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const Art = () => {
  const artProject = [...projectData.projects].filter((project) =>
    project.tag.includes('art')
  );
  const title = 'Art Projects',
    description = 'Art projects. Much wow. Amazing Art. Please Appreciate.';
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <ScrollArea className="w-full h-[100vh]">
        <div className="flex flex-col items-center 2xl:items-start mt-15 mb-30">
          <GalleryHeader title={title} description={description} />
          <GridGallery projects={artProject} />
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </motion.section>
  );
};

export default Art;
