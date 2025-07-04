import { memo, useEffect, useRef } from 'react';
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

export const CarouselBackground = memo(
  ({ activeIndex, prevIndex, direction, basePath = '' }: CarouselBackgroundProps) => {
    const activeSlideRef = useRef<HTMLDivElement>(null);
    const prevSlideRef = useRef<HTMLDivElement>(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
      if (!activeSlideRef.current) return;

      if (isFirstRender.current) {
        isFirstRender.current = false;

        gsap.fromTo(
          activeSlideRef.current,
          {
            x: direction === 'left' ? '100%' : '-100%',
            opacity: 0,
          },
          {
            x: '0%',
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
          },
        );

        return;
      }

      if (!prevSlideRef.current) return;

      gsap.set([prevSlideRef.current, activeSlideRef.current], {
        willChange: 'transform, opacity',
        force3D: true,
      });

      const timeline = gsap.timeline();

      timeline.to(prevSlideRef.current, {
        x: direction === 'left' ? 'translate3d(-3%, 0, 0)' : 'translate3d(3%, 0, 0)',
        duration: 0.8,
        ease: 'power1.out',
      });

      timeline.fromTo(
        activeSlideRef.current,
        {
          x: direction === 'left' ? '100%' : '-100%',
          opacity: 0,
        },
        {
          x: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          clearProps: 'willChange',
        },
        '-=0.7',
      );

      return () => {
        gsap.set([prevSlideRef.current, activeSlideRef.current], {
          willChange: 'auto',
        });
      };
    }, [activeIndex, direction]);

    return (
      <div
        className={cls.carouselBackground}
        style={{
          backgroundColor: isFirstRender.current ? '#2b2b2b' : 'transparent',
        }}
      >
        {!isFirstRender.current && (
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
        )}

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
  },
);

CarouselBackground.displayName = 'CarouselBackground';
