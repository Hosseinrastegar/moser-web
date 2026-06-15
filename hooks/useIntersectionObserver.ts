// hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = { threshold: 0.1, triggerOnce: true }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce) observer.unobserve(element);
      } else if (!options.triggerOnce) {
        setIsVisible(false);
      }
    }, { threshold: options.threshold });

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return { ref, isVisible };
}