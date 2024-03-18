import Hero from "../components/Hero-section/Hero";
import NewCollection from "../components/newcollections/NewCollecttion";
import NewsLetter from "../components/newsletter/NewsLetter.jsx";
import Offfers from "../components/offer/Offers";
import Popular from "../components/popular/Popular";

const Shop = ()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offfers/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    )

}
export default Shop;