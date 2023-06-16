// Projects.tsx

import React from 'react';
import PhotoGalleryComponent from './ImageGallery';
import CustomImageGallery from './ImageGallery';

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className='h-screen w-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl'>
        Gallery
      </h3>

      <div className='relative w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-12'>
        <div className='flex flex-row w-screen mt-16'>
         <CustomImageGallery />
        </div>
      </div>

      <div className='w-screen absolute top-[30%] bg-[#0edaff]/10 left-0 h-[500px] -skew-y-12'>
        
      </div>

    </div>



  );
}
