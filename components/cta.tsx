import React from 'react';
import Badge from './shared/badge';
import Image from 'next/image';
import ContactButton from './shared/contact-btn';

const CTA = () => {
  return (
    <div className='relative mt-24 w-full max-w-6xl mx-auto text-center rounded-3xl p-[2px]'>
      {/* Gradient border */}
      <div className='absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-t from-white/5 via-white/10 to-primary' />

      {/* Inner content */}
      <div
        className='relative rounded-[calc(1.5rem-2px)] p-4 md:p-12 lg:p-16'
        style={{
          backgroundImage: "url('/assets/images/cta.png')",
          backgroundSize: 'cover',
        }}
      >
        <Badge text='Smarter idea, instant solutions' />
        <div className='my-12 flex justify-center'>
          <Image
            src='/assets/icons/cta.svg'
            alt='call to action'
            width={96}
            height={96}
          />
        </div>

        <h2 className='text-4xl md:text-5xl font-medium tracking-tight leading-tight my-10'>
          Uncover the Design and Development <br /> Projects{' '}
          <span className='text-gray-400'>That Set Us Apart</span>
        </h2>

        <div className='flex justify-center mt-6'>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default CTA;
