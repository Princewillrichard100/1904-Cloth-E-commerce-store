import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'info@1904cloth.com', href: 'mailto:info@1904cloth.com' },
    { icon: <FaPhone />, text: '(555) 123-4567', href: 'tel:+15551234567' },
    { icon: <FaMapMarkerAlt />, text: '123 Vintage Lane, Retro City, RC 12345', href: 'https://maps.google.com' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-gray-800 dark:text-white text-center"
        >
          Contact Us
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              We'd love to hear from you! Whether you have a question about our products, need styling advice, or just want to share your thoughts, we're here to help.
            </p>
            <ul className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <span className="text-2xl text-primary mr-4">{item.icon}</span>
                  <a href={item.href} className="hover:text-primary transition-colors duration-300">{item.text}</a>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                <FaClock className="mr-2 text-primary" /> Business Hours
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Monday - Friday: 9am - 6pm</li>
                <li>Saturday: 10am - 4pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Follow Us</h3>
              <div className="flex space-x-4">
                {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'subject'].map((field) => (
                <motion.div key={field} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <label htmlFor={field} className="block mb-2 text-gray-700 dark:text-gray-300 capitalize">{field}</label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary transition-all duration-300"
                    required
                  />
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary transition-all duration-300"
                  required
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition-colors duration-300 text-lg font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-lg shadow-lg"
            >
              Thank you for your message! We'll get back to you soon.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;