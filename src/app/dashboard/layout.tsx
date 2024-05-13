'use client';
import SideNav from '@/components/SideNav';


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <>
      <div className='flex w-screen w-full flex-wrap'>
        <SideNav />
        <main className='bg-dash bg-no-repeat bg-cover w-[84%] '>
          {children}
        </main>
      </div>

    </>



  )
}
