import Image from 'next/image';
import Badge from './shared/badge';

const Testimonial = () => {
  return (
    <div className='relative bg-foreground text-gray-100 py-24 overflow-hidden'>
      {/* Radial BG */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background: `
            radial-gradient(600px at top left, rgba(44, 250, 186, 0.1), transparent 100%),
            radial-gradient(600px at bottom right, rgba(44, 250, 186, 0.1), transparent 100%)
          `,
        }}
      />

      <div className='relative max-w-5xl mx-auto px-4 text-center'>
        <Badge text='Smarter Idea, instant solutions' />
        <h1 className='text-gray-100 text-4xl md:text-5xl font-medium mb-20 mt-10 leading-15'>
          Don’t just take our word for it. Hear <br /> what{' '}
          <span className='text-gray-400'>our clients say</span>
        </h1>

        {/* Testimonial card */}
        <div
          className='bg-foreground rounded-2xl p-12 text-left relative'
          style={{
            boxShadow:
              '0 20px 20px rgba(44, 206, 186, 0.05), -8px 10px 30px rgba(44, 206, 186, 0.05), 8px 10px 30px rgba(44, 206, 186, 0.05)',
          }}
        >
          {/* Top border with gradient and thicker middle */}
          <div
            className='absolute top-0 left-0 w-full h-[3px] rounded-t-2xl'
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(44, 206, 186, 0.6) 50%, transparent)',
            }}
          />

          <p className='font-medium text-lg md:text-2xl leading-relaxed'>
            &quot;Sed sit varius neque turpis enim ut metus consectetur. Tortor
            urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh
            condimentum aliquet <br /> commodo.&quot;
          </p>

          <div className='flex flex-col md:flex-row items-center justify-between mt-10 gap-6'>
            <div className='flex items-center gap-3'>
              <Image
                src={'/assets/images/testimonial-1.png'}
                alt='customer image'
                width={50}
                height={50}
                className='rounded-full'
              />
              <div className='flex-col space-y-1'>
                <h3 className='font-semibold'>Alex Larkins</h3>
                <small className='text-gray-400'>Art director at Airbnb</small>
              </div>
            </div>
            <Image
              src={'/assets/images/testimonial-2.png'}
              alt='Mogo logo'
              width={220}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
