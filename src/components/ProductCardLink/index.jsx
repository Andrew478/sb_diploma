import "./index.css";
import SiteImages from "../../assets/images";

/* Карточка товара в каталоге (ссылка на страницу товара) */
const ProductCardLink = ({
    img
}) => {
    img = img ? img : 'default';

    return (
    <div className="product-card-link">
        <img src={SiteImages[img]} className="product-card-link__img"></img>
        <div className="product-card-link__text-name">
            <p className="product-card-link__text-bold product-card-link__text-name__text1">Marc O'Polo</p>
            <p className="product-card-link__text-name__text2">Джинсы</p>
        </div>
        <div className="product-card-link__text-price">
            <p>11990₽</p>
        </div>
    </div>
    )
}

export default ProductCardLink;