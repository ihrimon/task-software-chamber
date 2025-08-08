import { ArrowRight, ArrowUpRight, MoveRight } from 'lucide-react';
import Image from 'next/image';

const Services = () => {
  return (
    <section className='bg-white text-heading py-[160px]'>
      <div className='lg:max-w-[1600px] mx-auto'>
        <div className='flex justify-between items-center mb-20'>
          <h1 className='flex items-center gap-3 text-6xl font-medium'>
            Services{' '}
            <span>
              <Image
                src={'/assets/icons/multi-star.svg'}
                alt='multi star'
                width={50}
                height={50}
              />
            </span>
          </h1>
          <div className='flex items-center gap-3 font-medium'>
            All Services
            <span className='bg-gray-200 size-10 grid place-items-center rounded-full'>
              <MoveRight />
            </span>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {services.map(({ title, description }) => (
            <div key={title} className='p-6 rounded-xl bg-gray-100'>
              <h3 className='text-3xl font-medium'>{title}</h3>
              <small>{description}</small>
              <button className='bg-white p-1 rounded-full size-10 grid place-items-center mt-10 shadow-lg'>
                <ArrowUpRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const services = [
  {
    title: 'Web & Mobile App Devolopment',
    description:
      'Software Chamber specializes in creating <br /> powerful, scalable, and secure e-',
  },
  {
    title: 'Application Software Services',
    description:
      'Software Chamber specializes in creating powerful, scalable, and secure e-     ',
  },
  {
    title: 'Software Coding & Optimuation',
    description:
      'Software Chamber specializes in creating powerful, scalable, and secure e-',
  },
];
