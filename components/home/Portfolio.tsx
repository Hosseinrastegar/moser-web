'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, X, ChevronRight, ChevronLeft, Layers } from 'lucide-react';
import { PortfolioType } from '@/lib/api';
import { FadeIn } from '@/components/ui/FadeIn';

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
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative border-t border-brand-border/50 overflow-hidden">
      <div className="absolute top-10 right-20 opacity-[0.04] pointer-events-none">
        <svg className="spin-slow" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-20 text-center">
          <FadeIn direction="up" distance={20}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism mb-6">
              <span className="text-xs font-bold text-brand-text-secondary uppercase tracking-widest">🎨 نمونه‌کارها</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" distance={20} delay={50}>
            <h2 className="text-3xl md:text-5xl font-black text-brand-text-primary mb-6 text-right leading-tight">
              پروژه‌های <span className="text-brand-accent drop-shadow-md">موفق</span> من
            </h2>
          </FadeIn>
          <FadeIn direction="up" distance={20} delay={100}>
            <div className="w-24 h-1.5 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(58,53,185,0.5)]" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((project, idx) => (
            <FadeIn key={project.id} direction="up" distance={30} delay={idx * 80} className="h-full">
              <div
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-[2rem] overflow-hidden glassmorphism relative shadow-sm hover:shadow-[0_0_20px_rgba(58,53,185,0.2)] hover:-translate-y-2 transition-all duration-500 hover:border-brand-accent/50 h-full flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.cover || ''}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
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
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6"
          style={{ backgroundColor: 'rgba(2,2,10,0.9)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl glassmorphism rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh] border border-brand-border/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-6 md:p-8 border-b border-brand-border/50">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-brand-text-primary text-right line-clamp-2">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl glassmorphism flex items-center justify-center text-brand-text-secondary hover:text-red-500 hover:scale-110 transition-all duration-300"
                aria-label="بستن"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 sm:p-6 md:p-8 flex-1 text-right">
              <div className="relative w-full rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden glassmorphism mb-6 sm:mb-8 border border-brand-border bg-black/30">
                <div className="relative" style={{ aspectRatio: '16/9', maxHeight: '50vh' }}>
                  <Image
                    src={selectedProject.images?.[currentImageIndex] || selectedProject.cover || ''}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 70vw"
                    className="object-contain"
                  />
                </div>
                {(selectedProject.images?.length ?? 0) > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full glassmorphism text-brand-text-primary flex items-center justify-center shadow-lg hover:bg-brand-card hover:scale-110 transition-all duration-300 z-10"
                      aria-label="قبلی"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full glassmorphism text-brand-text-primary flex items-center justify-center shadow-lg hover:bg-brand-card hover:scale-110 transition-all duration-300 z-10"
                      aria-label="بعدی"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10 glassmorphism px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                      {selectedProject.images?.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`h-1.5 sm:h-2 rounded-full transition-all ${
                            i === currentImageIndex
                              ? 'bg-brand-accent w-4 sm:w-6'
                              : 'bg-brand-text-secondary/50 w-1.5 sm:w-2'
                          }`}
                          aria-label={`تصویر ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h4 className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-bold text-brand-text-primary mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    توضیحات پروژه
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-brand-text-secondary leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-bold text-brand-text-primary mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    تکنولوژی‌های استفاده شده
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProject.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 glassmorphism border-brand-border text-brand-text-primary font-bold rounded-xl text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-t border-brand-border/50 flex justify-end gap-3 sm:gap-4 bg-brand-bg-start/30">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3.5 rounded-xl sm:rounded-2xl text-brand-text-secondary glassmorphism hover:text-brand-text-primary hover:scale-105 hover:shadow-lg transition-all duration-300 text-xs sm:text-sm font-bold"
              >
                بستن
              </button>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-xl sm:rounded-2xl bg-brand-accent hover:bg-brand-accent-hover hover:scale-105 hover:shadow-[0_0_25px_rgba(58,53,185,0.6)] text-white font-bold transition-all duration-300 text-xs sm:text-sm"
              >
                مشاهده زنده
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}