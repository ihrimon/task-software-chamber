import About from '@/components/about';
import Banner from '@/components/banner';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <main>
        <Banner />
        <About />
      </main>

      <footer></footer>
    </div>
  );
}
