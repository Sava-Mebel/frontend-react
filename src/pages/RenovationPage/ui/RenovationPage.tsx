import { memo } from 'react';

import { useDocumentTitle } from 'shared/lib/hooks/useDocumentTitle/useDocumentTitle';

interface RenovationPageProps {
  className?: string;
}

const RenovationPage = memo((props: RenovationPageProps) => {
  const { className } = props;
  useDocumentTitle('Ремонт квартир под ключ');

  return <>PAGE: InteriorDesignPage</>;
});

RenovationPage.displayName = 'MainPage';

export default RenovationPage;
