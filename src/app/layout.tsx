import Header from '@/componnents/header';
import './globals.css'






export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <title>
          utbc Bibiliotheque
        </title>
      </head>
      <body className='bg-gray-900 text-gray-50 '>
        <Header />
        <div className='p-4'>
          {children}
        </div>
      </body>
    </html>
  )
}
