'use client';
import Badge from './shared/badge';
import ContactButton from './shared/contact-btn';
import DevelopmentProcess from './shared/dev-process';
import DevelopmentProcessDiagram from './shared/dev-process';
import { Globe } from './shared/globe';

const processSteps = [
  {
    step: 1,
    name: 'Code',
    position: 'left-[8%] -translate-y-2 -translate-x-1/2',
  },
  {
    step: 2,
    name: 'Build',
    position: 'left-[10%] -translate-y-10 translate-x-1',
  },
  { step: 3, name: 'Test', position: 'left-[25%] top-[10%] -translate-x-1/2' },
  { step: 4, name: 'Release', position: 'left-1/2 top-[-5%] -translate-x-1/2' },
  {
    step: 5,
    name: 'Deploy',
    position: 'right-[25%] top-[10%] translate-x-1/2',
  },
  {
    step: 6,
    name: 'Monitor',
    position: 'right-[10%] top-[30%] translate-x-1/2',
  },
  {
    step: 7,
    name: 'Maintain',
    position: 'right-[25%] top-1/2 translate-x-1/2',
  },
];

export default function WorkProcess() {
  return (
    <div
      className='bg-foreground text-white relative py-24 px-4 flex flex-col justify-center items-center min-h-screen mt-24'
      style={{
        backgroundImage: "url('/assets/images/work-process.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Badge text='Smarter idea, instant solutions' />
      <h1 className='text-4xl md:text-5xl tracking-tight leading-tight text-center font-medium my-10'>
        Our Software <br />{' '}
        <span className='text-gray-400'>Development Process</span>
      </h1>

      <p className='text-center text-muted mb-12'>
        Deliver personalized experiences to your customers with AI-powered
        recommendation <br /> engines and dynamic content generation.
      </p>

      <ContactButton />

      {/* Main Process Section */}
      <div className='relative w-full max-w-4xl h-[40rem] flex items-center justify-center'>
        <div className='absolute w-[50rem] h-[50rem] border-[3px] border-dashed border-slate-500 rounded-full clip-half' />

        <div className='relative'>
          <Globe className='z-10' />
          <div className='absolute inset-0 bg-primary/10 rounded-full pointer-events-none' />
        </div>

        {/* Steps */}
        
      <DevelopmentProcess />
      </div>

      {/* Custom Keyframes */}
      <style jsx global>{`
        .clip-half {
          clip-path: inset(0 0 50% 0 round 50% 50% 0 0);
        }
      `}</style>
    </div>
  );
}
