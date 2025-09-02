'use client';
import { motion } from 'framer-motion';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <ScrollArea className="w-full h-[100vh] overflow-hidden">
        <div className="flex h-[100%] items-start 2xl:items-center flex-col lg:flex-row p-10 gap-15 mb-30 2xl:mb-0">
          <img
            src="/assets/about-photo.jpg"
            alt="Headshot of Ellie Ly"
            className=" w-100% lg:w-150"
          />
          <div className="lg:w-150 text-justify">
            <h1 className="h1 uppercase text-center lg:text-left pb-10">
              A bit About Me
            </h1>
            <p>
              I'm a NYC based software engineer, artist and storyteller. It's a
              lot of different hats but I've always been the jack-of-all-trades
              type.
              <br />
              <br />
              Art and Technology have always been a part of my life. The outlet
              of creativity and innovation allowed me to grow and express myself
              in unique and interesting ways.
              <br />
              <br />
              In addition to Art and Tech, I strongly believe that narrative is
              one of the most powerful tools you can use in order to connect
              with your audience and share your message with them. Everything
              has a story behind it, how it's came to be, its purpose in life
              and the journey to come. There's so much to learn from the world
              and I want to be a part of telling those stories.
              <br />
              <br />
              Whenever I'm not creating, I'm usually indulging in other people's
              work. Whether it's a book, video game, art work, tech, songs, etc.
              I believe that everything has a story and there's so much to learn
              from those narratives.
            </p>
          </div>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </motion.section>
  );
};

export default About;
