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
      next.style.backgroundImage = `url(${imageUrl})`;
      next.style.transition = `opacity ${fadeDuration}ms ease-in-out`;
      active.style.transition = `opacity ${fadeDuration}ms ease-in-out`;

      next.style.opacity = '1';
      active.style.opacity = '0';

      setTimeout(() => {
        activeLayerRef.current = activeLayerRef.current === 1 ? 2 : 1;
        lastImageRef.current = imageUrl;
        isTransitioningRef.current = false;
      }, fadeDuration);
    };

    img.onerror = () => {
      isTransitioningRef.current = false;
    };
  }, [imageUrl, fadeDuration]);
};
