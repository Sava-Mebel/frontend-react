import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { CatalogGroup } from 'features/CatalogGroup';
import { CatalogGroupMocked, CatalogGroupType } from 'pages/CatalogPage/model/types/group';
import { CatalogGroupID } from 'shared/config/routerConfig/routerConfig';
import { useDocumentTitle } from 'shared/lib/hooks/useDocumentTitle/useDocumentTitle';

import cls from './CatalogPage.module.scss';

interface CatalogProps {
  className?: string;
}

const CatalogPage = memo((props: CatalogProps) => {
  const { className } = props;
  useDocumentTitle('Каталог');

  return (
    <div className={classNames(cls.Catalog, {}, [className])}>
      {CatalogGroupMocked.map((group: CatalogGroupType) => {
        const { id, title, description } = group;
        return (
          <div className={cls.container} key={id}>
            <CatalogGroup
              key={id}
              description={description}
              title={title}
              toCatalog={CatalogGroupID.OTHER_FURNITURE}
            />
          </div>
        );
      })}
    </div>
  );
});

CatalogPage.displayName = 'CatalogPage';

export default CatalogPage;
