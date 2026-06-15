import Link from 'next/link';
import { Layers, Github, Send, Instagram, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border/50 glassmorphism relative mt-20 rounded-t-[3rem] text-brand-text-secondary">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="col-span-1 lg:col-span-1 border-b lg:border-b-0 pb-8 lg:pb-0 border-brand-border flex flex-col items-center lg:items-start text-center lg:text-right">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent shadow-lg group-hover:scale-105 transition-transform border border-brand-accent/30">
                <Layers className="w-6 h-6" />
              </div>
              <span className="font-black text-2xl tracking-tight text-brand-text-primary">
                مُصِر وب
              </span>
            </Link>
            <p className="text-brand-text-secondary text-sm leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0">
              طراحی و توسعه وب‌سایت‌های مدرن، سریع و بهینه‌سازی شده برای موتورهای جستجو جهت رشد کسب‌وکار آنلاین شما.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: Github, href: 'https://github.com/Hosseinrastegar', label: 'گیت‌هاب' },
                { icon: Send, href: 'https://t.me/Hossein_moser', label: 'تلگرام' },
                { icon: CheckCircle2, href: 'https://ble.ir/hossein_moser', label: 'بله' },
                { icon: Instagram, href: 'https://www.instagram.com/hossein_hr8/', label: 'اینستاگرام' }
              ].map((item, i) => (
                <a key={i} href={item.href} title={item.label} target="_blank" className="w-12 h-12 rounded-2xl glassmorphism flex items-center justify-center text-brand-text-primary hover:text-brand-accent hover:border-brand-accent/50 hover:bg-brand-accent/10 transition-colors">
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
            <h3 className="font-bold text-lg mb-6 text-brand-text-primary relative inline-block">
              دسترسی سریع
              <span className="absolute -bottom-3 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 w-1/2 h-1 bg-brand-accent rounded-full shadow-[0_0_10px_rgba(58,53,185,0.8)]"></span>
            </h3>
            <ul className="space-y-4 pt-2">
              {[
                { name: 'خانه', href: '/' },
                { name: 'درباره من', href: '/#about' },
                { name: 'خدمات', href: '/#services' },
                { name: 'نمونه‌کارها', href: '/#portfolio' },

              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-brand-text-secondary hover:text-brand-accent transition-colors flex items-center justify-center lg:justify-start gap-2 group font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-border group-hover:bg-brand-accent/50 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
            <h3 className="font-bold text-lg mb-6 text-brand-text-primary relative inline-block">
              خدمات تخصصی
              <span className="absolute -bottom-3 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 w-1/2 h-1 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
            </h3>
            <ul className="space-y-4 pt-2">
              {[
                'طراحی سایت شرکتی',
                'طراحی سایت بیوتی',
                'طراحی سایت خبری/مجله ای',
                'طراحی فروشگاه اینترنتی',
                'سئو و بهینه‌سازی',
              ].map((item, i) => (
                <li key={i}>
                  <Link href="/#services" className="text-brand-text-secondary hover:text-indigo-500 transition-colors flex items-center justify-center lg:justify-start gap-2 group font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-border group-hover:bg-indigo-500/50 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
            <h3 className="font-bold text-lg mb-6 text-brand-text-primary relative inline-block">
              ارتباط با من
              <span className="absolute -bottom-3 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 w-1/2 h-1 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)]"></span>
            </h3>
            <ul className="space-y-6 pt-2">
              <li className="flex flex-col items-center lg:items-start gap-1 p-4 glassmorphism rounded-2xl w-full">
                <span className="text-xs text-brand-text-primary uppercase tracking-wider font-bold mb-1">ایمیل پیامگیر</span>
                <span className="font-medium text-brand-text-secondary hover:text-brand-accent transition-colors text-sm break-all">hossein.rastegarr@gmail.com</span>
              </li>
              <li className="flex flex-col items-center lg:items-start gap-1 p-4 glassmorphism rounded-2xl w-full">
                <span className="text-xs text-brand-text-primary uppercase tracking-wider font-bold mb-1">زمان پاسخگویی</span>
                <span className="font-medium text-sm text-brand-text-secondary">۱۰ صبح تا ۱۹ عصر </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-brand-text-primary font-bold">مُصِر وب</span>. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-1 text-sm font-medium">
            همراه شما در مسیر توسعه کسب‌وکار دیجیتال
          </div>
        </div>
      </div>
    </footer>
  );
}