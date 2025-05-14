import { memo, useEffect } from 'react';

import { IntroSection } from 'widgets/IntroSection';

interface MainPageProps {
  className?: string;
}

const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  useEffect(() => {
    const selectorApp = document.querySelector('.app__main') as HTMLElement;

    if (selectorApp) {
      const originalBackground = selectorApp.style.background;
      const originalBackgroundSize = selectorApp.style.backgroundSize;

      selectorApp.style.background = `url('/media/background.png') no-repeat center center`;
      selectorApp.style.backgroundSize = 'cover';

      return () => {
        selectorApp.style.background = originalBackground;
        selectorApp.style.backgroundSize = originalBackgroundSize;
      }
    }
  }, []);

  return (
    <IntroSection />
  );
});

MainPage.displayName = 'MainPage';

export default MainPage;
