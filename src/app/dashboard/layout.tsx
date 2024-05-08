'use client';
import SideNav from '@/components/SideNav';


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <>
      <div className='flex w-full'>
        <SideNav />
        <main className='bg-dash bg-no-repeat bg-cover'>
          {children}
        </main>
      </div>

    </>



  )
}
