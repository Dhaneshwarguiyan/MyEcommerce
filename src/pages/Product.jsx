import { useContext} from "react";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import { product_context } from "../context/ShopContext";
import { useParams } from "react-router";
import ProductDisplay from "../components/productDisplay/ProductDisplay";

const Product = ()=>{
    const {all_product} = useContext(product_context);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));
    return(
        <div>
            <Breadcrums product = {product}/>
            <ProductDisplay product = {product}/>
        </div>
    )

}
export default Product;