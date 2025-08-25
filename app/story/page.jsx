'use client';
import { motion } from 'framer-motion';

const Story = () => {
  const storyProject = [...projectData.projects].filter((project) =>
    project.tag.includes('story')
  );
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      Story
    </motion.section>
  );
};

export default Story;
