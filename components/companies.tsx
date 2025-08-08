'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Droplet, Users, Rss, Layers } from 'lucide-react';

// Define the data for the company logos to make the component dynamic.
const companies = [
  { name: 'Spotify', icon: <Rss className='h-4 w-4 text-[#1DB954]' /> },
  { name: 'TalentQl', icon: <Users className='h-4 w-4 text-[#8b5cf6]' /> },
  { name: 'DropBox', icon: <Droplet className='h-4 w-4 text-[#0060FE]' /> },
  { name: 'Fliqpqy', icon: <Layers className='h-4 w-4 text-[#FF482A]' /> },
  { name: 'Slack', icon: <Zap className='h-4 w-4 text-[#E01E5A]' /> },
];

export default function Companies() {
  return (
    <div className='bg-slate-950 text-white min-h-screen py-20 px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center font-sans'>
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

      {/* Spacer */}
      <div className='my-24' />

      {/* Bottom Section */}
      <div className='w-full max-w-4xl bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-slate-800 text-center'>
        {/* Glowy Badge */}
        <div className='relative inline-block mb-8'>
          <span className='relative z-10 text-sm font-medium text-green-400 bg-slate-800 px-4 py-2 rounded-full border border-green-500'>
            ★ Smarter idea, instant solutions
          </span>
          {/* Subtle glowing effect */}
          <div className='absolute inset-0 bg-green-500 opacity-20 rounded-full blur-xl animate-pulse' />
        </div>

        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8'>
          Uncover the Design and Development Projects That Set Us Apart
        </h2>

        {/* Contact Button */}
        <Button
          variant='outline'
          className='relative group bg-slate-800 hover:bg-slate-700 text-white border-slate-700 rounded-full h-14 px-8 text-lg overflow-hidden'
        >
          <span className='relative z-10 pr-2'>Contact Us</span>
          <div className='relative z-10 h-10 w-10 ml-2 rounded-full flex items-center justify-center bg-green-500 text-slate-950 transition-all duration-300 group-hover:scale-110'>
            <ArrowRight className='h-5 w-5' />
          </div>
          {/* subtle glowing effect on the circle */}
          <div className='absolute inset-0 bg-white opacity-10 rounded-full blur-2xl animate-pulse' />
        </Button>
      </div>
    </div>
  );
}
