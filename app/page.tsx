// app/page.tsx
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import dynamic from 'next/dynamic';
import { PORTFOLIOS_DATA, PROJECT_TYPES_DATA } from '@/lib/data';

const Services = dynamic(() => import('@/components/home/Services'), { ssr: true });
const Portfolio = dynamic(() => import('@/components/home/Portfolio'), { ssr: true });
const Contact = dynamic(() => import('@/components/home/Contact'), { ssr: true });

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio portfolios={PORTFOLIOS_DATA} />
      <Contact projectTypes={PROJECT_TYPES_DATA} />
    </>
  );
}