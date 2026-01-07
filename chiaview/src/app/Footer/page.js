"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdPhone, MdEmail, MdLocationOn, MdFacebook } from "react-icons/md";
import { FaYoutube, FaClock, FaCrosshairs, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > window.innerHeight / 2);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = {
        quick: [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/mission", label: "Mission" },
            { href: "/ministries", label: "Ministries" },
            { href: "/sermons", label: "Sermons" },
        ],
        ministries: [
            { href: "/youth", label: "Youth Ministry" },
            { href: "/women", label: "Women Ministry" },
            { href: "/children", label: "Children Ministry" },
            { href: "/outreach", label: "Outreach" },
        ],
        social: [
            { href: "/facebook", icon: MdFacebook, label: "Facebook" },
            { href: "/instagram", icon: FaInstagram, label: "Instagram" },
            { href: "/youtube", icon: FaYoutube, label: "YouTube" },
            { href: "/whatsapp", icon: FaWhatsapp, label: "WhatsApp" },
        ],
    };

    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        className="col-span-2"
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <FaCrosshairs className="text-3xl text-amber-400" />
                            <h3 className="text-2xl font-bold">Chiaview Church</h3>
                        </div>
                        <p className="text-slate-400 mb-6">
                            Preparing the world for Christ's return through faith, healing, and service in Lilongwe.
                        </p>
                        <div className="flex items-center space-x-3 mb-2">
                            <FaClock className="text-amber-400" />
                            <h4 className="font-bold">Service Times</h4>
                        </div>
                        <p className="text-slate-400">Sunday: 9:00 AM & 11:00 AM</p>
                        <p className="text-slate-400">Wednesday: 6:30 PM</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    >
                        <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {links.quick.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    >
                        <h4 className="text-xl font-bold mb-4">Ministries</h4>
                        <ul className="space-y-2">
                            {links.ministries.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        {links.social.map(({ href, icon: Icon, label }) => (
                            <Link key={label} href={href} className="text-slate-400 hover:text-white">
                                <Icon className="text-xl" />
                            </Link>
                        ))}
                    </div>
                    <p className="text-slate-400 text-sm">
                        &copy; 2026 Chiaview Church. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}