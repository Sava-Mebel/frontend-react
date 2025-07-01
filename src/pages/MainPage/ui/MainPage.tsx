import { memo } from 'react';

import { useDocumentTitle } from 'shared/lib/hooks/useDocumentTitle/useDocumentTitle';
import { MainCarousel } from 'features/MainCarousel';

interface MainPageProps {
  className?: string;
}

const MainPage = memo((props: MainPageProps) => {
  const { className } = props;
  useDocumentTitle('Главная');

  return <MainCarousel />;
});

MainPage.displayName = 'MainPage';

export default MainPage;
