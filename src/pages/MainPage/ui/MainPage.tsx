import { memo } from 'react';

import { ToolCatalog } from 'widgets/ToolCatalog';
import { useDocumentTitle } from 'shared/lib/hooks/useDocumentTitle/useDocumentTitle';

interface MainPageProps {
  className?: string;
}

const MainPage = memo((props: MainPageProps) => {
  const { className } = props;
  useDocumentTitle('Главная');

  return <ToolCatalog />;
});

MainPage.displayName = 'MainPage';

export default MainPage;
