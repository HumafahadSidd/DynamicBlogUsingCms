import React from 'react';
import Image from 'next/image';

export default function Featured() {
  return (
    <div>
      <h1 className='text-5xl mt-8 font-bold text-center'>Featured</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 px-5 py-10'>
        <div className='flex justify-center'>
          <Image src={'/usa.webp'} alt={'logo1'} height={200} width={200} />
        </div>
        <div className='flex justify-center'>
          <Image src={'/nbc.webp'} alt={'logo2'} height={200} width={200} />
        </div>
        <div className='flex justify-center'>
          <Image src={'/time.webp'} alt={'logo3'} height={200} width={200} />
        </div>
        <div className='flex justify-center'>
          <Image src={'/leisure.webp'} alt={'logo4'} height={200} width={200} />
        </div>
        <div className='flex justify-center'>
          <Image src={'/bbc.webp'} alt={'logo5'} height={200} width={200} />
        </div>
      </div>
    </div>
  );
}
