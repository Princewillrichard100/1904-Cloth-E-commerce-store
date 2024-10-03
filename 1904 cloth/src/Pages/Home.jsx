import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import Hero from "../components/Hero/Hero";
// import Products from "../components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
// import TopProducts from "../components/TopProducts/TopProducts";
// import Banner from "../components/Banner/Banner";
// import Subscribe from "../components/Subscribe/Subscribe";
// import Testimonials from "../components/Testimonials/Testimonials";
// import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";


  const Home = () => {
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
    }, []);
  return (
    <div>
        
            
            <Hero handleOrderPopup={handleOrderPopup} />
            {/* <Products /> */}
            
            {/* <Banner /> */}
            {/* <Subscribe /> */}
            {/* <Products /> */}
            {/* <Testimonials /> */}
        
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default Home