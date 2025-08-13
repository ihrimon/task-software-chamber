import { ChevronLeft, ChevronRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    id: 'efficiency',
    title: 'Efficiency',
    description: (
      <>
        Software Chamber specializes in <br /> creating powerful, scalable, and{' '}
        <br /> secure e-commerce solutions <br /> tailored to business needs.
      </>
    ),
    icon: '/assets/icons/choose-1.svg',
  },
  {
    id: 'scalability',
    title: 'Scalability',
    description: (
      <>
        Software Chamber specializes in <br /> creating powerful, scalable, and{' '}
        <br /> secure e-commerce solutions <br /> tailored to business needs.
      </>
    ),
    icon: '/assets/icons/choose-2.svg',
  },
  {
    id: 'adaptability',
    title: 'Adaptability',
    description: (
      <>
        Software Chamber specializes in <br /> creating powerful, scalable, and{' '}
        <br /> secure e-commerce solutions <br /> tailored to business needs.
      </>
    ),
    icon: '/assets/icons/choose-3.svg',
  },
  {
    id: 'precision',
    title: 'Precision',
    description: (
      <>
        Software Chamber specializes in <br /> creating powerful, scalable, and{' '}
        <br /> secure e-commerce solutions <br /> tailored to business needs.
      </>
    ),
    icon: '/assets/icons/choose-4.svg',
  },
];

const WhyChooseUs = () => {
  return (
    <section className='bg-white py-24 px-4 text-gray-800 relative'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Why Choose
            <br />
            Softwarechamber
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto mb-10'>
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>
        </div>

        {/* Wrapper for arrows and cards */}
        <div className='relative flex items-center justify-center'>
          {/* Left Arrow */}
          <div className='absolute z-50 left-0 -translate-x-1/2 hidden md:flex'>
            <button className='size-12 rounded-full bg-foreground hover:bg-primary transition-colors grid place-items-center shadow-lg'>
              <ChevronLeft className='size-6 text-white' />
            </button>
          </div>

          {/* Feature Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map(({ id, title, description, icon }, idx) => (
              <div
                key={id}
                className={`
                  bg-gray-100 rounded-2xl p-6 transition-colors duration-300 
                  hover:bg-primary hover:text-white hover:border hover:border-primary 
                  group cursor-pointer transform-gpu
                  ${idx % 2 === 0 ? 'lg:-translate-y-8' : ''}
                `}
                style={{
                  transition: 'background-color 0.3s, border-color 0.3s',
                }} // no scale
              >
                <div className='flex items-center justify-between border-b border-gray-200 group-hover:border-white gap-4 pb-4 mb-4'>
                  <h3 className='text-2xl font-semibold text-gray-800 group-hover:text-white'>
                    {title}
                  </h3>
                  <div className='size-12 bg-primary rounded-full grid place-items-center group-hover:bg-white group-hover:border transition-colors duration-300'>
                    <Image
                      src={icon}
                      alt='icon'
                      height={20}
                      width={20}
                      className='transition-all duration-300 group-hover:invert'
                    />
                  </div>
                </div>
                <p className='text-gray-500 group-hover:text-white leading-relaxed'>
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className='absolute z-50 right-0 translate-x-1/2 hidden md:flex'>
            <button className='size-12 rounded-full bg-foreground hover:bg-primary transition-colors grid place-items-center'>
              <ChevronRight className='size-6 text-white' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
