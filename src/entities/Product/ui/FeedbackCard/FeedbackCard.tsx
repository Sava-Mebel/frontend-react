import { classNames } from 'shared/lib/classNames/classNames';

import cls from './FeedbackCard.module.scss';

export interface DataFeedbackType {
  title?: string;
  text?: string;
  destination?: string;
}

interface FeedbackCardProps {
  className?: string;
  dataFeedback: DataFeedbackType;
}

export const FeedbackCard = (props: FeedbackCardProps) => {
  const { className, dataFeedback } = props;
  const { title, destination, text } = dataFeedback;
  return (
    <div className={classNames(cls.FeedbackCard, {}, [className])}>
      <h2 className={cls.title}>{title}</h2>
      <p className={cls.text}>{text}</p>
      <span className={cls.destination}>{destination}</span>
    </div>
  );
};

FeedbackCard.displayName = 'FeedbackCard';
