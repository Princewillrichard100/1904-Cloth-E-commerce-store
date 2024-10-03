import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination} from 'swiper/modules'; // Import Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaHistory, FaLeaf, FaTshirt, FaUsers, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import image from "../components/Hero/shopping.png";
import './TypewriterEffect.css'; // CSS for typewriter effect

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: {
      title: 'Our Mission',
      content: 'To preserve and celebrate the fashion of the early 1900s, making it accessible and relevant for today\'s style-conscious individuals.',
      icon: <FaHistory className="text-4xl mb-4 text-primary" />
    },
    sustainability: {
      title: 'Sustainability',
      content: 'We are committed to sustainable fashion practices, using eco-friendly materials and ethical production methods.',
      icon: <FaLeaf className="text-4xl mb-4 text-primary" />
    },
    quality: {
      title: 'Quality Craftsmanship',
      content: 'Each piece is meticulously crafted to ensure the highest quality and authenticity to the era we represent.',
      icon: <FaTshirt className="text-4xl mb-4 text-primary" />
    },
    community: {
      title: 'Our Community',
      content: 'We foster a community of vintage fashion enthusiasts, sharing knowledge and passion for early 20th-century style.',
      icon: <FaUsers className="text-4xl mb-4 text-primary" />
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-gray-800 dark:text-white text-center"
        >
          About 1904 Cloth
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              className="rounded-lg shadow-lg"
            >
              <SwiperSlide>
                <img src={image} alt="1904 Cloth Store" className="rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image} alt="Vintage Fashion" className="rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image} alt="1904 Collection" className="rounded-lg" />
              </SwiperSlide>
            </Swiper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to 1904 Cloth, where we bring the elegance and charm of early 20th-century fashion to the modern wardrobe.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Founded in [year], our passion for vintage style drives us to curate a collection that captures the essence of 1904 and the surrounding era.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our team of fashion enthusiasts and historians work tirelessly to source authentic pieces and create faithful reproductions, ensuring that each item tells a story of a bygone era.
            </p>
          </motion.div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(tabContent).map(([key, { title, content, icon }]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setActiveTab(key)}
              >
                <div className="text-center mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-primary/10 dark:bg-primary/5 p-8 rounded-lg shadow-inner"
        >
          <div className="flex justify-center mb-6">
            <FaQuoteLeft className="text-4xl text-primary" />
          </div>
          <blockquote className="text-2xl text-center text-gray-700 dark:text-gray-300 italic mb-6 ">
            "Fashion is not something that exists in dresses only. Fashion is in the sky,
            
             in the street, fashion has to do with ideas, the way we live, what is happening."
          </blockquote>
          <div className="flex justify-center mb-4">
            <FaQuoteRight className="text-4xl text-primary" />
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400">- Coco Chanel</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
