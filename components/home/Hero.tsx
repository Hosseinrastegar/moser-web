'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Code2, LineChart, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-32 overflow-hidden w-full">
      {/* SVG تزئینی */}
      <div className="absolute top-20 right-10 opacity-[0.05] pointer-events-none">
        <svg className="spin-medium" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>
      <div className="absolute top-1/3 left-10 opacity-[0.05] pointer-events-none">
        <svg className="bounce-slow" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </div>

      {/* Glow پس‌زمینه */}
      <div className="absolute top-0 right-0 w-full h-[500px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] rounded-full bg-brand-accent/20 blur-[150px] opacity-70" />
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[120%] rounded-full bg-indigo-500/10 blur-[150px] opacity-50" />
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* ستون متن */}
          <div className="flex flex-col space-y-8 items-center lg:items-start text-center lg:text-right order-2 lg:order-1">

            <div className="hero-item" style={{ '--hero-delay': '0ms' } as React.CSSProperties}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glassmorphism self-center lg:self-start">
                <span className="relative flex w-3 h-3 essential-animation">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full w-3 h-3 bg-brand-accent"></span>
                </span>
                <span className="text-sm font-medium text-brand-text-secondary">آماده پذیرش پروژه جدید</span>
              </div>
            </div>

            <div className="hero-item space-y-6" style={{ '--hero-delay': '120ms' } as React.CSSProperties}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-text-primary leading-[1.3] tracking-tight">
                خلق تجربه‌های <span className="text-brand-accent drop-shadow-lg">دیجیتال و تعاملی</span> برای برند شما
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-brand-text-secondary font-medium max-w-xl leading-relaxed mx-auto lg:mx-0">
                من حسین هستم؛ توسعه‌دهنده وب با تمرکز عمیق روی پرفورمنس، سرعت استثنایی و خلق رابط‌های کاربری مدرن در بستر وب.
              </p>
            </div>

            <div className="hero-item flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4" style={{ '--hero-delay': '240ms' } as React.CSSProperties}>
              <Link href="/#contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold transition-all shadow-[0_0_20px_rgba(58,53,185,0.4)] hover:shadow-[0_0_30px_rgba(58,53,185,0.6)] hover:-translate-y-1">
                شروع همکاری <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link href="/#portfolio" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base rounded-full glassmorphism text-brand-text-primary font-bold transition-all hover:-translate-y-1 hover:bg-brand-card/80">
                نمونه‌کارها
              </Link>
            </div>

            <div className="hero-item flex items-center justify-center lg:justify-start gap-6 sm:gap-10 pt-8 border-t border-brand-border w-full lg:w-auto" style={{ '--hero-delay': '360ms' } as React.CSSProperties}>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20">
                  <Code2 className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-brand-text-primary">کدنویسی استاندارد</h4>
                  <p className="hidden md:block text-xs sm:text-sm text-brand-text-secondary mt-1">ساختار پذیر، کلین‌کد</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/20">
                  <LineChart className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-brand-text-primary">سئو</h4>
                  <p className="hidden md:block text-xs sm:text-sm text-brand-text-secondary mt-1">سئو محتوا و تکنیکال</p>
                </div>
              </div>
            </div>
          </div>

          {/* ستون عکس */}
          <div className="hero-image relative lg:h-[600px] flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden glassmorphism border-[3px] border-brand-border/50">
              <Image
                src="/img/hossein_moser.jpg"
                alt="حسین - توسعه‌دهنده وب"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-start/80 to-transparent" />

              <div className="absolute bottom-8 right-8 glassmorphism p-4 rounded-2xl flex flex-row-reverse items-center gap-4 border-brand-border float">
                <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent border border-brand-accent/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-brand-text-primary">۱۰+</div>
                  <div className="text-xs font-bold text-brand-text-secondary">پروژه موفق</div>
                </div>
              </div>
            </div>

            <svg className="absolute -z-10 top-1/2 right-1/4 w-32 h-32 text-brand-border opacity-50" fill="currentColor" viewBox="0 0 100 100">
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" />
              </pattern>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 opacity-[0.03] pointer-events-none transform translate-y-[2px]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor" className="text-brand-border"></path>
        </svg>
      </div>
    </section>
  );
}