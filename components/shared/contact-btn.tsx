import Image from 'next/image';

const ContactButton = () => {
  return (
    <button
      className='flex items-center justify-between gap-4 rounded-full border-2 border-gray-400 px-3 py-2'
      style={{
        background:
          'linear-gradient(45deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 100%)',
      }}
    >
      <span className='text-white font-medium text-xl'>Contact Us</span>
      <div className='size-10 rounded-full bg-white grid place-items-center'>
        <Image
          src='/assets/icons/contact.svg'
          alt='contact icon'
          width={24}
          height={24}
        />
      </div>
    </button>
  );
};

export default ContactButton;
