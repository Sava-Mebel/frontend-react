import { memo } from 'react';

interface RenovationPageProps {
  className?: string;
}

const RenovationPage = memo((props: RenovationPageProps) => {
  const { className } = props;

  return <>PAGE: InteriorDesignPage</>;
});

RenovationPage.displayName = 'MainPage';

export default RenovationPage;
