'use client';
import { useEffect } from 'react';
import { MonitorSmartphone, Zap, Search, Code2 } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

const skills = [
  { name: 'React & Next.js', level: 85 },
  { name: 'TypeScript & JavaScript', level: 75 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Django REST Framework', level: 90 },
  { name: 'Technical SEO', level: 90 },
  { name: 'On-page SEO', level: 80 },
  { name: 'Content Strategy', level: 80 },
  { name: 'SEO Analytics & Tools', level: 80 },
];

export default function About() {
  useEffect(() => {
    const bars = document.querySelectorAll<HTMLElement>('.skill-bar-fill');
    if (!bars.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animateBar = (bar: HTMLElement) => {
      const target = bar.getAttribute('data-width') || '0%';
      bar.style.width = target;
    };

    // موبایل یا reduced motion: فوری بدون transition
    if (prefersReduced || window.innerWidth < 1024) {
      bars.forEach((bar) => {
        bar.style.transition = 'none';
        animateBar(bar);
      });
      return;
    }

    // دسکتاپ: scroll-triggered با transition
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateBar(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-20 right-10 opacity-10 pointer-events-none">
        <svg className="spin-slow" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 pointer-events-none">
        <svg className="bounce-slow" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="m16 12-4-4-4 4"/>
          <path d="M12 16V8"/>
        </svg>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center mb-20 text-center">
          <FadeIn direction="up" distance={20}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism mb-6">
              <span className="text-xs font-bold text-brand-text-secondary uppercase tracking-widest">👨‍💻 آشنایی</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" distance={20} delay={50}>
            <h2 className="text-3xl md:text-5xl font-black text-brand-text-primary mb-6 text-right leading-tight">
              درباره <span className="text-brand-accent drop-shadow-md">من</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" distance={20} delay={100}>
            <div className="w-24 h-1.5 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(58,53,185,0.5)] accent-divider" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <FadeIn direction="right" distance={30} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-text-primary text-center md:text-right leading-tight">
              توسعه وبسایت های تجاری، هوشمند، پرسرعت و سودآور
            </h3>
            <p className="text-brand-text-secondary leading-relaxed text-center md:text-justify text-base">
              یک وب‌سایت عالی، یک کانال فروش زنده هست که فرایند جذب مشتری و درآمدزایی کسب‌ و کارتونو به‌طور خودکار مدیریت میکنه. هدف من خلق وبسایت های تخصصی برای پایداری و رشد بیزینس شماست.
            </p>
            <p className="text-brand-text-secondary leading-relaxed text-center md:text-justify text-base">
              خروجی کار من وبسایتی پرسرعت، امن و جذاب هست که با جذب ترافیک هدفمند از گوگل، هزینه‌های تبلیغاتی شمارو کاهش داده و ورودی مشتریان جدید رو افزایش میده.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: MonitorSmartphone, title: 'ریسبانسیو کاربری', desc: 'تطبیق با تمامی رزولوشن‌ها' },
                { icon: Zap, title: 'عملکرد سریع', desc: 'معماری و کدنویسی بهینه' },
                { icon: Search, title: 'رتبه‌های برتر گوگل', desc: 'سئو تکنیکال، داخلی و خارجی' },
                { icon: Code2, title: 'کدنویسی استاندارد', desc: 'تمیز، قابل توسعه' }
              ].map((feature, i) => (
                <div key={i} className="group flex flex-col items-center text-center gap-2 p-5 rounded-3xl glassmorphism hover:bg-brand-card/80 transition-colors">
                  <div className="icon-shimmer w-11 h-11 shrink-0 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent shadow-sm border border-brand-accent/20">
                    <feature.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-brand-text-primary leading-tight">{feature.title}</h4>
                  <p className="text-[11px] sm:text-xs text-brand-text-secondary leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" distance={30} delay={100}>
            <div className="glassmorphism rounded-[2.5rem] p-8 lg:p-10">
              <h3 className="text-xl font-bold text-brand-text-primary mb-8 text-right">مهارت‌های فنی من</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-xs sm:text-sm text-brand-text-primary">{skill.name}</span>
                      <span className="text-xs sm:text-sm font-bold text-brand-accent">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-brand-border/40 rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-brand-accent rounded-full shadow-[0_0_10px_rgba(58,53,185,0.8)]"
                        data-width={`${skill.level}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>

        <FadeIn direction="up" distance={20} delay={150}>
          <div className="mt-16 w-full p-6 rounded-3xl bg-gradient-to-l from-brand-accent/10 to-brand-card/20 border-r-4 border-brand-accent backdrop-blur-sm text-center md:text-right">
            <p className="font-black text-brand-text-primary text-base md:text-lg mb-2">
              «آدم‌ها و کسب و کارهای موفق شانس بیشتری ندارن، سیستم بهتری دارن.»
            </p>
            <p className="text-xs md:text-sm text-brand-text-secondary leading-relaxed">
              مهندسی دقیق ساختار کدها و بهینه‌سازی زیرساخت وب‌سایت در پروژه‌های من، ریسک خطا و کندی رو به صفر میرسونه تا خروجی کار شما یک سیستم پایدار، امن و آماده برای توسعه کسب و کار و برندتون باشه.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}