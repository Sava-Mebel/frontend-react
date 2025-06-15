import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { CatalogGroupID } from 'shared/config/routerConfig/routerConfig';
import { CatalogGroup } from 'features/CatalogGroup';
import { CatalogGroupMocked } from 'pages/CatalogPage/model/types/group';
import { useDocumentTitle } from 'shared/lib/hooks/useDocumentTitle/useDocumentTitle';

import cls from './CatalogGroup.module.scss';

interface CatalogGroupPageProps {
  className?: string;
}

const isCatalogGroupId = (id?: string): id is CatalogGroupID => {
  return Object.values(CatalogGroupID).includes(id as CatalogGroupID);
};

const CatalogGroupPage = memo((props: CatalogGroupPageProps) => {
  const { className } = props;
  const { groupId } = useParams<{ groupId: string }>();
  const currentGroup = CatalogGroupMocked.find((group) => group.groupId === groupId);

  useDocumentTitle(currentGroup?.title || '');

  if (!isCatalogGroupId(groupId)) {
    return <div className={classNames(cls.CatalogGroup, {}, [className])}>Группа не найдена</div>;
  }

  if (!currentGroup) {
    return (
      <div className={classNames(cls.CatalogGroup, {}, [className])}>Данные группы не найдены</div>
    );
  }

  return (
    <div className={classNames(cls.CatalogGroup, {}, [className])}>
      <CatalogGroup description={currentGroup.description} title={currentGroup.title} />
    </div>
  );
});

CatalogGroupPage.displayName = 'CatalogGroupPage';

export default CatalogGroupPage;
