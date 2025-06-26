import { useEffect } from 'react';

interface UseBackgroundColorOptions {
  selector?: string;
  color?: string;
}

export const useBackgroundColor = ({ selector = '.app', color }: UseBackgroundColorOptions) => {
  useEffect(() => {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el || !color) return;

    const computedColor = color.startsWith('var(')
      ? getComputedStyle(document.documentElement)
          .getPropertyValue(color.replace(/var\((.*)\)/, '$1'))
          .trim()
      : color;

    const prevColor = el.style.backgroundColor;
    el.style.backgroundColor = computedColor;

    return () => {
      el.style.backgroundColor = prevColor;
    };
  }, [selector, color]);
};
