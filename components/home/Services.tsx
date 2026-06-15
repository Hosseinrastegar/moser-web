'use client';
import { Monitor, Search, Smartphone, Layout, Rocket, ShieldCheck } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

const services = [
  { title: 'طراحی وب‌سایت اختصاصی', description: 'کدنویسی صفر تا صد پروژه‌ها با مدرن‌ترین تکنولوژی‌های فرانت‌اند نظیر ری‌اکت و نکست جی‌اس برای بهترین خروجی بصری.', icon: Monitor },
  { title: 'سئو و بهینه‌سازی (SEO)', description: 'افزایش رتبه، بهینه‌سازی تکنیکال وب‌سایت جهت دریافت ترافیک ارگانیک از گوگل.', icon: Search },
  { title: 'توسعه اپلیکیشن‌های وب', description: 'ساخت وب‌اپلیکیشن‌های پیشرونده که قابلیت نصب روی گوشی‌های موبایل را دارند و عملکردی مشابه اپلیکیشن‌های نیتیو ارائه میدهند.', icon: Smartphone },
  { title: 'طراحی رابط کاربری (UI/UX)', description: 'تحلیل رفتار کاربر و ایجاد طرح‌های کاربردی قبل از شروع کدنویسی برای تضمین یک محصول بی‌نقص.', icon: Layout },
  { title: 'افزایش سرعت وب‌سایت', description: 'بهینه‌سازی تصاویر، کاهش حجم کدها و بهبود Core Web Vitals برای تجربه کاربری نرم و سریع.', icon: Rocket },
  { title: 'پیکربندی و توسعه API', description: 'طراحی، ساخت و پیاده‌سازی API امن و سریع.', icon: ShieldCheck },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-40 left-10 opacity-[0.05] pointer-events-none">
        <svg className="spin-medium" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-[0.05] pointer-events-none">
        <svg className="bounce-slow" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <FadeIn direction="up" distance={20}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism mb-6">
              <span className="text-xs font-bold text-brand-text-secondary uppercase tracking-widest">🚀 خدمات</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" distance={20} delay={50}>
            <h2 className="text-3xl md:text-5xl font-black text-brand-text-primary mb-6 text-right leading-tight">
              تخصص‌های <span className="text-brand-accent drop-shadow-md">حرفه‌ای</span> من
            </h2>
          </FadeIn>
          <FadeIn direction="up" distance={20} delay={100}>
            <div className="w-24 h-1.5 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(58,53,185,0.5)] accent-divider" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <FadeIn key={idx} direction="up" distance={30} delay={idx * 50} className="h-full">
              <div className="group relative glassmorphism rounded-[2rem] p-8 transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-card/80 text-right overflow-hidden hover:-translate-y-2 h-full flex flex-col">
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="icon-shimmer w-16 h-16 shrink-0 rounded-[1.5rem] bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                      <service.icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-brand-text-primary leading-tight group-hover:text-brand-accent transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-brand-text-secondary leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}