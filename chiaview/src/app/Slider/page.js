"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/one.jpg",
    title: "Welcome to Our Website",
    subtitle: "This is a sample hero section.",
  },
  {
    image: "/two.jpg",
    title: "Building the Future",
    subtitle: "We create modern digital experiences.",
  },
  {
    image: "/one.jpg",
    title: "Grow With Us",
    subtitle: "Innovation. Technology. Excellence.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <title>Hero Slider</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-screen overflow-hidden text-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                quality={100}
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                  {slide.subtitle}
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 transition px-6 py-3 rounded font-bold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
