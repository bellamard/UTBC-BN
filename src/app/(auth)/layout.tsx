"use client";
import Header from '@/components/header';



export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <>
      <Header />
      <main className='bg-site bg-no-repeat bg-cover'>
        {children}
      </main>
    </>



  )
}
