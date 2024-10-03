import Products from "../components/Products/Products"
import TopProducts from "../components/TopProducts/TopProducts"
import React from "react";
import AOS from "aos"
import ProductCards from "../components/Products/Productcards";
// import Popup from "./components/Popup/Popup";

const Shopnow = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);
  
    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []); {
    return (
        <div>
        {/* <Products/> */}
        {/* <TopProducts handleOrderPopup={handleOrderPopup} />   */}
        <ProductCards/> 
        </div>
    )
}
}

export default Shopnow;
