"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaPlayCircle, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "/chia1.jpg",
    title: "Welcome to Chiaview Church",
    subtitle: "Preparing the world for Christ's return through faith, healing, and service",
    cta: "Join Us Sunday",
  },
  {
    image: "/chia2.jpg",
    title: "Growing Together in Christ",
    subtitle: "Deepen your faith through Biblical teaching and discipleship",
    cta: "Explore Ministries",
  },
  {
    image: "/chia3.jpg",
    title: "Serving With Purpose",
    subtitle: "Impact Lilongwe through compassion, outreach, and community service",
    cta: "Get Involved",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = useCallback((index) => setCurrent(index), []);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  const slideProgress = ((current % slides.length) / slides.length) * 100;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-90"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />

              {/* Slide Content */}
              <div
                className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-6xl mx-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white drop-shadow-2xl leading-tight mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mb-6 sm:mb-10 drop-shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTA */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Link
                    href="/services"
                    className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-700 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex items-center space-x-2"
                  >
                    <span>{slide.cta}</span>
                    <FaArrowRight />
                  </Link>

                  <button className="flex items-center space-x-2 text-white/80 hover:text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:bg-white/10">
                    <FaPlayCircle className="text-xl sm:text-2xl" />
                    <span>Watch Live</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              idx === current ? "w-8 bg-white/90" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
