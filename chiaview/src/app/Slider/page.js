"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/chia1.jpg",
    title: "Welcome to Our Church",
    subtitle: "A place of faith, hope, and love",
  },
  {
    image: "/chia2.jpg",
    title: "Growing Together in Christ",
    subtitle: "Building lives through the Word",
  },
  {
    image: "/chia3.jpg",
    title: "Serving With Purpose",
    subtitle: "Impacting our community with love",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}