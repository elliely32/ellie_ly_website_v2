'use client';
import { motion } from 'framer-motion';

const Art = () => {
  const artProject = [...projectData.projects].filter((project) =>
    project.tag.includes('art')
  );
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      Art
    </motion.section>
  );
};

export default Art;
