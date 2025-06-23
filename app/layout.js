import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArtistProvider } from '@/context/ArtistContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Artistly - Book Performing Artists',
  description: 'Connect event planners with talented performing artists.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ArtistProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ArtistProvider>
      </body>
    </html>
  );
}