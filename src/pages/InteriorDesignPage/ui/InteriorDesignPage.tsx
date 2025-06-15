import { memo } from 'react';

import { useDocumentTitle } from 'shared/lib/hooks/useDocumentTitle/useDocumentTitle';

interface InteriorDesignPageProps {
  className?: string;
}

const InteriorDesignPage = memo((props: InteriorDesignPageProps) => {
  const { className } = props;
  useDocumentTitle('Дизайн-проект интерьера');

  return <>PAGE: InteriorDesignPage</>;
});

InteriorDesignPage.displayName = 'MainPage';

export default InteriorDesignPage;
