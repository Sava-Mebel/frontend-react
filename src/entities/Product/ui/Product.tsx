import { classNames } from 'shared/lib/classNames/classNames';
import { Badge, BadgeTypes } from 'shared/ui/Badge/Badge';
import { Button } from 'shared/ui/Button/Button';
import { Select } from 'shared/ui/Select/Select';
import { PreviewGallery } from 'shared/ui/PreviewGallery/PreviewGallery';
import { DataFeedbackType, FeedbackCard } from 'entities/Product/ui/FeedbackCard/FeedbackCard';
import { ColorTool } from 'entities/Product/ui/ColorTool/ColorTool';

import cls from './Product.module.scss';

interface ProductProps {
  className?: string;
}

const feedbackMocked: DataFeedbackType[] = [
  {
    title: 'Кухня "Nordic" (скандинавский стиль)',
    text: "Выбрали 'Nordic' за лаконичность и функциональность. Шпон ореха приятно теплый на ощупь, столешница из кварца не царапается. Особенно радуют скрытые ручки и встроенная подсветка – выглядит стильно и современно. Сборка заняла всего день, все детали приехали без повреждений.",
    destination: '— Артем, Санкт-Петербург *(5/5 ⭐⭐⭐⭐⭐)*',
  },
  {
    title: 'Кухня "Nordic" (скандинавский стиль)',
    text: "Выбрали 'Nordic' за лаконичность и функциональность. Шпон ореха приятно теплый на ощупь, столешница из кварца не царапается. Особенно радуют скрытые ручки и встроенная подсветка – выглядит стильно и современно. Сборка заняла всего день, все детали приехали без повреждений.",
    destination: '— Артем, Санкт-Петербург *(5/5 ⭐⭐⭐⭐⭐)*',
  },
];

const mockedOptions = ['250х450х60', '250х450х70', '250х450х80', 'Опции как пример'];

export const Product = ({ className }: ProductProps) => {
  return (
    <div className={classNames(cls.Product, {}, [className])}>
      <div className={cls.containerInfo}>
        <PreviewGallery className={cls.gallery} />
        <div className={cls.info}>
          <div className={cls.badges}>
            <Badge mods={BadgeTypes.STARS_PICK} />
            <Badge mods={BadgeTypes.CLIENT_PICK} />
            <Badge mods={BadgeTypes.TOP_PICK} />
          </div>
          <div className={cls.productDetails}>
            <div className={cls.header}>
              <h1 className={cls.title}>Кухонный гарнитур</h1>
              <p className={cls.subTitle}>Скандинавские кухни</p>
            </div>
            <p className={cls.price}>от 95 000 ₽</p>
            <div className={cls.colors}>
              <span className={cls.spanTitle}>Выберете цвет</span>
              <ColorTool />
            </div>
            <div className={cls.with}>
              <span className={cls.spanTitle}>Выберете размер</span>
              <Select className={cls.select} options={mockedOptions} />
            </div>
            <Button className={cls.btn}>Рассчитать стоимость</Button>
          </div>
        </div>
      </div>

      <div className={cls.feedback}>
        <h3 className={cls.feedbackTitle}>Отзывы на данную мебель:</h3>
        <div className={cls.feedbackList}>
          {feedbackMocked.map((item, index) => (
            <FeedbackCard dataFeedback={item} key={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

Product.displayName = 'Product';
