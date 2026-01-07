"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  MdGroups,
  MdChurch,
  MdVolunteerActivism,
  MdLocationOn,
  MdLightbulb,
  MdFavorite
} from "react-icons/md";
import {
  FaCross,
  FaPray,
  FaBible,
  FaHandsHelping
} from "react-icons/fa";

export default function OurMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [mounted, setMounted] = useState(false);
  const [counts, setCounts] = useState({
    members: 0,
    years: 0,
    volunteers: 0,
    lives: 0,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isInView || !mounted) return;

    const targets = { members: 500, years: 25, volunteers: 50, lives: 1000 };
    const duration = 2500;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        members: Math.floor(easeOut * targets.members),
        years: Math.floor(easeOut * targets.years),
        volunteers: Math.floor(easeOut * targets.volunteers),
        lives: Math.floor(easeOut * targets.lives),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, mounted]);

  const stats = [
    { label: "Active Members", value: counts.members, icon: MdGroups },
    { label: "Years Serving", value: counts.years, icon: MdChurch },
    { label: "Weekly Volunteers", value: counts.volunteers, icon: MdVolunteerActivism },
    { label: "Lives Impacted", value: counts.lives, icon: MdFavorite },
  ];

  const pillars = [
    { icon: FaPray, title: "Worship Together", desc: "Experience authentic worship that draws us closer to God." },
    { icon: FaBible, title: "Grow in Faith", desc: "Deepen your relationship through Biblical teaching." },
    { icon: FaHandsHelping, title: "Serve with Love", desc: "Bless our community with God-given gifts." },
  ];

  return (
    <section
      ref={ref}
      id="mission-section"
      className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-50/90 via-white to-slate-50/70 overflow-hidden"
    >
      {/* Background Animations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/40 via-transparent to-slate-100/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-slate-200/30 to-transparent rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-60 right-20 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-transparent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-40 left-1/2 w-80 h-80 bg-gradient-to-r from-rose-200/20 to-transparent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Badge */}
        <motion.div
          className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-xl border border-slate-200/70 rounded-2xl shadow-xl mb-8 lg:mb-16 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-2.5 h-2.5 bg-gradient-to-r from-slate-600 to-slate-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
          <span className="text-lg font-semibold text-slate-800 tracking-wide uppercase">Chiaview Mission</span>
          <MdLightbulb className="ml-2 text-xl text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
        </motion.div>

        {/* Hero Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
            Chiaview's Mission
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-500 mx-auto rounded-full shadow-md overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-400 animate-shimmer" />
          </div>
        </motion.div>

        {/* Stats */}
        {mounted && (
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 lg:mb-28"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
              hidden: {}
            }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="group relative p-8 lg:p-10 bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 overflow-hidden cursor-default"
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="relative z-10 text-center space-y-4">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-700">
                      <Icon className="text-2xl lg:text-3xl text-white drop-shadow-lg" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-none">
                        {stat.value.toLocaleString()}+
                      </div>
                      <p className="text-slate-800 font-semibold text-lg lg:text-xl tracking-tight">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-white/95 backdrop-blur-3xl border border-slate-200/70 rounded-3xl shadow-3xl p-10 lg:p-16 mb-20 lg:mb-28 relative overflow-hidden"
        >
          <div className="absolute top-6 left-6 w-px h-32 bg-gradient-to-b from-slate-400/80 to-slate-200 transform rotate-12" />
          <div className="absolute top-12 right-12 w-24 h-24 bg-gradient-to-r from-slate-400/30 rounded-full blur-xl animate-pulse opacity-60" />
          
          <div className="relative pl-12 pr-8">
            <blockquote className="text-xl lg:text-2xl font-serif font-light text-slate-900 leading-relaxed mb-12 lg:mb-16 italic drop-shadow-sm tracking-wide">
              "To prepare the world for His soon return, through Christ-like living, healing, serving, 
              teaching, and training, guided by the Bible and Holy Spirit, aiming to restore creation 
              to God's perfect will."
            </blockquote>
            <div className="flex items-center space-x-4 pt-6 border-t-2 border-slate-200/60">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl flex items-center justify-center shadow-xl ring-2 ring-slate-200/50">
                <FaCross className="text-2xl lg:text-3xl text-white drop-shadow-lg" />
              </div>
              <div>
                <p className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent tracking-tight">Chiaview Church</p>
                <p className="flex items-center text-base text-slate-600 font-semibold">
                  <MdLocationOn className="mr-2 text-slate-500 -mt-0.5" />
                  Lilongwe, Malawi
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Pillars */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 lg:mb-32">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="group relative p-8 lg:p-12 bg-white/98 backdrop-blur-xl border border-slate-200/85 rounded-3xl shadow-3xl hover:shadow-4xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-1000 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 1.2 + i * 0.15 }}
            >
              <div className="relative z-10 flex items-start lg:items-center space-x-6 lg:space-x-8">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 p-4 lg:p-5 rounded-3xl flex items-center justify-center shadow-3xl group-hover:shadow-4xl group-hover:scale-125 transition-all duration-800 flex-none ring-4 ring-white/50 bg-gradient-to-br from-indigo-600 to-purple-600"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  <pillar.icon className="text-2xl lg:text-3xl drop-shadow-lg text-white" />
                </motion.div>
                
                <div className="flex-1 min-w-0 pt-1 lg:pt-0">
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-all duration-500 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-slate-800 leading-relaxed font-medium tracking-wide">{pillar.desc}</p>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-8 w-32 h-1 bg-gradient-to-r from-slate-400/60 to-slate-200/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 transform scale-x-0 group-hover:scale-x-100 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-20 border-t-4 border-slate-200/70"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.1, delay: 1.6 }}
        >
          <Link
            href="/ministries"
            className="group relative inline-flex items-center px-16 py-6 lg:px-20 lg:py-7 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white font-bold text-xl lg:text-2xl rounded-3xl shadow-4xl hover:shadow-5xl hover:scale-105 hover:-translate-y-2 transition-all duration-1000 tracking-wide uppercase transform-gpu overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-4">
              Donate Now
              <div className="w-4 h-4 border-2 border-white/40 rounded-full group-hover:border-white/80 group-hover:animate-ping transition-all duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent -skew-x-12 -rotate-2 scale-x-0 group-hover:scale-x-100 transition-all duration-1200 origin-left" />
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(100%) skewX(-12deg); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        .animate-blob { animation: blob 8s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}
