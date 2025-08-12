'use client';

import CTA from './cta';
import Image from 'next/image';

const companies = [
  {
    name: 'Spotify',
    icon: '/assets/icons/company-1.svg',
  },
  { name: 'TalentQl', icon: '/assets/icons/company-2.svg' },
  { name: 'DropBox', icon: '/assets/icons/company-3.svg' },
  { name: 'Fliqpqy', icon: '/assets/icons/company-4.svg' },
  {
    name: 'Slack',
    icon: '/assets/icons/company-5.svg',
  },
];

export default function Companies() {
  return (
    <div className='bg-foreground text-white py-20 px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center'>
        <div className='lg:w-1/2 relative text-center lg:text-left mb-12 lg:mb-0'>
          {/* Radial background */}
          <div
            className='absolute inset-0 -z-10 pointer-events-none flex items-center justify-center'
            style={{
              background: `
        radial-gradient(400px at center, rgba(44, 250, 186, 0.08), transparent 70%)
      `,
            }}
          />

          <h1 className='text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight relative z-10'>
            Our Stack Powers of the{' '}
            <span className='text-gray-400'>World&apos;s</span> Most{' '}
            <span className='text-gray-400'>Beloved Companies</span>
          </h1>
        </div>

        <div className='lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8'>
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`
    relative p-4 rounded-full bg-gradient-to-b from-primary to-foreground/20
    transition-transform duration-300 hover:scale-105
    ${index === 0 ? 'translate-x-20' : ''}
    ${index === companies.length - 1 ? 'translate-x-24' : ''}
  `}
            >
              <div className='flex items-center space-x-4'>
                <div className='size-12 flex items-center justify-center bg-white p-2 rounded-full'>
                  <Image
                    src={company.icon}
                    alt={company.name}
                    width={30}
                    height={30}
                  />
                </div>
                <span className='text-2xl font-semibold'>{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
}
