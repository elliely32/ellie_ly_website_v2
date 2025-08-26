import React from 'react';

const GalleryHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center 2xl:items-start ">
      <h1 className="h1 pb-5 2xl:pb-0 uppercase"> {title}</h1>
      <h2 className="h3 pb-10 ">{description}</h2>
    </div>
  );
};

export default GalleryHeader;
