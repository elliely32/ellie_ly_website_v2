'use client';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className="flex p-10 gap-15">
        <img
          src="/assets/about-photo.jpg"
          alt={'Headshot of Ellie Ly'}
          className="h-[auto] w-[500px] drop-shadow-lg-color-accent"
        />
        <div className="w-[50%]">
          <h1 className="h1 uppercase">A bit About Me</h1>
          <p className="">
            I'm a NYC based software engineer, artist and storyteller. My dream
            is to create a path for myself where these various facets of my life
            interesect and culminate into something awesome.
            <br />
            <br />
            Art and Technology have always been the main driving forces of my
            life. The outlet of creativity and innovation allowed me to grow and
            express myself in unique and interesting ways. I enjoyed studying
            each field, but I often wondered about the potential and
            possibilities in combining the two.
            <br />
            <br />
            In addition to Art and Tech, I strongly believe that narrative is
            one of the most powerful tools you can use in order to connect with
            your audience and share your message with them. Everything has a
            story behind it, how it's came to be, its purpose in life and the
            journey to come. There's so much to learn from the world and I want
            to be a part of telling those stories.
            <br />
            <br />
            Whenever I'm not creating, I'm usually indulging in other people's
            work. Whether it's a book, video game, art work, tech, songs, etc. I
            believe that everything has a story and there's so much to learn
            from those narratives.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
