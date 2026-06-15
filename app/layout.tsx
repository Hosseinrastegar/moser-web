// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  display: 'swap',
  variable: '--font-vazirmatn',
});

export const metadata: Metadata = {
  title: 'مُصِر وب | طراحی سایت و سئو',
  description: 'خدمات حرفه‌ای طراحی وب‌سایت و سئو توسط تیم مُصِر. خلق تجربه‌های دیجیتال مدرن.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload تصویر هیرو برای LCP */}
        <link rel="preload" as="image" href="/img/hossein_moser.webp" fetchPriority="high" />
      </head>
      <body className={`${vazirmatn.variable} font-sans bg-gradient-to-br from-brand-bg-start to-brand-bg-end min-h-screen text-brand-text-primary antialiased overflow-x-hidden`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}