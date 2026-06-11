import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home/Portfolio';
import Contact from '@/components/home/Contact';
import { getPortfolios, getProjectTypes } from '@/lib/api';
import { PORTFOLIOS_DATA, PROJECT_TYPES_DATA } from '@/lib/data';

export default async function Home() {
  const [portfolios, projectTypes] = await Promise.all([
    getPortfolios(),
    getProjectTypes()
  ]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio portfolios={PORTFOLIOS_DATA} />
      <Contact projectTypes={projectTypes} />
    </>
  );
}
