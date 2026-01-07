"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

import { FiMapPin, FiHeart, FiUsers } from "react-icons/fi";

const images = [
  {
    src: "/three.jpg",
    alt: "Chia View Mission 1",
  },
  {
    src: "/two.jpg",
    alt: "Chia View Mission 2",
  },
  {
    src: "/one.jpg",
    alt: "Chia View Mission 3",
  },
];

const location = {
  latitude: -13.6533, // Replace with Chia View's latitude
  longitude: 33.8833, // Replace with Chia View's longitude
};

export default function About() {
  const handleLocationClick = () => {
    const url = `https://www.openstreetmap.org/?mlat=${location.latitude}&mlon=${location.longitude}#map=15/${location.latitude}/${location.longitude}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <section className="relative py-20 px-4 md:px-20 bg-gray-100 mt-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-blue-800">
            About Chia View Mission
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg cursor-pointer"
              onClick={handleLocationClick}
            >
              <FiMapPin size={40} className="mx-auto mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold mb-4 text-center">Our Location</h2>
              <p className="text-gray-600 text-center">
                Chia View, Dowa, Malawi - a place where love and hope meet.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <FiUsers size={40} className="mx-auto mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold mb-4 text-center">Our Community</h2>
              <p className="text-gray-600 text-center">
                Join our family in Christ and experience God's love.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <FiHeart size={40} className="mx-auto mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
              <p className="text-gray-600 text-center">
                Spreading love, hope, and God's word in Chia View.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Our Story
            </h2>
            <p className="text-gray-600 text-center max-w-4xl mx-auto">
              Chia View Mission started with a vision to bring people closer to God.
              Today, we're a community of believers spreading love and hope.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Our Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}