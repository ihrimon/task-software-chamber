// components/DevelopmentProcess.js
'use client'; // This directive is crucial for client-side components.

import React from 'react';
import { Globe } from './globe';

const processSteps = [
  { step: 1, name: 'Code', position: 'bottom-20 left-10' },
  { step: 2, name: 'Build', position: 'bottom-[40%] left-0' },
  { step: 3, name: 'Test', position: 'top-[30%] left-[20%]' },
  { step: 4, name: 'Release', position: 'top-[10%] left-1/2 -translate-x-1/2' },
  { step: 5, name: 'Deploy', position: 'top-[30%] right-[20%]' },
  { step: 6, name: 'Monitor', position: 'bottom-[40%] right-0' },
  { step: 7, name: 'Build', position: 'bottom-20 right-10' },
];

const DevelopmentProcess = () => {
  return (
    <div className='relative w-full max-w-4xl h-[50rem] flex items-center justify-center mt-40'>
      {/* Dashed Half-Circle Border */}
      <div className='absolute w-[50rem] h-[50rem] border-[3px] border-dashed border-slate-500 rounded-full clip-half' />

      {/* Center Globe Component */}
      <div className='relative'>
        <Globe />
        <div className='absolute inset-0 bg-primary/10 rounded-full pointer-events-none' />
      </div>

      {/* Steps */}
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
              <span className='text-xl font-bold text-white'>{step.step}</span>
            </div>
            <span className='font-medium text-3xl text-transparent bg-gradient-to-l from-primary to-[#ffffffb5] bg-clip-text'>
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentProcess;
