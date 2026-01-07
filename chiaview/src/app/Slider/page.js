"use client";

import { useEffect, useState } from "react";
import { FiMapPin, FiHeart, FiUsers } from "react-icons/fi";

const slides = [
  {
    title: "Welcome to Chia View Mission",
    subtitle: "Experience God's love in Dowa",
    color: "#08284cff", // Denim
    icon: <FiMapPin size={40} />,
  },
  {
    title: "Join Our Community",
    subtitle: "Find your family in Christ",
    color: "#08284cff", // Denim
    icon: <FiUsers size={40} />,
  },
  {
    title: "Spread Love & Hope",
    subtitle: "Be a light in Chia View",
    color: "#08284cff", // Denim
    icon: <FiHeart size={40} />,
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden text-white">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundColor: slide.color }}
        >
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div>
              <div className="mb-4">{slide.icon}</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8">
                {slide.subtitle}
              </p>
              <button className="bg-white text-gray-800 hover:bg-gray-200 transition px-6 py-3 rounded font-bold">
                Join Us
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}