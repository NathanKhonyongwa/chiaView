"use client";
import { motion } from "framer-motion";
import Navbar from "../app/Navbar/page";
import Slider from "../app/Slider/page";
import Mission from "../app/Mission/page";
import Footer from "../app/Footer/page";

export default function ConferenceLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">

      <Navbar/>
      <Slider/> 
      <Mission/> 
      <Footer/>  

    </main>
  );
}
