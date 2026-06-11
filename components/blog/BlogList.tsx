'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Search as SearchIcon, ArrowLeft, Calendar, User, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  slug: string;
};

interface BlogListProps {
  title: string;
  description: string;
  categories: string[];
  initialPosts: Post[];
  basePath: string;
}

export default function BlogList({ title, description, categories, initialPosts, basePath }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = initialPosts.filter(post => {
    const matchesCategory = activeCategory === 'همه' || post.category === activeCategory;
    const matchesSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-40 right-20 opacity-10 pointer-events-none animate-[pulse_10s_ease-in-out_infinite]">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism mb-4"
          >
            <span className="text-[11px] font-bold text-brand-text-secondary uppercase tracking-widest text-right">📝 وبلاگ</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-black text-brand-text-primary mb-4 text-right"
          >
             {title.split(' ')[0]} <span className="text-brand-accent drop-shadow-md">{title.substring(title.indexOf(' ') + 1)}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-text-secondary text-sm md:text-base max-w-2xl px-4"
          >
            {description}
          </motion.p>
        </div>

        {/* Filters and Search - Right to Left visually */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-5 mb-8" dir="rtl">
          {/* Categories Desktop */}
          <div className="hidden lg:flex items-center flex-wrap gap-2 md:gap-2.5 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-accent text-white shadow-md' 
                    : 'glassmorphism text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-accent/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Categories Mobile/Tablet Dropdown */}
          <div className="block lg:hidden w-full relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full glassmorphism rounded-xl px-4 py-3 text-brand-text-primary focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-bold text-sm text-right appearance-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-brand-bg-start text-brand-text-primary">
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-secondary pointer-events-none" />
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-[300px]">
            <input
              type="text"
              placeholder="جستجو در مقالات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glassmorphism rounded-full pr-12 pl-4 py-3 text-brand-text-primary focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-medium text-sm text-right"
            />
            <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-secondary" />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={post.id}
                className="group flex flex-col glassmorphism rounded-[2rem] overflow-hidden hover:border-brand-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(58,53,185,0.15)] will-change-transform"
              >
                <div className="relative aspect-[16/10] overflow-hidden m-2 rounded-[1.5rem]">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-bg-start/10 group-hover:bg-brand-bg-start/0 transition-colors duration-500" />
                  <div className="absolute top-3 right-3 glassmorphism backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-brand-text-primary border-white/20 shadow-lg">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between text-right">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-medium text-brand-text-secondary mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    </div>
                    
                    <Link href={`/${basePath}/${post.slug}`}>
                      <h2 className="text-lg md:text-xl font-bold text-brand-text-primary mb-3 group-hover:text-brand-accent transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-brand-text-secondary leading-relaxed text-sm line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-border/50 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-brand-text-primary">{post.author}</span>
                    </div>
                    
                    <Link href={`/${basePath}/${post.slug}`} className="w-10 h-10 rounded-xl glassmorphism flex items-center justify-center text-brand-text-primary border-none shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all transform group-hover:-translate-x-1">
                      <ArrowLeft className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 text-brand-text-secondary glassmorphism rounded-3xl">
              <span className="text-6xl mb-4 block">🧐</span>
              هیچ مقاله‌ای با این مشخصات یافت نشد!
            </div>
          )}
        </div>

        {/* Pagination Dummy */}
        {filteredPosts.length > 0 && (
          <div className="flex justify-center items-center gap-3 mt-16" dir="ltr">
            <button className="w-12 h-12 rounded-[1.2rem] glassmorphism flex items-center justify-center text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-accent transition-colors opacity-50 cursor-not-allowed">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-[1.2rem] bg-brand-accent text-white font-bold flex items-center justify-center shadow-lg shadow-brand-accent/30 border-none">1</button>
            <button className="w-12 h-12 rounded-[1.2rem] glassmorphism flex items-center justify-center text-brand-text-primary font-bold hover:bg-brand-card hover:border-brand-accent transition-colors">2</button>
            <button className="w-12 h-12 rounded-[1.2rem] glassmorphism flex items-center justify-center text-brand-text-primary font-bold hover:bg-brand-card hover:border-brand-accent transition-colors">3</button>
            <button className="w-12 h-12 rounded-[1.2rem] glassmorphism flex items-center justify-center text-brand-text-primary hover:text-brand-accent hover:border-brand-accent transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
