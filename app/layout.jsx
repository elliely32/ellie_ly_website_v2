import { Roboto } from 'next/font/google';
import './globals.css';

//components
import MainNav from '@/components/MainNav';
import PageTransition from '@/components/PageTransition';
import RectangleTransition from '@/components/RectangleTransition';
import MobileNav from '@/components/MobileNav';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata = {
  title: "Ellie Ly's Portfolio Site",
  description:
    'Portfolio Website showcasing the various works created by Ellie Ly',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased overflow-hidden relative`}
      >
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            <div className="hidden 2xl:flex items-center px-[50px] w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full 2xl:py-2 2xl:px-5 mx-auto">
              <div className="2xl:hidden">
                <MobileNav />
              </div>
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
