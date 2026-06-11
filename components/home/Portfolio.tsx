'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, X, ChevronRight, ChevronLeft, Layers } from 'lucide-react';
import { PortfolioType } from '@/lib/api';

interface PortfolioProps {
  portfolios: PortfolioType[];
}

export default function Portfolio({ portfolios }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedProject?.images?.length) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject?.images?.length) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const openModal = (project: PortfolioType) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 relative border-t border-brand-border/50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-20 opacity-[0.04] pointer-events-none animate-[bounce_6s_ease-in-out_infinite]">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
      </div>
      <div className="absolute bottom-1/4 left-10 opacity-[0.04] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]">
        <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism mb-6"
          >
            <span className="text-xs font-bold text-brand-text-secondary uppercase tracking-widest text-right">🎨 نمونه‌کارها</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-brand-text-primary mb-6 text-right leading-tight"
          >
            پروژه‌های <span className="text-brand-accent drop-shadow-md">موفق</span> من
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "circOut" }}
            className="w-24 h-1.5 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(58,53,185,0.5)]"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => openModal(project)}
              className="group cursor-pointer rounded-[2rem] overflow-hidden glassmorphism relative shadow-sm hover:shadow-[0_0_20px_rgba(58,53,185,0.2)] hover:-translate-y-2 transition-all  duration-500 hover:border-brand-accent/50 text-right will-change-transform"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.cover || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMGUwZTAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjOTk5Ij5ObyBpbWFnZTwvdGV4dD48L3N2Zz4='}
                  alt={project.title || 'تصویر پروژه'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-brand-bg-start/20 group-hover:bg-brand-bg-start/0 transition-colors duration-500" />
                <div className="absolute top-4 right-4 glassmorphism px-4 py-2 rounded-full text-xs font-bold text-brand-text-primary shadow-lg">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-bold text-brand-text-primary mb-3 group-hover:text-brand-accent transition-colors leading-tight">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies?.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs font-bold px-3 py-1.5 bg-brand-card border border-brand-border text-brand-text-secondary rounded-xl">
                      {tech}
                    </span>
                  ))}
                  {(project.technologies?.length ?? 0) > 3 && (
                    <span className="text-xs font-bold px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-xl">
                      +{(project.technologies?.length ?? 0) - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-brand-bg-start/80 backdrop-blur-md" onClick={closeModal} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl glassmorphism rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border-2 border-brand-border/50"
              onClick={(e) => e.stopPropagation()}
              dir="rtl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-brand-border/50">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-text-primary text-right leading-tight">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="w-12 h-12 rounded-2xl glassmorphism flex items-center justify-center text-brand-text-secondary hover:text-red-500 hover:border-red-500/50 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto p-6 md:p-8 flex-1 text-right">
                {/* Image Slider */}
                <div className="relative aspect-video w-full rounded-3xl overflow-hidden glassmorphism mb-8 border border-brand-border">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={selectedProject.images?.[currentImageIndex] || selectedProject.cover || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMGUwZTAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjOTk5Ij5ObyBpbWFnZTwvdGV4dD48L3N2Zz4='}
                        alt={`${selectedProject.title} - تصویر ${currentImageIndex + 1}`}
                        fill
                        className="object-contain bg-black/40"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {(selectedProject.images?.length ?? 0) > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glassmorphism text-brand-text-primary flex items-center justify-center shadow-lg hover:bg-brand-card transition-colors z-10 hover:text-brand-accent hover:border-brand-accent"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glassmorphism text-brand-text-primary flex items-center justify-center shadow-lg hover:bg-brand-card transition-colors z-10 hover:text-brand-accent hover:border-brand-accent"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 glassmorphism px-4 py-2 rounded-full border-white/20">
                        {selectedProject.images?.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-brand-accent w-6' : 'bg-brand-text-secondary/50 w-2'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-3 text-lg font-bold text-brand-text-primary mb-4">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20"><Layers className="w-5 h-5" /></div> توضیحات پروژه
                    </h4>
                    <p className="text-brand-text-secondary leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="flex items-center gap-3 text-lg font-bold text-brand-text-primary mb-4">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"><Layers className="w-5 h-5" /></div> تکنولوژی‌های استفاده شده
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies?.map((tech, i) => (
                        <span key={i} className="px-5 py-2.5 glassmorphism border-brand-border text-brand-text-primary font-bold rounded-xl text-sm hover:border-brand-accent/50 hover:text-brand-accent transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 md:p-8 border-t border-brand-border/50 flex justify-end gap-4 bg-brand-bg-start/30">
                <button
                  onClick={closeModal}
                  className="px-6 py-3.5 rounded-2xl text-brand-text-secondary glassmorphism hover:text-brand-text-primary border-none shadow-none text-sm font-bold transition-colors"
                >
                  بستن پنجره
                </button>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold transition-all shadow-[0_0_15px_rgba(58,53,185,0.4)] hover:shadow-[0_0_25px_rgba(58,53,185,0.6)] text-sm"
                >
                  مشاهده زنده
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
