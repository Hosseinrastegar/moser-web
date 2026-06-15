'use client';
import { useState } from 'react';
import { Send, Mail, CheckCircle, MessageSquare } from 'lucide-react';
import { ProjectType } from '@/lib/api';
import { FadeIn } from '@/components/ui/FadeIn';

interface ContactProps {
  projectTypes: ProjectType[];
}

export default function Contact({ projectTypes }: ContactProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    project_type: projectTypes[0]?.value || '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      const response = await fetch("https://formspree.io/f/mbdeavae", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          'نام و نام خانوادگی': formData.full_name,
          'تلفن همراه': formData.phone_number,
          'نوع پروژه': formData.project_type,
          'توضیحات پروژه': formData.description,
        })
      });
      if (response.ok) {
        setFormStatus('success');
        setFormData({ full_name: '', phone_number: '', project_type: projectTypes[0]?.value || '', description: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('idle');
        alert('مشکلی در ارسال فرم پیش آمد.');
      }
    } catch {
      setFormStatus('idle');
      alert('خطا در اتصال به شبکه.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <FadeIn direction="up" distance={20}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism mb-6">
              <span className="text-xs font-bold text-brand-text-secondary uppercase tracking-widest">📞 تماس با من</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" distance={20} delay={50}>
            <h2 className="text-3xl md:text-5xl font-black text-brand-text-primary mb-6 text-right leading-tight">
              شروع یک <span className="text-brand-accent drop-shadow-md">پروژه جدید</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" distance={20} delay={100}>
            <div className="w-24 h-1.5 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(58,53,185,0.5)]" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          <FadeIn direction="right" distance={30} className="order-2 lg:order-1 space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-text-primary mb-6 text-right leading-tight">
                آماده خلق شاهکار بعدی شما
              </h3>
              <p className="text-brand-text-secondary leading-relaxed text-right text-lg">
                برای رزرو وقت مشاوره رایگان و یا پرسیدن هرگونه سوال، از طریق فرم و یا راه‌های ارتباطی با من تماس بگیرید.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'ایمیل', value: 'hossein.rastegarr@gmail.com' },
                { icon: Send, title: 'تلگرام', value: 'ارسال پیام در تلگرام', href: 'https://t.me/Hossein_moser', target: '_blank' },
                { icon: MessageSquare, title: 'بله', value: 'ارسال پیام در بله', href: 'https://ble.ir/hossein_moser', target: '_blank' }
              ].map((contact, i) => (
                <div key={i} className="flex flex-row-reverse justify-end items-center gap-6 p-6 rounded-3xl glassmorphism hover:bg-brand-card/80 transition-all hover:scale-[1.02] group">
                  <div className="text-right flex-1">
                    <p className="text-xs font-bold text-brand-text-secondary mb-2">{contact.title}</p>
                    <a href={contact.href} target={contact.target} rel="noopener noreferrer" className="text-lg font-bold text-brand-text-primary group-hover:text-brand-accent transition-colors" dir="ltr">
                      {contact.value}
                    </a>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <contact.icon className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" distance={30} delay={100} className="order-1 lg:order-2">
            <div className="glassmorphism p-8 sm:p-10 rounded-[2.5rem] relative overflow-hidden text-right border-t-[3px] border-t-brand-accent/50">
              <h3 className="text-2xl font-bold text-brand-text-primary mb-8">فرم درخواست مشاوره</h3>
              <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="full_name" className="text-sm font-bold text-brand-text-secondary">نام و نام خانوادگی</label>
                    <input id="full_name" required type="text" name="full_name" value={formData.full_name} onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))} className="w-full bg-brand-bg-start/50 border border-brand-border rounded-2xl px-4 py-4 text-brand-text-primary focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-medium text-sm" placeholder="علی رضایی" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="phone_number" className="text-sm font-bold text-brand-text-secondary">تلفن همراه</label>
                    <input id="phone_number" required type="tel" dir="ltr" name="phone_number" value={formData.phone_number} onChange={(e) => setFormData(prev => ({ ...prev, phone_number: e.target.value }))} className="w-full bg-brand-bg-start/50 border border-brand-border rounded-2xl px-4 py-4 text-brand-text-primary focus:outline-none focus:border-brand-accent transition-all font-medium text-sm text-right" placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="project_type" className="text-sm font-bold text-brand-text-secondary">نوع پروژه</label>
                  <select id="project_type" name="project_type" value={formData.project_type} onChange={(e) => setFormData(prev => ({ ...prev, project_type: e.target.value }))} className="w-full bg-brand-bg-start/50 border border-brand-border rounded-2xl px-4 py-4 text-brand-text-primary focus:outline-none focus:border-brand-accent transition-all font-medium text-sm">
                    {projectTypes.map((type) => (<option key={type.id || type.value} value={type.value} className="bg-brand-bg-start">{type.name}</option>))}
                  </select>
                </div>
                <div className="space-y-3">
                  <label htmlFor="description" className="text-sm font-bold text-brand-text-secondary">توضیحات پروژه شما</label>
                  <textarea id="description" required rows={4} name="description" value={formData.description} onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))} className="w-full bg-brand-bg-start/50 border border-brand-border rounded-2xl px-4 py-4 text-brand-text-primary focus:outline-none focus:border-brand-accent transition-all font-medium text-sm resize-none" placeholder="لطفا خلاصه‌ای از نیازها و هدف پروژه خود را بنویسید..." />
                </div>
                <button type="submit" disabled={formStatus !== 'idle'} className="w-full flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-5 rounded-2xl shadow-[0_0_20px_rgba(58,53,185,0.4)] transition-all disabled:opacity-70 mt-4">
                  {formStatus === 'idle' && <><span>ارسال درخواست</span><Send className="w-5 h-5 -rotate-90" /></>}
                  {formStatus === 'loading' && <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  {formStatus === 'success' && <><span>درخواست شما با موفقیت ثبت شد</span><CheckCircle className="w-5 h-5" /></>}
                </button>
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}