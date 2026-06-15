'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'خانه', href: '/' },
  { name: 'درباره من', href: '/#about' },
  { name: 'خدمات', href: '/#services' },
  { name: 'نمونه‌کارها', href: '/#portfolio' },
  { name: 'تماس', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'glassmorphism border-t-0 rounded-none py-4 shadow-lg shadow-brand-bg-start/20'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-[1.2rem] bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold text-xl shadow-lg border border-brand-accent/30 group-hover:scale-105 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <span className="font-black text-2xl tracking-tight text-brand-text-primary">
              مُصِر وب
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-brand-text-secondary hover:text-brand-accent transition-colors block relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 border-r border-brand-border pr-6">
              <Link
                href="/#contact"
                className="px-8 py-3.5 rounded-[1.2rem] bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(58,53,185,0.4)] hover:shadow-[0_0_25px_rgba(58,53,185,0.6)] hover:-translate-y-0.5"
              >
                شروع پروژه
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-4 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-text-primary p-2 focus:outline-none"
              aria-label={mobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'absolute top-full left-0 w-full glassmorphism border-t-0 shadow-2xl py-6 flex flex-col xl:hidden border-b-2 border-b-brand-accent rounded-b-[2rem] transition-all duration-300 overflow-hidden',
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 py-0 invisible'
        )}
      >
        <ul className="flex flex-col px-6 gap-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-4 rounded-2xl text-brand-text-primary font-bold hover:bg-brand-accent/10 hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-4 mt-4 border-t border-brand-border">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-4 rounded-2xl bg-brand-accent text-white font-bold shadow-lg shadow-brand-accent/30"
            >
              شروع پروژه با من
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}