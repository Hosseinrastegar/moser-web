import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'مُصِر وب | طراحی سایت و سئو',
  description: 'خدمات حرفه‌ای طراحی وب‌سایت و سئو توسط تیم مُصِر. خلق تجربه‌های دیجیتال مدرن.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body className="font-sans bg-gradient-to-br from-brand-bg-start to-brand-bg-end bg-fixed min-h-screen text-brand-text-primary antialiased transition-colors duration-500 overflow-x-hidden">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
