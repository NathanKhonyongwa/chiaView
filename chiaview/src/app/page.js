"use client";

import { motion } from "framer-motion";
import Navbar from "../app/Navbar/page";
import Slider from "../app/Slider/page";

export default function ConferenceLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">

      <Navbar/>
      <Slider/>
      
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Seventh-day Adventist Conference
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-lg"
        >
          Coordinating ministry, evangelism, and mission across churches to prepare a people for the soon return of Jesus Christ.
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <a className="bg-white text-green-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
            Our Mission
          </a>
          <a className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-900 transition">
            Departments
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          About the Conference
        </motion.h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600">
          The Seventh-day Adventist Conference provides spiritual leadership,
          administrative oversight, and strategic direction to local churches,
          institutions, and ministries within its territory.
        </p>
      </section>

      {/* Focus Areas */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center">Our Core Focus</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            "Evangelism & Mission",
            "Education & Youth Ministries",
            "Health & Community Outreach",
          ].map((focus, i) => (
            <motion.div
              key={focus}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-xl font-semibold">{focus}</h3>
              <p className="mt-3 text-sm text-gray-600">
                Christ-centered leadership strengthening the church and community.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Conference Leadership</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {["President", "Executive Secretary", "Treasurer"].map((role, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow text-center"
            >
              <p className="font-semibold text-lg">{role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Serving Together in Christ</h2>
        <p className="mt-4 max-w-xl mx-auto">
          Partner with us as we empower churches and advance God’s mission.
        </p>

        <a className="inline-block mt-6 bg-white text-green-900 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
          Contact the Conference
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center text-sm">
        <p>© {new Date().getFullYear()} Seventh-day Adventist Conference</p>
        <p className="mt-2">
          The Bible is our foundation · Christ is our focus · Mission is our calling
        </p>
      </footer>

    </main>
  );
}
