import { useEffect, useRef } from 'react';

interface UseBackgroundSwitcherOptions {
  fadeDuration?: number;
}

export const useBackgroundSwitcher = (
  imageUrl: string | undefined,
  options: UseBackgroundSwitcherOptions = {},
) => {
  const { fadeDuration = 1000 } = options;
  const activeLayerRef = useRef<1 | 2>(1);
  const lastImageRef = useRef<string | null>(null);
  const isTransitioningRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!imageUrl) return;

    if (imageUrl === lastImageRef.current || isTransitioningRef.current) return;

    const bg1 = document.getElementById('bg1') as HTMLElement | null;
    const bg2 = document.getElementById('bg2') as HTMLElement | null;
    if (!bg1 || !bg2) return;

    const active = activeLayerRef.current === 1 ? bg1 : bg2;
    const next = activeLayerRef.current === 1 ? bg2 : bg1;

    isTransitioningRef.current = true;

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      // Подготовка следующего слоя для анимации
      next.style.backgroundImage = `url(${imageUrl})`;

      next.style.transition = '';
      active.style.transition = '';

      next.style.opacity = '0';
      active.style.opacity = '1';

      next.style.backgroundSize = '100%';
      active.style.backgroundSize = '100%';

      // Запускаем анимацию на следующем кадре, чтобы transition сработал
      requestAnimationFrame(() => {
        next.style.transition = `opacity ${fadeDuration}ms ease-in-out, background-size ${fadeDuration}ms ease-in-out`;
        active.style.transition = `opacity ${fadeDuration}ms ease-in-out`;

        next.style.opacity = '1';
        next.style.backgroundSize = '110%'; // эффект приближения
        active.style.opacity = '0';
      });

      // По окончании анимации переключаем активный слой
      timeoutRef.current = setTimeout(() => {
        activeLayerRef.current = activeLayerRef.current === 1 ? 2 : 1;
        lastImageRef.current = imageUrl;
        isTransitioningRef.current = false;

        // Сбрасываем backgroundSize для следующего использования
        active.style.backgroundSize = '100%';
      }, fadeDuration);
    };

    img.onerror = () => {
      isTransitioningRef.current = false;
    };

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      // Сбросим opacity и transition, но оставим backgroundImage чтобы избежать мерцания
      const resetLayer = (el: HTMLElement | null) => {
        if (el) {
          el.style.opacity = '0';
          el.style.transition = '';
          el.style.backgroundSize = '100%';
        }
      };

      resetLayer(bg1);
      resetLayer(bg2);

      lastImageRef.current = null;
      isTransitioningRef.current = false;
    };
  }, [imageUrl, fadeDuration]);
};
