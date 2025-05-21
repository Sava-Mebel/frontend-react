import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

interface CatalogGroupPageProps {
  className?: string;
}

const CatalogGroupPage = memo((props: CatalogGroupPageProps) => {
  const { className } = props;

  return <div className={classNames('Catalog', {}, [className])}></div>;
});

CatalogGroupPage.displayName = 'CatalogPage';

export default CatalogGroupPage;
