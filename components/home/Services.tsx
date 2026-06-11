'use client';

import { motion } from 'motion/react';
import { Monitor, Search, Smartphone, Layout, Rocket, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'طراحی وب‌سایت اختصاصی',
    description: 'کدنویسی صفر تا صد پروژه‌ها با مدرن‌ترین تکنولوژی‌های فرانت‌اند نظیر ری‌اکت و نکست جی‌اس برای بهترین خروجی بصری.',
    icon: Monitor,
  },
  {
    title: 'سئو و بهینه‌سازی (SEO)',
    description: 'افزایش رتبه، بهینه‌سازی تکنیکال وب‌سایت جهت دریافت ترافیک ارگانیک از گوگل.',
    icon: Search,
  },
  {
    title: 'توسعه اپلیکیشن‌های وب',
    description: 'ساخت وب‌اپلیکیشن‌های پیشرونده که قابلیت نصب روی گوشی‌های موبایل را دارند و عملکردی مشابه اپلیکیشن‌های نیتیو ارائه میدهند.',
    icon: Smartphone,
  },
  {
    title: 'طراحی رابط کاربری (UI/UX)',
    description: 'تحلیل رفتار کاربر و ایجاد طرح‌های کاربردی قبل از شروع کدنویسی برای تضمین یک محصول بی‌نقص.',
    icon: Layout,
  },
  {
    title: 'افزایش سرعت وب‌سایت',
    description: 'بهینه‌سازی تصاویر، کاهش حجم کدها و بهبود Core Web Vitals برای تجربه کاربری نرم و سریع.',
    icon: Rocket,
  },
  {
    title: 'پیکربندی و توسعه API',
    description: 'طراحی، ساخت و پیاده‌سازی API امن و سریع.',
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-40 left-10 opacity-[0.05] pointer-events-none animate-[pulse_8s_ease-in-out_infinite]">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-[0.05] pointer-events-none animate-[spin_20s_linear_infinite]">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism mb-6"
          >
            <span className="text-xs font-bold text-brand-text-secondary uppercase tracking-widest text-right">🚀 خدمات</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-brand-text-primary mb-6 text-right leading-tight"
          >
            تخصص‌های <span className="text-brand-accent drop-shadow-md">حرفه‌ای</span> من
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "circOut" }}
            className="w-24 h-1.5 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(58,53,185,0.5)]"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              layoutId={`service-card-${index}`}
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative glassmorphism rounded-[2rem] p-8 transition-colors duration-300 hover:border-brand-accent/50 hover:bg-brand-card/80 text-right overflow-hidden will-change-transform"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6" dir="rtl">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 shrink-0 rounded-[1.5rem] bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20 text-brand-accent group-hover:bg-brand-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(58,53,185,0.4)] transition-all duration-300"
                  >
                    <service.icon className="w-8 h-8 transition-transform duration-300" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-text-primary leading-tight group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-brand-text-secondary leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
