
import './styles/globals.css';






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
      <body className='overflow-hidden'>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
