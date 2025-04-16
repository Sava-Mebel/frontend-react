import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

interface MainPageProps {
  className?: string;
}

const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  return (
    <div className={classNames('MainPage', {}, [className])}>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 334px)' }}>MAIN PAGE</main>
      <Footer />
    </div>
  );
});

MainPage.displayName = 'MainPage';

export default MainPage;
