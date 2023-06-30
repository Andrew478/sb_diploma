import { useParams } from "react-router-dom";
import ProductCardLink from "../components/ProductCardLink";
import ProductList from "../components/ProductList";
import SimplePage from "../components/SimplePage";

export function Catalog({
    isCategory = false
}) {
    const { name } = useParams();

    return <>
        <SimplePage>
            {isCategory && <h1>Каталог товаров категории "{name}"</h1>}
            {!isCategory && <h1>Каталог товаров</h1>}
            <ProductList>
                <ProductCardLink />
                <ProductCardLink />
                <ProductCardLink />
                <ProductCardLink />
                <ProductCardLink />

                <ProductCardLink />
                <ProductCardLink />
                <ProductCardLink />
                <ProductCardLink />
                <ProductCardLink />

                <ProductCardLink />
                <ProductCardLink />
                <ProductCardLink />
                <ProductCardLink />
                <ProductCardLink />
            </ProductList>
        </SimplePage>
    </>
}