import { useEffect, useRef } from 'react';

export const useDocumentTitle = (title: string): void => {
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const speed = 0.15;
  const padding = '   ';
  const maxTitleWidth = 180;
  const font = '16px sans-serif';

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      document.title = title;
      return;
    }
    ctx.font = font;
    const fullWidth = ctx.measureText(title).width;
    if (fullWidth <= maxTitleWidth) {
      document.title = title;
      return;
    }

    const scrollTitle = title + padding;
    const length = scrollTitle.length;

    const animate = () => {
      positionRef.current += speed;
      if (positionRef.current >= length) positionRef.current = 0;

      const pos = Math.floor(positionRef.current);

      document.title = scrollTitle.slice(pos) + scrollTitle.slice(0, pos);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      document.title = title;
    };
  }, [title]);
};
