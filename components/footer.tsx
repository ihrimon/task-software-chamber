import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Tiktok', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Linkedin', href: '#' },
    { name: 'Youtube', href: '#' },
  ];

  return (
    <footer className='bg-gradient-to-br from-black via-[#0b0f10] to-[#051b16] text-white py-12 px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Left Section */}
        <div className='flex flex-col justify-between'>
          <div>
            <h2 className='text-5xl font-bold mb-6'>LET’S TALK</h2>
            <p className='text-gray-400 max-w-md mb-8'>
              A new era of energy, elegance, and elite competition begins here.
              Where passion meets performance on the court like never before.
            </p>

            <div>
              <h3 className='text-sm font-semibold tracking-wide mb-4 uppercase text-gray-300'>
                Social media
              </h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className='text-gray-300 hover:text-white transition flex items-center gap-1'
                  >
                    {link.name}
                    <span aria-hidden='true'>↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col sm:flex-row lg:justify-end gap-8'>
          <div className='space-y-6'>
            <div>
              <h4 className='text-sm font-semibold uppercase mb-1'>Address</h4>
              <p className='text-gray-400 text-sm'>
                1901 Thornridge Cir,
                <br /> Shiloh, Hawaii 81063
              </p>
            </div>

            <div>
              <h4 className='text-sm font-semibold uppercase mb-1'>Phone</h4>
              <p className='text-gray-400 text-sm'>[+1] 872-298-3989</p>
            </div>

            <div>
              <h4 className='text-sm font-semibold uppercase mb-1'>Email</h4>
              <p className='text-gray-400 text-sm'>hello@tranzit.com</p>
            </div>
          </div>

          <div className='flex-shrink-0'>
            <Image
              src='/assets/images/footer.png'
              alt='Footer'
              width={200}
              height={200}
              className='rounded-xl object-cover'
            />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className='border-dashed border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-500 w-7xl mx-auto'>
        <p>2024 Software Chamber All Right Reserved</p>
        <div className='flex gap-6 mt-4 sm:mt-0'>
          <Link href='#' className='hover:text-white'>
            Privacy Policy
          </Link>
          <Link href='#' className='hover:text-white'>
            Terms & Conditions
          </Link>
        </div>
      </div>

    </footer>
  );
}
