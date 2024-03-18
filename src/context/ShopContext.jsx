import { createContext } from "react";
import all_product from '../components/assets/all_product.js';

export const product_context = createContext(null);

export default function ProductContextProvider(props){
    const allProduct = {all_product};
    return(
        
        <product_context.Provider value={allProduct}>
            {props.children}
        </product_context.Provider>
    );
}