import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

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
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-hero-text mb-6 leading-tight'>
            Comprehensive Answers to the Most
            <br />
            <span className='text-primary'>✦ Common Questions</span>{' '}
            <span className='text-muted-foreground'>About Our</span>
            <br />
            <span className='text-muted-foreground'>Services</span> and How We{' '}
            <span className='text-muted-foreground'>Work</span>{' '}
            <span className='text-2xl'>⌄</span>
          </h2>
        </div>

        {/* FAQ Header */}
        <div className='flex items-center justify-between mb-8'>
          <h3 className='text-4xl font-bold text-hero-text'>FAQ</h3>
          <Button
            variant='outline'
            className='bg-primary text-primary-foreground hover:bg-primary/90 border-primary rounded-full px-6 py-2'
          >
            All FAQ →
          </Button>
        </div>

        {/* FAQ Accordion */}
        <Accordion type='single' collapsible className='space-y-4'>
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className='bg-feature-card rounded-xl border-0 px-6 py-2'
            >
              <AccordionTrigger className='text-left text-lg font-medium text-hero-text hover:no-underline py-6'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='text-subtitle-text leading-relaxed pb-6'>
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
