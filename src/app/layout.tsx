
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className='overflow-auto overflow-x-hidden'>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
