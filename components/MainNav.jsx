import React from 'react';
import Link from 'next/link';
import NavLinks from '@/components/NavLinks';

const Home = () => {
  return (
    <nav className="items-center 2xl:unset flex flex-col justify-center align-center ">
      <div className="hidden 2xl:block pb-35 pt-10 h1 uppercase text-white ">
        <Link
          href={'/'}
          className="flex gap-2 justify-center items-center"
          scroll={false}
        >
          ELLIE
        </Link>
      </div>
      <NavLinks />
      <div className="pt-15 pb-5 text-xs text-center opacity-50">
        © 2025 Ellie Ly, All Rights Reserved.
      </div>
    </nav>
  );
};

export default Home;
