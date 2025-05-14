import {classNames} from "shared/lib/classNames/classNames";
import cls from './Product.module.scss'

interface ProductProps {
    className?: string,
}

export const Product= ({className}: ProductProps) => {
    let stop = ''

    return (
        <div className={classNames(cls.Product, {}, [className])}>
            {/* КОД КОМПОНЕНТА */}
        </div>
    )
}
