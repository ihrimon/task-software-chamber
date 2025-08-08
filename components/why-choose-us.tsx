import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    id: 'efficiency',
    title: 'Efficiency',
    description:
      'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.',
    icon: '/assets/icons/choose-1.svg',
  },
  {
    id: 'scalability',
    title: 'Scalability',
    description:
      'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.',
    icon: '/assets/icons/choose-2.svg',
  },
  {
    id: 'adaptability',
    title: 'Adaptability',
    description:
      'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.',
    icon: '/assets/icons/choose-3.svg',
  },
  {
    id: 'precision',
    title: 'Precision',
    description:
      'Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.',
    icon: '/assets/icons/choose-4.svg',
  },
];

const WhyChooseUs = () => {
  return (
    <section className='bg-white py-16 px-4 text-heading relative'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-hero-text mb-6'>
            Why Choose
            <br />
            Softwarechamber
          </h2>
          <p className='text-lg text-subtitle-text max-w-2xl mx-auto mb-8'>
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>
          <button
            className='px-5 py-1 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center justify-between gap-2 text-white mx-auto'
            style={{
              background: 'linear-gradient(90deg, #16AD71, #2CCEBA)',
            }}
          >
            Let&apos;s Discuss
            <span className='bg-white size-10 rounded-full grid place-items-center'>
              <ArrowRight className='h-4 w-4 text-heading' />
            </span>
          </button>
        </div>

        {/* Wrapper for arrows and cards */}
        <div className='relative flex items-center'>
          {/* Left Arrow */}
          <div className='absolute -left-6 lg:-left-16 z-10'>
            <button className='w-12 h-12 rounded-full bg-background border-2 border-border hover:bg-muted transition-colors grid place-items-center'>
              <ChevronLeft className='h-5 w-5 text-white' />
            </button>
          </div>

          {/* Feature Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1'>
            {features.map(({ id, title, description, icon }) => (
              <div
                key={id}
                className='bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
              >
                <div className='flex items-center justify-between border-b border-gray-200 gap-4 pb-3'>
                  <h3 className='text-2xl font-semibold text-hero-text'>
                    {title}
                  </h3>
                  <div className='bg-primary rounded-full p-3'>
                    <Image src={icon} alt='icon' height={20} width={20} />
                  </div>
                </div>
                <p className='text-subtitle-text text-sm leading-relaxed mt-5'>
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <div className='absolute -right-6 lg:-right-16 z-10'>
            <button className='w-12 h-12 rounded-full bg-background border-2 border-border hover:bg-muted transition-colors grid place-items-center'>
              <ChevronRight className='h-5 w-5 text-white' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
