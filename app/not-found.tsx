// app/not-found.tsx
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">

      {/* Glow پس‌زمینه */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[40%] h-[50%] rounded-full bg-brand-accent/15 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[30%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* SVG تزئینی */}
      <div className="absolute top-20 right-10 opacity-[0.04] pointer-events-none">
        <svg className="spin-slow" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4l3 3"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 opacity-[0.04] pointer-events-none">
        <svg className="bounce-slow" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </div>

      <div className="text-center flex flex-col items-center gap-8 hero-item" style={{ '--hero-delay': '0ms' } as React.CSSProperties}>

        <div className="relative">
          <span className="text-[8rem] sm:text-[12rem] font-black leading-none select-none"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.05) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(99,102,241,0.3))',
            }}
          >
            ۴۰۴
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[8rem] sm:text-[12rem] font-black leading-none select-none text-brand-border/20">
              ۴۰۴
            </span>
          </div>
        </div>

        <div className="space-y-4 hero-item" style={{ '--hero-delay': '150ms' } as React.CSSProperties}>
          <h1 className="text-2xl sm:text-4xl font-black text-brand-text-primary">
            صفحه‌ای <span className="text-brand-accent">پیدا نشد</span>
          </h1>
          <p className="text-brand-text-secondary text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            صفحه‌ای که دنبالش میگردی وجود نداره یا منتقل شده. برگردیم به خونه؟
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 hero-item" style={{ '--hero-delay': '300ms' } as React.CSSProperties}>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-1"
          >
            <Home className="w-5 h-5" />
            بازگشت به خانه
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base rounded-full glassmorphism text-brand-text-primary font-bold transition-all hover:-translate-y-1 hover:bg-brand-card/80"
          >
            تماس با من
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}