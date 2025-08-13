import Image from 'next/image';
import ContactButton from './shared/contact-btn';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 px-4 sm:px-8'>
      {/* Logo */}
      <Image
        src={'/logo.svg'}
        alt='logo'
        width={150}
        height={150}
        className='w-28 sm:w-40'
      />

      {/* Right Side */}
      <div className='flex items-center gap-4 sm:gap-6'>
        {/* Contact button - hidden on mobile */}
        <div className='hidden sm:block'>
          <ContactButton />
        </div>

        {/* Menu button */}
        <button
          className='rounded-full size-12 sm:size-14 grid place-items-center border-2 border-gray-700'
          style={{
            background:
              'linear-gradient(45deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 100%)',
          }}
        >
          <Image
            src={'/assets/icons/menu.svg'}
            alt='menu icon'
            width={22}
            height={22}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
