import Item from '../components/item/Item.jsx';
import arrow from '../components/assets/dropdown_icon.png';
import { useContext } from 'react';
import { product_context } from '../context/ShopContext';
import '../components/Css/shopcategory.css';

const ShopCategory = (props)=>{
    const {all_product} = useContext(product_context);
    return(
        <div className='shop-category'>
            <img src={props.banner} className='banner'/>
            <div className="shopCategory">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopCategory-sort">
                    Sort by <img src={arrow} alt="" />
                </div>
            </div>
            <div className="shop-product">
                {
                    all_product.map((item,i)=>{
                        if(item.category===props.category){
                          return  <Item key={i} id={item.id} name = {item.name} image = {item.image} new_price={item.new_price} old_price = {item.old_price} />
                        }
                    })
                }
            </div>
            <div className="loadMore">Explore More</div>
        </div>
    );

}
export default ShopCategory;