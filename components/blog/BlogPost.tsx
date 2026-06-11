'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Share2, MessageCircle, Heart, CheckCircle2, List, Link as LinkIcon, Check, Send, X } from 'lucide-react';
import { motion, useScroll, AnimatePresence } from 'motion/react';

export type PostDetail = {
  title: string;
  content: string;
  cover: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
};

interface BlogPostProps {
  post: PostDetail;
  basePath: string;
  baseTitle: string;
}

export default function BlogPost({ post, basePath, baseTitle }: BlogPostProps) {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setProgress(latest);
    });
  }, [scrollYProgress]);

  const [copied, setCopied] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleTelegramShare = () => {
    const text = encodeURIComponent(post.title);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-accent z-50 origin-left transition-transform duration-75 shadow-[0_0_10px_rgba(58,53,185,0.6)]"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-[300px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-50%] right-[-10%] w-[50%] h-[200%] rounded-full bg-brand-accent/10 blur-[120px] opacity-70" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex flex-col sm:items-start sm:justify-end gap-4 mb-8 text-right" dir="rtl">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-text-secondary">
            <Link href="/" className="hover:text-brand-accent transition-colors">خانه</Link>
            <span>/</span>
            <Link href={`/${basePath}`} className="hover:text-brand-accent transition-colors">{baseTitle}</Link>
            <span>/</span>
            <span className="text-brand-text-primary glassmorphism border-none px-3 py-1.5 rounded-lg text-[11px] shadow-sm">{post.category}</span>
          </div>
        </div>

        {/* Article Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-right mb-8"
          dir="rtl"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-text-primary leading-[1.4]">
            {post.title}
          </h1>
        </motion.div>

        {/* Cover Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video w-full rounded-[2rem] overflow-hidden mb-8 glassmorphism border-[3px] border-brand-border/50"
        >
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Article Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-xs sm:text-sm font-bold text-brand-text-secondary" dir="rtl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-accent/10 flex items-center justify-center overflow-hidden border border-brand-accent/20">
               <User className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent" />
            </div>
            <span className="font-bold text-brand-text-primary">{post.author}</span>
          </div>
          <div className="flex items-center gap-2 glassmorphism px-4 py-2 rounded-xl">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent" />
            {post.date}
          </div>
        </div>
        
        {/* Table of Contents */}
        <div className="glassmorphism rounded-2xl md:rounded-3xl p-6 md:p-8 mb-12" dir="rtl">
          <h3 className="text-base md:text-lg font-bold text-brand-text-primary mb-5 flex items-center gap-3">
             <List className="w-5 h-5 md:w-6 md:h-6 text-brand-accent" />
             فهرست مطالب
          </h3>
          <ul className="space-y-4 text-brand-text-secondary text-sm md:text-base font-bold">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-accent/50"></span>
              <a href="#react-19" className="hover:text-brand-accent transition-colors">معرفی React 19</a>
            </li>
            <li className="flex items-center gap-3 pr-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-border"></span>
              <a href="#react-compiler" className="hover:text-brand-accent transition-colors">کامپایلر جدید (React Compiler)</a>
            </li>
            <li className="flex items-center gap-3 pr-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-border"></span>
              <a href="#actions" className="hover:text-brand-accent transition-colors">اکشن‌ها (Actions)</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-accent/50"></span>
              <a href="#conclusion" className="hover:text-brand-accent transition-colors">نتیجه‌گیری</a>
            </li>
          </ul>
        </div>

        {/* Article Body */}
        <article 
          className="prose prose-base md:prose-lg prose-slate dark:prose-invert max-w-none text-justify text-brand-text-secondary mb-12 prose-headings:text-right prose-p:leading-relaxed prose-p:mb-6 prose-h2:mt-10 prose-h2:mb-5 prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-black prose-h2:text-brand-text-primary prose-h3:mt-6 prose-h3:mb-4 prose-h3:text-lg md:prose-h3:text-xl prose-h3:font-bold prose-h3:text-brand-text-primary prose-blockquote:border-r-4 prose-blockquote:border-l-0 prose-blockquote:border-brand-accent prose-blockquote:bg-brand-accent/10 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-l-2xl prose-blockquote:font-medium prose-blockquote:italic"
          dir="rtl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer & Tags */}
        <div className="py-8 border-y border-brand-border flex flex-col md:flex-row items-center justify-between gap-6" dir="rtl">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <span className="font-bold text-sm md:text-base text-brand-text-primary ml-2">برچسب‌ها:</span>
            {post.tags.map(tag => (
              <span key={tag} className="px-4 py-2 rounded-xl glassmorphism text-brand-text-secondary text-xs md:text-sm font-bold hover:text-brand-accent hover:border-brand-accent/50 cursor-pointer transition-colors" dir="ltr">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto mt-4 md:mt-0">
            <button className="flex-1 md:flex-none flex justify-center items-center gap-2 px-6 py-3 rounded-xl text-sm md:text-base text-brand-text-secondary hover:text-red-500 hover:border-red-500/50 glassmorphism font-bold transition-colors">
              <Heart className="w-5 h-5" />
              پسندیدن
            </button>
            <button 
              onClick={() => setIsShareModalOpen(true)}
              className="flex-1 md:flex-none flex justify-center items-center gap-2 px-6 py-3 rounded-xl text-sm md:text-base text-brand-text-secondary hover:text-brand-accent hover:border-brand-accent/50 glassmorphism font-bold transition-colors"
            >
              <Share2 className="w-5 h-5" />
              اشتراک‌گذاری
            </button>
          </div>
        </div>

        {/* Share Modal */}
        <AnimatePresence>
          {isShareModalOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsShareModalOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity" 
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20, x: '-50%', top: '50%', left: '50%' }}
                animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%', top: '50%', left: '50%' }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed z-[60] w-[90%] max-w-sm glassmorphism rounded-[2rem] p-8 shadow-2xl border-t-2 border-t-brand-accent/50"
                dir="rtl"
                style={{ position: 'fixed', transform: 'translate(-50%, -50%)' }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-brand-text-primary">اشتراک‌گذاری مقاله</h3>
                  <button 
                    onClick={() => setIsShareModalOpen(false)}
                    className="w-10 h-10 rounded-2xl glassmorphism flex items-center justify-center text-brand-text-secondary hover:text-brand-accent transition-colors border-none shadow-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <button 
                    onClick={handleCopyLink} 
                    className="flex justify-center items-center gap-3 px-6 py-4 rounded-2xl text-sm md:text-base text-brand-text-primary hover:text-white hover:bg-emerald-500 hover:border-emerald-500 glassmorphism font-bold transition-all"
                  >
                    {copied ? <Check className="w-6 h-6" /> : <LinkIcon className="w-6 h-6" />}
                    {copied ? 'کپی شد' : 'کپی لینک'}
                  </button>
                  <button 
                    onClick={handleTelegramShare}
                    className="flex justify-center items-center gap-3 px-6 py-4 rounded-2xl text-sm md:text-base text-brand-text-primary hover:text-white hover:bg-sky-500 hover:border-sky-500 glassmorphism font-bold transition-all"
                  >
                    <Send className="w-6 h-6" />
                    تلگرام
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Related Posts */}
        <div className="mt-16 pt-10 border-t border-brand-border" dir="rtl">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-8 flex items-center gap-3">
             مطالب مرتبط
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[1, 2].map((idx) => (
              <Link href="#" key={idx} className="group flex flex-col glassmorphism rounded-[2rem] overflow-hidden hover:border-brand-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(58,53,185,0.15)] will-change-transform">
                <div className="relative aspect-[16/10] overflow-hidden m-2 rounded-[1.5rem]">
                  <Image
                    src={`https://picsum.photos/seed/related${idx}/600/400`}
                    alt="Related Post"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-bg-start/10 group-hover:bg-brand-bg-start/0 transition-colors duration-500" />
                  <div className="absolute top-3 right-3 glassmorphism backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-brand-text-primary border-white/20 shadow-lg">
                    آموزش برنامه‌نویسی
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between text-right">
                  <div className="flex items-center gap-3 text-xs font-bold text-brand-text-secondary mb-3">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-brand-accent" /> ۲۰ اردیبهشت ۱۴۰۳</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-brand-text-primary group-hover:text-brand-accent transition-colors line-clamp-2 leading-snug">
                    {idx === 1 ? 'راهنمای جامع استفاده از Server Actions در Next.js' : 'چگونه وب‌سایت‌های سریع‌تری با Tailwind CSS بسازیم'}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-brand-border" dir="rtl">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-8 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand-accent/10 border border-brand-accent/20"><MessageCircle className="w-6 h-6 text-brand-accent" /></div>
            نظرات کاربران (۲)
          </h3>
          
          <form className="mb-12 glassmorphism p-6 md:p-10 rounded-[2rem]">
            <h4 className="font-bold text-lg text-brand-text-primary mb-6">دیدگاه خود را بنویسید</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <input type="text" placeholder="نام شما" className="w-full bg-brand-bg-start/50 border border-brand-border rounded-2xl px-4 py-3.5 text-brand-text-primary focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-medium text-sm" />
              <input type="tel" placeholder="شماره تلفن" className="w-full bg-brand-bg-start/50 border border-brand-border rounded-2xl px-4 py-3.5 text-brand-text-primary focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-medium text-sm text-right" dir="ltr" />
            </div>
            <textarea rows={4} placeholder="متن دیدگاه..." className="w-full bg-brand-bg-start/50 border border-brand-border rounded-2xl px-4 py-4 text-brand-text-primary focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-medium text-sm resize-none mb-6"></textarea>
            <button type="button" className="w-full md:w-auto px-8 py-4 rounded-2xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold transition-all shadow-[0_0_15px_rgba(58,53,185,0.4)]">ثبت دیدگاه</button>
          </form>

          <div className="space-y-6 md:space-y-8">
            {/* Comment 1 with Reply */}
            <div className="glassmorphism p-6 md:p-8 rounded-[2rem] flex flex-col gap-5 border-t-[3px] border-t-brand-border">
              <div className="flex gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-[1.2rem] bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent font-black text-lg md:text-xl">M</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                      <h4 className="font-bold text-base md:text-lg text-brand-text-primary">محمد احمدی</h4>
                      <span className="text-xs font-bold text-brand-text-secondary">۲۳ اردیبهشت ۱۴۰۳</span>
                    </div>
                  </div>
                  <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed">
                    مقاله بسیار کامل و مفیدی بود. بی‌صبرانه منتظرم تا کامپایلر جدید روی پروژه‌های واقعی تست کنم.
                  </p>
                  <button 
                    onClick={() => setReplyingTo('comment-1')}
                    className="text-xs font-black text-brand-text-secondary hover:text-brand-accent mt-4 transition-colors"
                  >
                    پاسخ دادن
                  </button>

                  {/* Reply Form */}
                  {replyingTo === 'comment-1' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 glassmorphism p-5 md:p-6 rounded-[1.5rem]"
                    >
                      <h4 className="font-bold text-sm md:text-base text-brand-text-primary mb-4 md:mb-5">پاسخ به محمد احمدی</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input type="text" placeholder="نام شما" className="w-full bg-brand-bg-start/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-text-primary focus:outline-none focus:border-brand-accent font-medium" />
                        <input type="tel" placeholder="شماره تلفن" className="w-full bg-brand-bg-start/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-text-primary focus:outline-none focus:border-brand-accent font-medium text-right" dir="ltr" />
                      </div>
                      <textarea rows={3} placeholder="متن پاسخ..." className="w-full bg-brand-bg-start/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-text-primary focus:outline-none focus:border-brand-accent font-medium resize-none mb-4 md:mb-5"></textarea>
                      <div className="flex items-center gap-3">
                        <button type="button" className="px-6 md:px-8 py-3 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold transition-all shadow-md shadow-brand-accent/30 text-sm">ارسال پاسخ</button>
                        <button 
                          type="button" 
                          onClick={() => setReplyingTo(null)}
                          className="px-6 md:px-8 py-3 rounded-xl glassmorphism hover:bg-brand-card text-brand-text-secondary font-bold transition-colors text-sm shadow-none"
                        >
                          انصراف
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Nested Reply */}
                  <div className="mt-6 glassmorphism bg-brand-accent/5 border border-brand-accent/10 p-5 md:p-6 rounded-[1.5rem] flex gap-4 md:gap-5">
                    <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-2xl border-2 border-brand-accent/30 bg-brand-accent/20 flex items-center justify-center shadow-lg text-brand-accent">
                       <User className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-2">
                        <h4 className="font-bold text-sm md:text-base text-brand-accent flex items-center gap-2">
                          حسین رستگار <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-accent flex-shrink-0" />
                        </h4>
                        <span className="text-xs font-bold text-brand-text-secondary">۲۴ اردیبهشت ۱۴۰۳</span>
                      </div>
                      <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed">
                        ممنون از توجه شما محمد جان. بله دقیقا، کامپایلر جدید خیلی از مشکلات پرفورمنسی رو به صورت خودکار حل میکنه.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
