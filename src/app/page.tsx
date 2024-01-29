import Banner from '@/components/Banner';
import About from '@/components/About';
import Partner from '@/components/Partner';
import Contact from '@/components/Contact';
import Nav from '@/components/Nav';
export default function Home() {

  return (
    <>
      <Banner />
      <About/>
      <Partner/>
      <Contact/>
      <Nav/>
      <div className='h-[2000px]'></div>
    </>
  )
}
