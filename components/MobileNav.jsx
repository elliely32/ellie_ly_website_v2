'use client';
import Link from 'next/link';
import { useState } from 'react';
import MainNav from '@/components/MainNav';

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div
        className={`flex justify-between items-center px-5 2xl:hidden py-5 z-10 ${
          openMenu && 'bg-secondary'
        }`}
      >
        <Link
          href="/"
          onClick={() => {
            setOpenMenu(false);
          }}
          className="h1 uppercase"
        >
          Ellie
        </Link>
        <div
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          {openMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
      {openMenu && (
        <div className="bg-secondary h-screen">
          <MainNav />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
