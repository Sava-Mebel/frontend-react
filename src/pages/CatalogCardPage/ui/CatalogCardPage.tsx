import { memo } from 'react';

import { Product } from 'entities/Product';
import { useDocumentTitle } from 'shared/lib/hooks/useDocumentTitle/useDocumentTitle';

interface CatalogCardPageProps {
  className?: string;
}

const CatalogCardPage = memo((props: CatalogCardPageProps) => {
  const { className } = props;
  useDocumentTitle('Тестовая карточка');

  return <Product />;
});

CatalogCardPage.displayName = 'CatalogCardPage';

export default CatalogCardPage;
