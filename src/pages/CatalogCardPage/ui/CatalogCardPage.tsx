import { memo } from 'react';

import { Product } from 'entities/Product';

interface CatalogCardPageProps {
  className?: string;
}

const CatalogCardPage = memo((props: CatalogCardPageProps) => {
  const { className } = props;

  return <Product />;
});

CatalogCardPage.displayName = 'CatalogCardPage';

export default CatalogCardPage;
