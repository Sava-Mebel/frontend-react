import { useEffect } from 'react';

export const useAppBackground = (backgroundUrl: string) => {
  useEffect(() => {
    const selectorApp = document.querySelector('.app') as HTMLElement | null;

    if (selectorApp) {
      const prevStyles = {
        background: selectorApp.style.background,
        backgroundSize: selectorApp.style.backgroundSize,
      };

      selectorApp.style.background = `url('${backgroundUrl}') no-repeat center center`;
      selectorApp.style.backgroundSize = 'cover';

      return () => {
        selectorApp.style.background = prevStyles.background;
        selectorApp.style.backgroundSize = prevStyles.backgroundSize;
      };
    }
  }, [backgroundUrl]);
};
