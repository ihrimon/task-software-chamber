import { ArrowUpRight, MoveRight } from 'lucide-react';
import Image from 'next/image';

const Services = () => {
  return (
    <section className='bg-white text-heading pt-20 px-4 lg:px-8'>
      <div className='max-w-7xl mx-auto w-full'>
        {/* Heading */}
        <div className='flex justify-between items-center mb-12 lg:mb-20 gap-6'>
          <h1 className='flex items-center gap-3 text-3xl sm:text-5xl lg:text-6xl font-medium'>
            Services
            <span>
              <Image
                src='/assets/icons/multi-star.svg'
                alt='multi star'
                width={40}
                height={40}
                className='sm:w-[50px] sm:h-[50px]'
              />
            </span>
          </h1>
          <button className='flex items-center gap-3 font-medium group transition-colors duration-300 hover:text-primary'>
            All Services
            <span
              className='bg-gray-100 size-10 grid place-items-center rounded-full 
               transition-all duration-300 group-hover:bg-primary group-hover:text-white'
            >
              <MoveRight className='transition-transform duration-300' />
            </span>
          </button>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, idx) => (
            <div
              key={idx}
              className='p-6 rounded-xl bg-gray-100 transition-colors duration-300 hover:bg-primary hover:text-white group cursor-pointer'
            >
              <h3 className='text-3xl font-semibold mb-6'>{service.title}</h3>
              <small className='text-[16px]'>{service.description}</small>
              <button className='bg-white text-heading p-1 rounded-full size-12 grid place-items-center mt-8 shadow-lg group-hover:bg-white'>
                <ArrowUpRight className='group-hover:text-primary' />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

/* Service data */
const services = [
  {
    title: 'Web & Mobile App Development',
    description: (
      <>
        Software Chamber specializes in creating <br /> powerful, scalable, and
        secure e-
      </>
    ),
  },
  {
    title: 'Application Software Services',
    description: (
      <>
        Software Chamber specializes in creating <br /> powerful, scalable, and
        secure e-
      </>
    ),
  },
  {
    title: 'Software Coding & Optimization',
    description: (
      <>
        Software Chamber specializes in creating <br /> powerful, scalable, and
        secure e-
      </>
    ),
  },
];
