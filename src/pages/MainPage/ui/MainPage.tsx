import { memo, useEffect } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

interface MainPageProps {
  className?: string;
}

const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  useEffect(() => {
    const selectorApp = document.querySelector('.app') as HTMLElement;

    if (selectorApp) {
      selectorApp.style.background = `url('/media/backgroundtest.png') no-repeat center center`;
      selectorApp.style.backgroundSize = 'cover';
    }
  }, []);

  return (
    <div className={classNames('MainPage', {}, [className])}>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 272px - 92px)', overflowY: 'hidden' }}>
        MAIN PAGE
      </main>
      <Footer />
    </div>
  );
});

MainPage.displayName = 'MainPage';

export default MainPage;
