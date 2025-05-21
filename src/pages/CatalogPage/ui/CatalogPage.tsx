import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { CatalogGroup } from 'features/CatalogGroup';
import { CatalogGroupMocked, CatalogGroupType } from 'pages/CatalogPage/model/types/grope';

interface CatalogProps {
  className?: string;
}

const CatalogPage = memo((props: CatalogProps) => {
  const { className } = props;

  return (
    <div className={classNames('Catalog', {}, [className])}>
      {CatalogGroupMocked.map((group: CatalogGroupType) => {
        const { id, title, description } = group;
        return <CatalogGroup key={id} description={description} title={title} />;
      })}
    </div>
  );
});

CatalogPage.displayName = 'CatalogPage';

export default CatalogPage;
