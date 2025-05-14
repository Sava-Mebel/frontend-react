import cls from './IntroSection.module.scss'
import { AppLink, AppLinkTheme, AppLinkVariant } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

interface IntroSectionProps {
    className?: string,
}

export const IntroSection= ({className}: IntroSectionProps) => {

    return (
      <section className={cls.IntroSection} aria-labelledby="hero-title">
        <div className={cls.container}>
          <p className={cls.signature}>Sava Mebel</p>

          <h1 className={cls.title} id="hero-title">
            Создаём мебель вашей мечты — от эскиза до воплощения
          </h1>

          <p className={cls.subtitle}>
            Наша мастерская более 10 лет создает эксклюзивную мебель
            для тех, кто ценит безупречные формы, натуральные материалы и продуманные детали.
            Каждый проект — это гармония эргономики, стиля и ваших привычек.
          </p>

          <AppLink variant={AppLinkVariant.ROUTE} theme={AppLinkTheme.SECONDARY} to={RoutePath.catalog} className={cls.link}>
            <span className={cls.linkText}>Перейти в каталог</span>
          </AppLink>
        </div>
      </section>
    )
}
