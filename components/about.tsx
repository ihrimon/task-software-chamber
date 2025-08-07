import { Users, TrendingUp, Calendar, MessageSquare } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section className='bg-white flex items-center py-30'>
      <div className='pt-[160px] lg:max-w-8xl mx-auto'>
        <h1 className='font-medium text-heading text-7xl lg:w-[1320px] text-center mb-20'>
          At Software Chamber, <span className='text-muted'>we specialize</span>{' '}
          in turning complex challenges into elegant{' '}
          <span className='text-muted'>digital solutions</span>
        </h1>
        <div className='flex items-center gap-10'>
          <div className='space-y-12'>
            {stats.map(({ number, label }) => (
              <div key={label}>
                <h1 className='text-6xl font-medium text-heading'>{number}</h1>
                <p className='text-muted text-3xl'>{label}</p>
              </div>
            ))}
          </div>
          <Image
            src={'/assets/images/about.png'}
            alt='about'
            width={480}
            height={450}
          />
          <div className='space-y-5'>
            {features.map((item, index) => (
              <div key={index} className='text-[#36394A]'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='bg-primary size-18 rounded-full grid place-items-center text-white'>
                    <span className='bg-white text-heading size-8 grid place-items-center rounded-full font-semibold text-[#436255]'>
                      {index + 1}
                    </span>
                  </div>
                  <div className='w-[400px]'>
                    <h3 className='font-semibold mb-2 text-3xl'>
                      {item.title}
                    </h3>
                    <p className='text-gray-500'>{item.description}</p>
                  </div>
                </div>

                {/* border */}
                {index !== features.length - 1 && (
                  <div className='border-b border-gray-100'></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const stats = [
  {
    number: '20+',
    label: 'Tech Partners',
  },
  {
    number: '150+',
    label: 'Project Completed',
  },
  {
    number: '1K+',
    label: 'Satisfied Customers',
  },
];

const features = [
  {
    icon: <Users className='w-6 h-6' />,
    title: 'Your Team in the cloud',
    description:
      'We hire Best and brightest Talents to build world class technology',
  },
  {
    icon: <TrendingUp className='w-6 h-6' />,
    title: 'Grow more with less',
    description: 'We have a competitive pricing structure',
  },
  {
    icon: <Calendar className='w-6 h-6' />,
    title: 'Weekly sprint and reviews',
    description:
      "Our fast review and feedback loop is designed to keep in you in the driver's seat",
  },
  {
    icon: <MessageSquare className='w-6 h-6' />,
    title: 'Communication First',
    description: 'We use modern tools and services to collaborate',
  },
];
