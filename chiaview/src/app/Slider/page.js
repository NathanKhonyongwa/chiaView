// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hero Section</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/chia1.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="z-10 text-center px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            This is a sample hero section.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}