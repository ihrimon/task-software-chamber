'use client';
import Badge from './shared/badge';
import ContactButton from './shared/contact-btn';
import DevelopmentProcess from './shared/dev-process';

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

      {/* Development process */}
      <DevelopmentProcess />

      {/* Custom Keyframes */}
      <style jsx global>{`
        .clip-half {
          clip-path: inset(0 0 50% 0 round 50% 50% 0 0);
        }
      `}</style>
    </div>
  );
}
