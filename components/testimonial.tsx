import Image from 'next/image';
import Badge from './shared/badge';

const Testimonial = () => {
  return (
    <div className='bg-black text-gray-100 py-20'>
      <div className='max-w-5xl mx-auto px-4 text-center'>
        <Badge text='Smarter Idea, instant solutions' />
        <h1 className='text-gray-100 text-4xl md:text-6xl font-medium my-10'>
          Don’t just take our word for it. Hear
          what <span className='text-gray-400'>our clients say</span>
        </h1>

        <div className='border border-gray-800 bg-zinc-900 rounded-2xl shadow-lg p-10 text-left'>
          <p className='font-medium text-lg md:text-2xl leading-relaxed'>
            &quot;Sed sit varius neque turpis enim ut metus consectetur. Tortor
            urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh
            condimentum aliquet commodo.&quot;
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
