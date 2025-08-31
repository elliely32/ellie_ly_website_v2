import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const GridGallery = ({ projects = [] }) => {
  return (
    <div className="flex gap-15 flex-wrap justify-evenly">
      {projects.map((project, idx) => {
        return (
          <Dialog key={`code-project-${idx}`}>
            <DialogTrigger asChild>
              <div className="hover:cursor-pointer size-100 relative ">
                <img src="/assets/test-thumb.png" alt="test-thumb" />
                <div
                  className="size-100 absolute bg-secondary top-0 p-5 opacity-50 2xl:opacity-0 hover:opacity-75
            duration-200 ease-in flex justify-center items-center "
                >
                  <div
                    className={`uppercase text-[40px]
                } leading-snug tracking-normal font-extrabold text-center text-white`}
                  >
                    {project.title}
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="mb-8 flex h-[calc(100vh-10rem)] min-w-[calc(100vw-10rem)] flex-col justify-between bg-secondary gap-0 p-0">
              <ScrollArea className="flex max-h-full flex-col overflow-hidden">
                <DialogHeader className="contents space-y-0 text-left">
                  <DialogTitle className="px-6 h1 pt-6 pb-2 text-center">
                    {project.title}{' '}
                    <span className="h4 italic opacity-80">{`(${project.year})`}</span>
                  </DialogTitle>
                  <DialogDescription asChild>
                    <div className="p-6">
                      <div className="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold">
                        <div className="space-y-1 flex flex-col gap-10 md:flex-row">
                          <img
                            className="space-y-1 md:w-[50%]"
                            src="/assets/test-thumb.png"
                            alt="test-thumb"
                          />
                          <div>
                            <p className="body">
                              Comes with a standard 1-year warranty covering
                              defects in materials and workmanship. Extended
                              warranty plans are available.Comes with a standard
                              1-year warranty covering defects in materials and
                              workmanship. Extended warranty plans are
                              available.Comes with a standard 1-year warranty
                              covering defects in materials and workmanship.
                              Extended warranty plans are available.Comes with a
                              standard 1-year warranty covering defects in
                              materials and workmanship. Extended warranty plans
                              are available.
                            </p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p>
                            <strong>Key Features:</strong>
                          </p>
                          <ul>
                            <li>
                              Ultra-fast processing speed for intensive tasks
                            </li>
                            <li>
                              Long battery life, perfect for on-the-go
                              professionals
                            </li>
                            <li>Sleek and portable design</li>
                            <li>Advanced cooling system</li>
                            <li>Excellent build quality for durability</li>
                          </ul>
                        </div>
                        <div className="space-y-1">
                          <p>
                            <strong>Customer Reviews:</strong>
                          </p>
                          <p>
                            &rdquo;Absolutely fantastic device! The performance
                            is exceptional, and it handles all of my design
                            software without any lag.&rdquo; - John D.
                          </p>
                          <p>
                            &rdquo;Best purchase I&apos;ve made in years. The
                            display quality is stunning, and the battery lasts
                            all day.&rdquo; - Sarah L.
                          </p>
                          <p>
                            &rdquo;The SuperTech 2000 is a game-changer in the
                            tech industry. Worth every penny!&rdquo; - Emma W.
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p>
                            <strong>Return Policy:</strong>
                          </p>
                          <p>
                            If you&apos;re not satisfied with your purchase, we
                            offer a 30-day return policy. Return the product
                            within 30 days of purchase for a full refund.
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p>
                            <strong>Warranty:</strong>
                          </p>
                          <p>
                            Comes with a standard 1-year warranty covering
                            defects in materials and workmanship. Extended
                            warranty plans are available.Comes with a standard
                            1-year warranty covering defects in materials and
                            workmanship. Extended warranty plans are
                            available.Comes with a standard 1-year warranty
                            covering defects in materials and workmanship.
                            Extended warranty plans are available.Comes with a
                            standard 1-year warranty covering defects in
                            materials and workmanship. Extended warranty plans
                            are available.Comes with a standard 1-year warranty
                            covering defects in materials and workmanship.
                            Extended warranty plans are available.Comes with a
                            standard 1-year warranty covering defects in
                            materials and workmanship. Extended warranty plans
                            are available.
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="px-6 pb-6 sm:justify-end">
                  <DialogClose asChild>Back</DialogClose>
                </DialogFooter>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
};

export default GridGallery;
