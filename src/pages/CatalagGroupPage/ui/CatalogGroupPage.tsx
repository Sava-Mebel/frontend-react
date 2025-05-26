import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { CatalogGroupID } from 'shared/config/routerConfig/routerConfig';
import { CatalogGroup } from 'features/CatalogGroup';
import { CatalogGroupMocked } from 'pages/CatalogPage/model/types/group';

interface CatalogGroupPageProps {
  className?: string;
}

const isCatalogGroupId = (id?: string): id is CatalogGroupID => {
  return Object.values(CatalogGroupID).includes(id as CatalogGroupID);
};

const CatalogGroupPage = memo((props: CatalogGroupPageProps) => {
  const { className } = props;
  const { groupId } = useParams<{ groupId: string }>();

  if (!isCatalogGroupId(groupId)) {
    return <div className={classNames('Catalog', {}, [className])}>Группа не найдена</div>;
  }

  const currentGroup = CatalogGroupMocked.find((group) => group.groupId === groupId);

  if (!currentGroup) {
    return <div className={classNames('Catalog', {}, [className])}>Данные группы не найдены</div>;
  }

  return <CatalogGroup description={currentGroup.description} title={currentGroup.title} />;
});

CatalogGroupPage.displayName = 'CatalogGroupPage';

export default CatalogGroupPage;
