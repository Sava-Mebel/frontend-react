import { memo } from 'react';

import { ToolCatalog } from 'widgets/ToolCatalog';

interface MainPageProps {
  className?: string;
}

const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  return <ToolCatalog />;
});

MainPage.displayName = 'MainPage';

export default MainPage;
