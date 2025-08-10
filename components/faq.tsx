import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowMoveUp, MultiStar } from '@/lib';
import { MoveRight } from 'lucide-react';

const faqData = [
  {
    id: 'services',
    question: 'What software development services does your company offer?',
    answer:
      'We provide comprehensive software development services including web development, mobile app development, e-commerce solutions, custom software development, UI/UX design, and digital transformation consulting. Our team specializes in modern technologies and frameworks to deliver scalable, secure solutions.',
  },
  {
    id: 'industries',
    question: 'What industries do you specialize in?',
    answer:
      'Ya gratis dong, masa aplikasi chat gitu berbayar sih. Lu kalo nanya yang bener dong. Bayaran gitu kalo aplikasi nih berbayar, masa pas chat lu harus bayar seriap karakter. Kalo lu mau bayar mending pake MIMS aja deh.',
  },
  {
    id: 'competition',
    question: 'What sets your company apart from the competition?',
    answer:
      'Our unique combination of technical expertise, innovative approaches, and client-focused methodology sets us apart. We prioritize transparency, use cutting-edge technologies, and maintain long-term partnerships with our clients to ensure continued success.',
  },
  {
    id: 'confidentiality',
    question: 'Is my project idea and information kept confidential?',
    answer:
      'Absolutely. We take confidentiality very seriously and sign comprehensive NDAs with all our clients. Your project ideas, business information, and proprietary data are completely protected and never shared with third parties.',
  },
];

const FAQSection = () => {
  return (
    <section className='py-16 px-4 bg-background'>
      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-medium text-hero-text mb-6 leading-tight'>
            Comprehensive Answers to the Most
            <br />
            <span className='text-primary'>
              <MultiStar
                width={40}
                height={40}
                className='inline-block align-middle'
              />{' '}
              Common Questions
            </span>{' '}
            <span className='text-muted'>
              About Our <br /> Services{' '}
            </span>
            and How We <span className='text-muted'>Work</span>{' '}
            <ArrowMoveUp
              width={40}
              height={40}
              className='inline-block align-middle'
            />
          </h2>
        </div>

        {/* FAQ Header */}
        <div className='flex items-center justify-between mb-8'>
          <h3 className='text-4xl md:text-6xl font-bold text-hero-text'>FAQ</h3>
          <button className='flex items-center gap-3 font-medium group transition-colors duration-300 hover:text-primary'>
            All FAQ
            <span
              className='bg-primary size-10 grid place-items-center rounded-full 
               transition-all duration-300 group-hover:bg-primary group-hover:text-white'
            >
              <MoveRight className='transition-transform duration-300' />
            </span>
          </button>
        </div>
        <div
          className='border-t border-transparent'
          style={{
            borderImage:
              'repeating-linear-gradient(to right, #e5e7eb, #e5e7eb 8px, transparent 8px, transparent 14px) 1',
          }}
        ></div>

        {/* FAQ Accordion */}
        <Accordion type='single' collapsible className='space-y-4 mt-6'>
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className='bg-feature-card border-b border-gray-200 last:border-b-0 py-2'
            >
              <AccordionTrigger className='text-left md:text-lg font-medium text-hero-text hover:underline py-6'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='text-subtitle-text leading-relaxed text-muted-foreground pb-6 pr-6 md:w-4xl'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
