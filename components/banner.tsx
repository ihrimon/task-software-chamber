import Image from 'next/image';
import Navbar from './navbar';
import Badge from './shared/badge';
import ContactButton from './shared/contact-btn';
import BannerTheme from './banner-theme';

const Banner = () => {
  return (
    <section
      className='w-full bg-no-repeat bg-top bg-cover md:bg-contain'
      style={{
        backgroundImage: 'url("/banner.png")',
      }}
    >
      <div className='max-w-[1760px] mx-auto px-4 py-10 min-h-screen flex flex-col'>
        <Navbar />

        <div className='flex-grow text-center mt-10 md:mt-20 space-y-8 flex flex-col items-center justify-center'>
          <Badge text='Smarter Idea, instant solutions' />

          <h1 className='font-medium text-4xl sm:text-5xl lg:text-8xl text-transparent bg-gradient-to-b from-primary to-white bg-clip-text flex flex-col items-center justify-center leading-tight'>
            <span>We are your Software</span>
            <span className='flex flex-wrap justify-center items-end gap-2 sm:gap-4'>
              Development {''}
              <Image
                src='/assets/icons/heading.svg'
                alt='heading icon'
                width={190} 
                height={90}
                className=' hidden md:block -mb-20'
              />
              Team
            </span>
            <span>in The Cloud</span>
          </h1>

          <ContactButton />
        </div>

        {/* Show banner theme only on large screens */}
        <div className='hidden lg:block'>
          <BannerTheme />
        </div>
      </div>
    </section>
  );
};

export default Banner;
