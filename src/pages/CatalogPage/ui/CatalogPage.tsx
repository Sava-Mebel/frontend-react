import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { CatalogCategoryRoutes } from 'shared/config/routerConfig/routerConfig';

interface CatalogProps {
  className?: string;
}

const CatalogPage = memo((props: CatalogProps) => {
  const { className } = props;
  const { category } = useParams<{ category: string }>();

  console.log('CATEGORY:', category);

  const isCategoryValid = Object.values(CatalogCategoryRoutes).includes(
    category as CatalogCategoryRoutes,
  );

  return (
    <div className={classNames('Catalog', {}, [className])}>
      Catalog Page {'-->'}{' '}
      {isCategoryValid ? (
        category
      ) : (
        <div>Данного раздела не существует. Вернуться к списку категорий</div>
      )}
    </div>
  );
});

CatalogPage.displayName = 'CatalogPage';

export default CatalogPage;
