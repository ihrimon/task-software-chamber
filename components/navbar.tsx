import { CircleArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <Image src={'/logo.svg'} alt='logo' width={200} height={200} />
      <div className='flex items-center gap-2'>
        <button className='flex items-center gap-2 bg-gray-500 rounded-full px-4 py-2 border-2'>
          Contact Us <CircleArrowOutUpRight />
        </button>
        <button className='rounded-full w-10 h-10 bg-gray-800 grid place-items-center'>
          <Image
            src={'/assets/icons/menu.svg'}
            alt='menu icon'
            width={16}
            height={16}
            className='text-black'
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar