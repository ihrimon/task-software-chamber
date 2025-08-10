import Image from 'next/image'
import ContactButton from './shared/contact-btn';


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <Image src={'/logo.svg'} alt='logo' width={200} height={200} />
      <div className='flex items-center gap-6 '>
        <ContactButton />
        <button
          className='rounded-full size-14 grid place-items-center border-2 border-gray-400'
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
            className='text-black'
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar