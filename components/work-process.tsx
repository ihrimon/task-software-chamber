'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Define the steps for the development process
const processSteps = [
  { step: 1, name: 'Code', position: 'left-1/4 top-1/2 -translate-x-1/2' },
  { step: 2, name: 'Build', position: 'left-[10%] top-1/4 -translate-x-1/2' },
  {
    step: 3,
    name: 'Test',
    position: 'left-1/4 top-0 -translate-x-1/2 -translate-y-1/2',
  },
  {
    step: 4,
    name: 'Release',
    position: 'left-1/2 top-[-10%] -translate-x-1/2 -translate-y-1/2',
  },
  {
    step: 5,
    name: 'Deploy',
    position: 'right-1/4 top-0 translate-x-1/2 -translate-y-1/2',
  },
  { step: 6, name: 'Monitor', position: 'right-[10%] top-1/4 translate-x-1/2' },
  { step: 7, name: 'Build', position: 'right-1/4 top-1/2 translate-x-1/2' },
];

export default function WorkProcess() {
  return (
    <div className='bg-slate-950 text-white min-h-screen py-20 px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center font-sans overflow-hidden'>
      {/* Glowy Badge */}
      <div className='relative inline-block mb-8'>
        <span className='relative z-10 text-sm font-medium text-green-400 bg-slate-800 px-4 py-2 rounded-full border border-green-500'>
          ★ Smarter idea, instant solutions
        </span>
        {/* Subtle glowing effect */}
        <div className='absolute inset-0 bg-green-500 opacity-20 rounded-full blur-xl animate-pulse' />
      </div>

      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-center mb-4'>
        Our Software <br /> Development Process
      </h1>

      <p className='max-w-xl text-center text-slate-400 mb-12'>
        Deliver personalized experiences to your customers with AI-powered
        recommendation engines and dynamic content generation.
      </p>

      {/* Main Process Section */}
      <div className='relative w-full max-w-4xl h-[40rem] flex items-center justify-center'>
        {/* The globe image/placeholder */}
        <div className='relative w-96 h-96 rounded-full bg-slate-900 shadow-2xl border border-slate-800 animate-spin-slow'>
          <div className='absolute inset-0 rounded-full bg-radial-gradient-to-transparent from-green-500/30 to-transparent blur-3xl opacity-50' />
        </div>

        {/* The arc path for the process */}
        <div className='absolute w-full h-full'>
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`absolute flex flex-col items-center justify-center w-24 h-24 ${step.position}`}
            >
              <div className='relative w-12 h-12 flex items-center justify-center bg-slate-800 rounded-full border-2 border-slate-700 mb-2 transition-transform duration-300 hover:scale-110'>
                <span className='text-xl font-bold text-green-400'>
                  {step.step}
                </span>
              </div>
              <span className='text-lg font-medium text-center'>
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Button at the bottom */}
      <Button
        variant='outline'
        className='relative group bg-slate-800 hover:bg-slate-700 text-white border-slate-700 rounded-full h-14 px-8 text-lg mt-12 overflow-hidden'
      >
        <span className='relative z-10 pr-2'>Contact Us</span>
        <div className='relative z-10 h-10 w-10 ml-2 rounded-full flex items-center justify-center bg-green-500 text-slate-950 transition-all duration-300 group-hover:scale-110'>
          <ArrowRight className='h-5 w-5' />
        </div>
        {/* subtle glowing effect on the circle */}
        <div className='absolute inset-0 bg-white opacity-10 rounded-full blur-2xl animate-pulse' />
      </Button>

      {/* Tailwind keyframes for the globe spin */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
