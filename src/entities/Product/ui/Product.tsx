import { classNames } from 'shared/lib/classNames/classNames';
import { Badge, BadgeTypes } from 'shared/ui/Badge/Badge';
import { Button } from 'shared/ui/Button/Button';
import { Select } from 'shared/ui/Select/Select';
import { PreviewGallery } from 'shared/ui/PreviewGallery/PreviewGallery';
import { ColorTool } from 'entities/Product/ui/ColorTool/ColorTool';
import { Tabs } from 'shared/ui/Tabs/Tabs';
import { TabContent } from 'shared/ui/TabContent/TabContent';
import { FeedbackCard } from 'entities/Product/ui/FeedbackCard/FeedbackCard';

import { feedbackMocked, FeedbackType } from '../model/feedback';
import cls from './Product.module.scss';

interface ProductProps {
  className?: string;
}

const SIZE_OPTIONS = ['250х450х60', '250х450х70', '250х450х80', 'Опции как пример'];

const characteristics = [
  {
    title: 'Фасад',
    description: 'шпон Орех американский',
  },
  {
    title: 'Корпус',
    description: 'ЛДСП Эггер, шпон Орех американский',
  },
  {
    title: 'Дверные системы',
    description: 'распашные фасады',
  },
  {
    title: 'Тип мебели',
    description: 'распашные шкафы, столы, тумбы, стеновые панели',
  },
  {
    title: 'Вид шкафа',
    description: 'корпусной',
  },
];

const ProductCharacteristics = () => (
  <TabContent title="Характеристики">
    <div className={cls.info}>
      {characteristics.map(({ title, description }, i) => (
        <div key={i} className={cls.item}>
          <span className={cls.itemTitle}>
            {title}:{'\u00A0'}
          </span>
          <p className={cls.itemDescription}>{description}</p>
        </div>
      ))}

      <br />

      <div>
        <p className={cls.tabContext}>
          Данное изделие изготавливается на заказ по индивидуальным параметрам и размерам*
          заказчика. В качестве фурнитуры мы используем лучшие бренды (hettich, blum, blu tek, и
          др). Многообразие выбора позволит Вам найти идеальное решение для максимальной
          функциональности Ваших изделий.
          <span>*могут быть технические ограничения</span>
        </p>
      </div>

      <div>
        <p className={cls.tabContext}>
          Комфортный домашний кабинет с отделкой шпоном — это стильное мебельное решение
          организовать пространство для работы и творчества.
          <br />
          <br />
          Домашнее рабочее место требует грамотного оснащения мебелью, чтобы все необходимые вещи
          находились под рукой, а книги, документы, оргтехника и прочие вещи можно было убрать в
          шкафы и тумбы. Продуманные закрытые и открытые системы хранения помогут избежать
          беспорядка. Просторный письменный стол с тумбой, стеновая панель и навесные шкафы
          представляет собой целую систему функциональных зон. В верхних навесных шкафах с открытыми
          полками удобно хранить книги, фотографии, сувениры. Открытые полки обеспечивают легкий
          доступ к необходимым предметам, которые используются регулярно.
          <br />
          <br />
          Шпонированные фасады мебели оснащены отталкивателями, что придает им современный вид.
          Комплект мебели отличается лаконичным дизайном, подходящим для любителей интерьеров в
          минималистическом стиле. Выбор стеновой панели в древесном декоре может существенно
          изменить атмосферу вашего кабинета. Теплая древесная текстура шпона дуба добавит тепла и
          уюта.
        </p>
      </div>
    </div>
  </TabContent>
);

const DeliveryAndPayment = () => (
  <>
    <TabContent title="Доставка" link={{ label: 'Прайс на доставку', to: '/delivery-price' }}>
      <p className={cls.tabContext}>
        Наша компания производит мебель на заказ, и весь сервис по доставке и сборке мы обеспечиваем
        сами.
        <br />
        <br />
        У нас собственная служба доставки, которая гарантирует надежность и своевременность
        выполнения заказов в пределах Москвы и МО.
        <br />
        <br />
        Если необходимо доставить Вашу мебель в другой регион России, мы отправляем заказ с помощью
        надежных транспортных компаний.
        <br />
        <br />
        Весь груз тщательно упаковывается в качественную пленку и картон, чтобы исключить любое
        повреждение груза. Мы сотрудничаем с проверенными транспортными компаниями, чтобы
        гарантировать сохранность груза и соблюдение сроков доставки.
        <br />
        <br />
        Доставка заказа осуществляется в удобное для клиента время, по согласованию. Сборка мебели
        также осуществляется в удобное для клиента время или в день доставки.
        <br />
        <br />
        Стоимость доставки зависит от вашего адреса и рассчитывается индивидуально.
      </p>
    </TabContent>

    <TabContent title="Оплата" link={{ label: 'Прайс на оплату', to: '/payment-price' }}>
      <p className={cls.tabContext}>
        Мы работаем с любой удобной клиенту формой оплаты: наличный и безналичный расчет по
        банковским картам, а также оплата через систему быстрых платежей по qr-коду.
        <br />
        <br />
        Для заказов на большую сумму или заказов от юридических лиц возможна оплата по банковским
        реквизитам.
        <br />
        <br />
        Оплата заказов осуществляется в 2 этапа:
        <br />
        <br />
        Предоплата - после которой начинается работа над заказом;
        <br />
        <br />
        Постоплата - по готовности заказа, перед доставкой.
      </p>
    </TabContent>
  </>
);

const WarrantyAndFeedback = () => (
  <>
    <TabContent title="Гарантия">
      <p className={cls.tabContext}>
        Мы производим качественную мебель на заказ, изготовленную с использованием современных
        технологий и материалов.
        <br />
        <br />
        Наша компания предоставляет гарантию на всю продукцию и сервисное обслуживание.
        <br />
        <br />
        Гарантия на всю мебель составляет 3 года и предоставляется с момента подписания всех
        документов по выполнению заказа.
        <br />
        <br />
        У нас работает собственная служба сервиса.
        <br />
        <br />
        При обнаружении рекламации наши сотрудники сервисной службы обязательно оформят заявку на
        замену и производство соответствующей детали.
        <br />
        <br />
        Наши сервисные инженеры в период эксплуатации мебели осуществляют выезды и решают вопросы
        клиента вплоть до подтягивания петель или отладки раздвижной системы дверей-купе.
      </p>
    </TabContent>
    <TabContent title="Отзывы" link={{ label: 'Оставить отзыв', to: '/review' }}>
      <div className={cls.feedback}>
        <div className={cls.feedbackList}>
          {feedbackMocked.map((item: FeedbackType) => (
            <FeedbackCard dataFeedback={item} key={item.id} />
          ))}
        </div>
      </div>
    </TabContent>
  </>
);

const ProductDetails = () => (
  <div className={cls.productDetails}>
    <div className={cls.header}>
      <h1 className={cls.title}>Кухонный гарнитур</h1>
      <p className={cls.subTitle}>Скандинавские кухни</p>
    </div>
    <p className={cls.price}>от 95 000 ₽</p>
    <div className={cls.colors}>
      <span className={cls.spanTitle}>Выберете цвет</span>
      <ColorTool className={cls.colorTool} />
    </div>
    <div className={cls.with}>
      <span className={cls.spanTitle}>Выберете размер</span>
      <Select className={cls.select} options={SIZE_OPTIONS} />
    </div>
    <Button className={cls.btn}>Рассчитать стоимость</Button>
  </div>
);

const ProductBadges = () => (
  <div className={cls.badges}>
    <Badge mods={BadgeTypes.STARS_PICK} />
    <Badge mods={BadgeTypes.CLIENT_PICK} />
    <Badge mods={BadgeTypes.TOP_PICK} />
  </div>
);

export const Product = ({ className }: ProductProps) => {
  const productTabs = [
    { label: 'Характеристики', content: <ProductCharacteristics /> },
    { label: 'Доставка и оплата', content: <DeliveryAndPayment /> },
    { label: 'Гарантия и отзыв', content: <WarrantyAndFeedback /> },
  ];

  return (
    <div className={classNames(cls.Product, {}, [className])}>
      <div className={cls.containerInfo}>
        <PreviewGallery className={cls.gallery} />
        <div className={cls.info}>
          <ProductBadges />
          <ProductDetails />
        </div>
      </div>

      <Tabs tabs={productTabs} defaultActive={0} />
    </div>
  );
};

Product.displayName = 'Product';
ProductBadges.displayName = 'ProductBadges';
ProductDetails.displayName = 'ProductDetails';
WarrantyAndFeedback.displayName = 'WarrantyAndFeedback';
ProductCharacteristics.displayName = 'ProductCharacteristics';
DeliveryAndPayment.displayName = 'DeliveryAndPayment';
