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

    // Старый слой уходит назад с мягкостью и лёгким блюром
    timeline.to(prevSlideRef.current, {
      scale: 0.95,
      opacity: 0.4,
      x: direction === 'left' ? '-5%' : '5%',
      filter: 'blur(4px)',
      duration: 1.2,
      ease: 'sine.inOut',
    });

    // Новый слой въезжает плавно и сверху
    timeline.fromTo(
      activeSlideRef.current,
      {
        x: direction === 'left' ? '100%' : '-100%',
        opacity: 0,
        scale: 1.05,
        filter: 'blur(2px)',
      },
      {
        x: '0%',
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.4,
        ease: 'expo.out',
      },
      '-=0.8', // перекрытие анимаций
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
