'use client';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Partner from '@/components/Partner';
import Contact from '@/components/Contact';
import Nav from '@/components/Nav';
import Header from '@/components/header';

export default function Home() {

  return (

    <>
      
      <Header />
      <div className='bg-site bg-no-repeat bg-cover'>
        <Banner />
        <About />
        <Partner />
        <Contact />
        <Nav />
        {/* <div className='h-[2000px]'></div> */}
      </div>
    </>
  )
}
