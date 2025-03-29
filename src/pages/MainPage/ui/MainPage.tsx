import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface MainPageProps {
  className?: string;
}

const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  return <div className={classNames('MainPage', {}, [className])}>MAIN PAGE</div>;
});

MainPage.displayName = 'MainPage';

export default MainPage;
