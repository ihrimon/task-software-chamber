import Image from 'next/image';
import Navbar from './navbar';
import Badge from './shared/badge';

const Banner = () => {
  return (
    <section
      className='w-full bg-no-repeat bg-top bg-contain'
      style={{
        backgroundImage: 'url("/banner.png")',
        height: '1680px',
      }}
    >
      <div className='lg:w-[1760px] mx-auto px-4 py-10'>
        <Navbar />

        <div className='text-center mt-20 space-y-10 flex flex-col items-center justify-center'>
          <Badge text='Smarter Idea, instant solutions' />

          <h1 className='font-medium text-8xl text-transparent bg-gradient-to-b from-[#00FFE0] to-[#FFFFFF] bg-clip-text flex flex-col items-center justify-center leading-tight'>
            <span>We are your Software</span>
            <span className='flex items-end gap-4'>
              Development
              <Image
                src='/assets/icons/heading.svg'
                alt='heading icon'
                width={190}
                height={90}
                className='inline-block -mb-20'
              />
              Team
            </span>
            <span>in The Cloud</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
