"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaPlayCircle,
  FaArrowRight,
  FaChurch,
  FaPray,
  FaBible,
  FaHandsHelping
} from "react-icons/fa";

const slides = [
  {
    image: "/chia1.jpg",
    title: "Welcome to Chiaview Church",
    subtitle: "Preparing the world for Christ's return through faith, healing, and service",
    cta: "Join Us Sunday",
    gradient: "from-slate-900 via-slate-800 to-slate-700"
  },
  {
    image: "/chia2.jpg",
    title: "Growing Together in Christ",
    subtitle: "Deepen your faith through Biblical teaching and discipleship",
    cta: "Explore Ministries",
    gradient: "from-emerald-900 via-emerald-800 to-emerald-700"
  },
  {
    image: "/chia3.jpg",
    title: "Serving With Purpose",
    subtitle: "Impact Lilongwe through compassion, outreach, and community service",
    cta: "Get Involved",
    gradient: "from-rose-900 via-rose-800 to-rose-700"
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrent(index);
  }, []);

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
      {/* Main Slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 1.2 }
            }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat brightness-75"
              style={{ 
                backgroundImage: `url(${slides[current].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Multi-layered gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === current 
                  ? "w-10 bg-white/90 backdrop-blur-sm shadow-lg scale-110" 
                  : "bg-white/50 hover:bg-white/80 hover:scale-125"
              }`}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-8 left-6 right-6 lg:left-12 lg:right-12 h-1 bg-white/20 rounded-full overflow-hidden z-30">
          <motion.div 
            className="h-full bg-gradient-to-r from-amber-400 via-rose-400 to-emerald-400 rounded-full shadow-lg"
            initial={{ width: 0 }}
            animate={{ width: `${slideProgress}%` }}
            transition={{ 
              duration: 5, 
              ease: "linear",
              repeat: Infinity,
              repeatType: "restart"
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div 
        className="relative z-20 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Slide Number Indicator */}
          <motion.div 
            className="flex items-center space-x-2 mb-6 text-sm uppercase tracking-wider text-white/80 font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400" />
            <span>Slide {current + 1} of {slides.length}</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 lg:mb-8 leading-tight max-w-4xl drop-shadow-2xl"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 30px rgba(255,255,255,0.3)",
                "0 0 40px rgba(255,255,255,0.1)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            {slides[current].title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-slate-200/90 mb-12 lg:mb-16 max-w-2xl leading-relaxed drop-shadow-xl font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {slides[current].subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              href="/services"
              className="group relative bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white font-bold px-12 lg:px-16 py-6 lg:py-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-1 transition-all duration-700 flex items-center space-x-4 text-xl lg:text-2xl max-w-max"
            >
              <span className="relative z-10">{slides[current].cta}</span>
              <FaArrowRight className="text-2xl group-hover:translate-x-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 rounded-3xl transition-opacity duration-700" />
            </Link>

            <motion.button
              className="group flex items-center space-x-3 text-xl lg:text-2xl text-white/80 hover:text-white font-semibold px-8 py-6 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm rounded-3xl transition-all duration-500 hover:bg-white/10 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPlayCircle className="text-3xl" />
              <span>Watch Live</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 opacity-0 lg:opacity-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2 }}
        >
          <div className="w-6 h-6 border-2 border-white/60 rounded-full animate-ping" />
          <div className="text-xs uppercase tracking-wider text-white/60 font-semibold rotate-90 writing-mode-vertical-rl">
            Scroll
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 lg:w-20 lg:h-20 bg-white/20 hover:bg-white/40 backdrop-blur-xl border-2 border-white/30 hover:border-white/50 rounded-full flex items-center justify-center text-3xl lg:text-4xl text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-125"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        →
      </motion.button>

      <motion.button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 lg:w-20 lg:h-20 bg-white/20 hover:bg-white/40 backdrop-blur-xl border-2 border-white/30 hover:border-white/50 rounded-full flex items-center justify-center text-3xl lg:text-4xl text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-125"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ←
      </motion.button>
    </section>
  );
}
