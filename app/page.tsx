import About from '@/components/about';
import Banner from '@/components/banner';
import Contact from '@/components/contact';
import FAQSection from '@/components/faq';
import Footer from '@/components/footer';
import Services from '@/components/services';
import Testimonial from '@/components/testimonial';
import WhyChooseUs from '@/components/why-choose-us';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <main className=''>
        <Banner />
        <About />
        <Services />
        <WhyChooseUs />
        <FAQSection />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
