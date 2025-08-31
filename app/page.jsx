'use client';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="h-screen flex items-center"
    >
      <div className="flex flex-col justify-between gap-10 lg:flex-row w-full h-full">
        <div className="w-full xl:w-[550px] h-[80%] text-center lg:text-left bg-secondary p-10 pt-[15%]">
          <p className="h1">Hey, I'm Ellie!</p>
          <p className="h1">Artist, Coder, Storyteller</p>
        </div>
        <img
          className="space-y-1 h-[60%] m-20 md:mt-[25%]"
          src="/assets/home-image-temp.png"
          alt="ellie-drawing"
        />
      </div>
    </motion.section>
  );
};

export default Home;
