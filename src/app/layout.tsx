import Header from '@/components/header';
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
      <body className='bg-site bg-no-repeat bg-cover overflow-hidden '>
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
