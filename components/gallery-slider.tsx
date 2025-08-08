/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Badge from './shared/badge';

const categories = [
  { title: 'Tech', image: '/assets/images/service-1.png' },
  { title: 'Health Care', image: '/assets/images/service-2.png' },
  { title: 'Developers', image: '/assets/images/service-3.png' },
  { title: 'Software', image: '/assets/images/service-4.png' },
  { title: 'Entertainment', image: '/assets/images/service-5.png' },
  { title: 'Hospitality', image: '/assets/images/service-6.png' },
  { title: 'Manufacturing', image: '/assets/images/service-7.png' },
  { title: 'Energy', image: '/assets/images/service-8.png' },
  { title: 'Auto Motive', image: '/assets/images/service-9.png' },
];

// Autoplay helper
function autoplayPlugin(direction = 1, delay = 2000) {
  return (slider: any) => {
    let timeout: any;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        direction === 1 ? slider.next() : slider.prev();
      }, delay);
    }

    slider.on('created', () => {
      slider.container.addEventListener('mouseover', () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener('mouseout', () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on('dragStarted', clearNextTimeout);
    slider.on('animationEnded', nextTimeout);
    slider.on('updated', nextTimeout);
  };
}

const GallerySlider = () => {
  const topItems = categories.slice(0, 5);
  const bottomItems = categories.slice(5);

  const [sliderTopRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: 'performance',
      slides: { perView: 5, spacing: 20 },
    },
    [autoplayPlugin(-1, 200)] // Right-to-left
  );

  const [sliderBottomRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: 'performance',
      slides: { perView: 4, spacing: 20 },
    },
    [autoplayPlugin(1, 200)] // Left-to-right
  );

  return (
    <section className='bg-black py-16'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <Badge text='Smarter Idea, instant solutions' />

        {/* Top Row */}
        <div ref={sliderTopRef} className='keen-slider mt-10'>
          {topItems.map((cat, idx) => (
            <div
              key={idx}
              className='keen-slider__slide flex items-center gap-3'
            >
              <div className='w-28 h-14 relative rounded-full overflow-hidden'>
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className='object-cover'
                />
              </div>
              <span className='text-white text-sm'>{cat.title}</span>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div ref={sliderBottomRef} className='keen-slider mt-8'>
          {bottomItems.map((cat, idx) => (
            <div
              key={idx}
              className='keen-slider__slide flex items-center gap-3'
            >
              <div className='w-28 h-14 relative rounded-full overflow-hidden'>
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className='object-cover'
                />
              </div>
              <span className='text-white text-sm'>{cat.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
