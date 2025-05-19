import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

interface CatalogProps {
  className?: string;
}

const CatalogPage = memo((props: CatalogProps) => {
  const { className } = props;

  return <div className={classNames('Catalog', {}, [className])}></div>;
});

CatalogPage.displayName = 'CatalogPage';

export default CatalogPage;
