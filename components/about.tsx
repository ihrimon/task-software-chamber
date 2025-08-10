import { stats } from '@/constants';
import { ArrowMoveUp, MultiStar } from '@/lib';
import { Users, TrendingUp, Calendar, MessageSquare } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section className='bg-white flex items-center pt-20 px-4 lg:px-8'>
      <div className='max-w-7xl mx-auto w-full'>
        <h1 className='inline-block font-medium text-heading text-4xl md:text-5xl text-center mb-12 sm:mb-16 lg:mb-20 leading-tight'>
          <MultiStar
            width={40}
            height={40}
            className='inline-block mr-2 sm:mr-3 align-middle'
          />
          At Software Chamber, <span className='text-muted'>we specialize</span>{' '}
          in turning complex challenges into elegant{' '}
          <span className='text-muted'>digital solutions</span>
          <ArrowMoveUp
            width={50}
            height={50}
            className='inline-block ml-2 sm:ml-3 align-middle'
          />
        </h1>

        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          <div className='space-y-12'>
            {stats.map(({ number, label }) => (
              <div key={label}>
                <h1 className='text-6xl font-medium text-heading'>{number}</h1>
                <p className='text-muted text-2xl'>{label}</p>
              </div>
            ))}
          </div>
          <Image
            src={'/assets/images/about.png'}
            alt='about'
            width={480}
            height={450}
          />
          <div className='space-y-5'>
            {features.map((item, index) => (
              <div key={index} className='text-[#36394A]'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='bg-primary size-18 rounded-full grid place-items-center text-white'>
                    <span className='bg-white text-heading size-8 grid place-items-center rounded-full font-semibold text-[#436255]'>
                      {index + 1}
                    </span>
                  </div>
                  <div className=''>
                    <h3 className='font-semibold mb-2 text-3xl'>
                      {item.title}
                    </h3>
                    <p className='text-gray-500'>{item.description}</p>
                  </div>
                </div>

                {/* border */}
                {index !== features.length - 1 && (
                  <div className='border-b border-gray-100'></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const features = [
  {
    icon: <Users className='w-6 h-6' />,
    title: 'Your Team in the cloud',
    description: (
      <>
        We hire Best and brightest Talents to <br /> build world class
        technology
      </>
    ),
  },
  {
    icon: <TrendingUp className='w-6 h-6' />,
    title: 'Grow more with less',
    description: (
      <>
        We have a competitive pricing <br /> structure
      </>
    ),
  },
  {
    icon: <Calendar className='w-6 h-6' />,
    title: 'Weekly sprint and reviews',
    description: (
      <>
        Our fast review and feedback loop is <br /> designed to keep in you in
        the driver&apos;s seat
      </>
    ),
  },
  {
    icon: <MessageSquare className='w-6 h-6' />,
    title: 'Communication First',
    description: (
      <>
        We use modern tools and services to <br /> collaborate
      </>
    ),
  },
];
