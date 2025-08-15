/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Badge from './shared/badge';
import { categories } from '@/constants';

// Smooth continuous autoplay plugin
function continuousAutoplay(speed = 0.02) {
  return (slider: any) => {
    let raf: number;
    let mouseOver = false;

    function update() {
      if (!mouseOver) {
        slider.current?.moveToIdx(slider.track.details.abs + speed, true);
      }
      raf = requestAnimationFrame(update);
    }

    slider.on('created', () => {
      raf = requestAnimationFrame(update);
      slider.container.addEventListener('mouseover', () => (mouseOver = true));
      slider.container.addEventListener('mouseout', () => (mouseOver = false));
    });

    slider.on('destroyed', () => cancelAnimationFrame(raf));
  };
}

export default function GallerySlider() {
  const topItems = categories.slice(0, 5);
  const bottomItems = categories.slice(5);

  const [sliderTopRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: 'performance',
      drag: false,
      slides: { perView: 5, spacing: 20 },
      breakpoints: {
        '(max-width: 768px)': {
          slides: { perView: 2.5, spacing: 10 },
        },
        '(max-width: 480px)': {
          slides: { perView: 1.8, spacing: 8 },
        },
      },
    },
    [continuousAutoplay(0.02)] 
  );

  const [sliderBottomRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: 'performance',
      drag: false,
      rtl: true, 
      slides: { perView: 4, spacing: 20 },
      breakpoints: {
        '(max-width: 768px)': {
          slides: { perView: 2.5, spacing: 10 },
        },
        '(max-width: 480px)': {
          slides: { perView: 1.8, spacing: 8 },
        },
      },
    },
    [continuousAutoplay(0.02)]
  );

  return (
    <section className='bg-foreground py-24'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <Badge text='Smarter Idea, instant solutions' />

        {/* Top Row */}
        <div ref={sliderTopRef} className='keen-slider mt-16'>
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
}
