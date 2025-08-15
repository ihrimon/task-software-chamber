'use client';

import React from 'react';
import { processSteps } from '@/constants';
import Image from 'next/image';

const DevelopmentProcess = () => {
  return (
    <div className='w-full mt-40'>
      {/* Desktop & Large Screens */}
      <div className='hidden md:flex relative w-full max-w-4xl h-[50rem] mx-auto items-center justify-center'>
        {/* Dashed Half-Circle Border */}
        <div className='absolute w-[50rem] h-[50rem] border-[3px] border-dashed border-slate-500 rounded-full clip-half' />

        {/* Center Globe */}
        <div className='relative'>
          <Image
            src={'/assets/images/globe.png'}
            alt='globe'
            width={500}
            height={500}
          />
          <div className='absolute inset-0 bg-primary/10 rounded-full pointer-events-none' />
        </div>

        {/* Steps around circle */}
        <div className='absolute w-full h-full'>
          {processSteps.map((step) => (
            <div
              key={step.step}
              className={`absolute flex flex-col items-center justify-center ${step.position}`}
            >
              <div
                className='relative size-14 flex items-center justify-center bg-slate-800 rounded-full mb-2 transition-transform duration-300 hover:scale-110 border-2 border-gray-400'
                style={{
                  background:
                    'linear-gradient(45deg, rgba(255,255,255,0.5) 10%, rgba(255,255,255,0.1) 100%)',
                }}
              >
                <span className='text-xl font-bold text-white'>
                  {step.step}
                </span>
              </div>
              <span className='font-medium text-3xl text-transparent bg-gradient-to-l from-primary to-[#ffffffb5] bg-clip-text'>
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Simple vertical list */}
      <div className='flex flex-col gap-6 md:hidden'>
        {processSteps.map((step) => (
          <div
            key={step.step}
            className='flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-gray-600'
          >
            <div
              className='flex items-center justify-center size-12 rounded-full border-2 border-gray-400 bg-slate-800 text-white font-bold'
              style={{
                background:
                  'linear-gradient(45deg, rgba(255,255,255,0.5) 10%, rgba(255,255,255,0.1) 100%)',
              }}
            >
              {step.step}
            </div>
            <span className='text-lg font-medium text-transparent bg-gradient-to-l from-primary to-[#ffffffb5] bg-clip-text'>
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentProcess;
