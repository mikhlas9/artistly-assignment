import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArtistProvider } from '@/context/ArtistContext';
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Artistly - Book Performing Artists',
  description: 'Connect event planners with talented performing artists.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider>
          <ArtistProvider>
            <Header />
            <main className="min-h-screen bg-background text-text transition-colors duration-300">
              {children}
            </main>
            <Footer />
          </ArtistProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}