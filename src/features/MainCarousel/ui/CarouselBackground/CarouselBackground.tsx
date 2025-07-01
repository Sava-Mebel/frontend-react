import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import cls from './CarouselBackground.module.scss';
import { toolItemLists } from '../../model/toolItems';

interface CarouselBackgroundProps {
  activeIndex: number;
  prevIndex: number;
  direction: 'left' | 'right';
  basePath?: string;
}

const joinPaths = (base: string, path: string) => {
  if (!base) return path;
  return base.endsWith('/') ? base + path : base + '/' + path;
};

export const CarouselBackground = ({
  activeIndex,
  prevIndex,
  direction,
  basePath = '',
}: CarouselBackgroundProps) => {
  const activeSlideRef = useRef<HTMLDivElement>(null);
  const prevSlideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Старый слой уезжает назад
    timeline.to(prevSlideRef.current, {
      scale: 0.95,
      opacity: 0.5,
      x: direction === 'left' ? '-5%' : '5%',
      duration: 0.8,
      ease: 'power2.inOut',
    });

    // Новый слой въезжает поверх
    timeline.fromTo(
      activeSlideRef.current,
      {
        x: direction === 'left' ? '100%' : '-100%',
        opacity: 0,
        scale: 1.05,
        zIndex: 2,
      },
      {
        x: '0%',
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      },
      '<',
    );
  }, [activeIndex, direction]);

  return (
    <div className={cls.carouselBackground}>
      <div
        ref={prevSlideRef}
        className={cls.slide}
        style={{
          background: `linear-gradient(0deg, rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${joinPaths(
            basePath,
            toolItemLists[prevIndex].urlBg,
          )}) center / cover no-repeat`,
          zIndex: 1,
        }}
      />
      <div
        ref={activeSlideRef}
        className={cls.slide}
        style={{
          background: `linear-gradient(0deg, rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${joinPaths(
            basePath,
            toolItemLists[activeIndex].urlBg,
          )}) center / cover no-repeat`,
          zIndex: 2,
        }}
      />
    </div>
  );
};

CarouselBackground.displayName = 'CarouselBackground';
