import Image from 'next/image';

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div
      className='w-[330px] h-[50px] flex items-center justify-center mx-auto gap-2 px-4 rounded-full border border-[#2CCEBA]'
      style={{
        background:
          'radial-gradient(circle at center, #000000, rgba(44, 206, 186, 0.5))',
      }}
    >
      <Image src='/assets/icons/star.svg' alt='icon' width={24} height={24} />
      <span className='text-white text-[18px] font-light'>{text}</span>
    </div>
  );
};

export default Badge;
