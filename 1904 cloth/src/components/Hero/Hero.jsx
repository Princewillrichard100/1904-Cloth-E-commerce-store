
import PropTypes from 'prop-types'; // Import PropTypes
import MenWearImage from "../../assets/hero/sale.png";
import WomenWearImage from "../../assets/hero/shopping.png";
import SaleImage from "../../assets/hero/women.png";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const ImageList = [
  {
    id: 1,
    img: MenWearImage,
    title: "Up to 50% off on all Men's Wear",
    description:
      "Explore our exclusive collection of men's wear with up to 50% off. Quality and style combined for your comfort.",
  },
  {
    id: 2,
    img: WomenWearImage,
    title: "30% off on all Women's Wear",
    description:
      "Discover stunning women's wear at 30% off. Refresh your wardrobe with our latest fashion trends.",
  },
  {
    id: 3,
    img: SaleImage,
    title: "70% off on all Products Sale",
    description:
      "Don’t miss out on our massive sale with up to 70% off on all products. Shop now and save big!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]"></div>
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <Link to="/shopnow"><button
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Shop Now!!
                    </button>
                    </Link>
                  </div>
                </div>
                {/* Image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt="Hero"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Define prop types for the Hero component
Hero.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,  // Specify that handleOrderPopup is a required function
};

export default Hero;
