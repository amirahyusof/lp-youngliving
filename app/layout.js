import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Young Living Essential Oils | Natural Wellness Solutions',
  description: 'Discover the power of Young Living essential oils for your health and wellness. 100% pure, therapeutic-grade oils for natural living.',
  keywords: 'Young Living, essential oils, natural wellness, aromatherapy, pure oils',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
