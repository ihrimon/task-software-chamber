import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <main className='lg:w-[1760px] mx-auto px-4 my-10'>
        <Navbar />
      </main>

      <footer></footer>
    </div>
  );
}
