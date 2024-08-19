import { Space_Mono } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata = {
  title: 'App Dolar',
  description: 'Aplicación que permite consultar en tiempo real el precio del dólar en Argentina. Proporciona diferentes cotizaciones, incluyendo el dólar oficial, blue, y otras variantes, brindando información actualizada y accesible para los usuarios'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={spaceMono.className}>
        <main className='flex h-screen items-center justify-center bg-emerald-100'>
          <div className='mx-auto max-w-screen-lg px-4 flex flex-col '>
            <div className='bg-white rounded-3xl shadow-md w-full p-8 flex-1 grid'>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
