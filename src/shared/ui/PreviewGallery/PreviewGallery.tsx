import React, { useState } from 'react';

import NextIcon from 'shared/assets/icon/next.svg';
import BackIcon from 'shared/assets/icon/back.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './PreviewGallery.module.scss';

interface PreviewGalleryProps {
  className?: string;
  images?: string[];
  visibleCount?: number;
}

const testImgArr: string[] = [
  '/media/catalog/preview.png',
  '/media/catalog/preview.png',
  '/media/catalog/preview.png',
  '/media/catalog/preview.png',
  '/media/catalog/preview.png',
  '/media/catalog/preview.png',
];

export const PreviewGallery = (props: PreviewGalleryProps) => {
  const { images = testImgArr, visibleCount = 4, className } = props;
  const [activeIndex, setActiveIndex] = useState(0); // большая картинка
  const [startIndex, setStartIndex] = useState(0); // индекс начала видимой полоски

  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + visibleCount < images.length;

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const scrollLeft = () => {
    if (canScrollLeft) setStartIndex(startIndex - 1);
  };

  const scrollRight = () => {
    if (canScrollRight) setStartIndex(startIndex + 1);
  };

  const visibleThumbnails = images.slice(startIndex, startIndex + visibleCount);
  console.log(scrollLeft, 'scrollLeft');

  return (
    <div className={classNames(cls.PreviewGallery, {}, [className])}>
      <div className={cls.mainContainer}>
        <img className={cls.mainImg} src={images[activeIndex]} alt="Selected" />
      </div>

      <div className={cls.miniCarousel}>
        <Button
          className={cls.btn}
          theme={ButtonTheme.CLEAR}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <BackIcon className={cls.icon} />
        </Button>

        <div className={cls.containerTumbnails}>
          {visibleThumbnails.map((img, i) => {
            const realIndex = startIndex + i;
            return (
              <img
                key={realIndex}
                src={img}
                alt={`Thumbnail ${realIndex}`}
                onClick={() => handleThumbnailClick(realIndex)}
                className={classNames(cls.thumbnail, {
                  [cls.active]: realIndex === activeIndex,
                })}
              />
            );
          })}
        </div>

        <Button
          className={cls.btn}
          theme={ButtonTheme.CLEAR}
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <NextIcon className={cls.icon} />
        </Button>
      </div>
    </div>
  );
};

PreviewGallery.displayName = 'PreviewGallery';
