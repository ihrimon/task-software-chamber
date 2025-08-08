import About from '@/components/about';
import Banner from '@/components/banner';
import Services from '@/components/services';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <main className=''>
        <Banner />
        <About />
        <Services />
      </main>

      <footer></footer>
    </div>
  );
}
