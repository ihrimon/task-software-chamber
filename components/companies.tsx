'use client';

import { Zap, Droplet, Users, Rss, Layers } from 'lucide-react';

import CTA from './cta';

const companies = [
  { name: 'Spotify', icon: <Rss className='h-4 w-4 text-[#1DB954]' /> },
  { name: 'TalentQl', icon: <Users className='h-4 w-4 text-[#8b5cf6]' /> },
  { name: 'DropBox', icon: <Droplet className='h-4 w-4 text-[#0060FE]' /> },
  { name: 'Fliqpqy', icon: <Layers className='h-4 w-4 text-[#FF482A]' /> },
  { name: 'Slack', icon: <Zap className='h-4 w-4 text-[#E01E5A]' /> },
];

export default function Companies() {
  return (
    <div className='bg-foreground text-white py-20 px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center'>
      {/* Top Section */}
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-16'>
        <div className='lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight'>
            Our Stack Powers of the World&apos;s Most Beloved Companies
          </h1>
        </div>

        <div className='lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8'>
          {companies.map((company, index) => (
            <div
              key={index}
              className='relative p-6 bg-slate-900 rounded-2xl shadow-xl border border-slate-800 transition-all duration-300 hover:scale-105'
            >
              <div className='flex items-center space-x-4'>
                <div className='h-10 w-10 flex items-center justify-center bg-slate-800 rounded-full'>
                  {company.icon}
                </div>
                <span className='text-lg font-semibold'>{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTA />    
    </div>
  );
}
