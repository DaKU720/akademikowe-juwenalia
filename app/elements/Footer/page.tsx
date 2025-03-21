"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {FaInstagram, FaEnvelope, FaFacebook} from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <motion.footer
            className="bg-black py-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6 md:px-12">
                {/* Logo i nawigacja */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
                    <motion.img
                        src="/images/Ustronalia-LOGO-Color.svg"
                        alt="Logo Juwenalia"
                        className="w-full max-w-[25rem] object-contain"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 50, damping: 10 }}
                    />

                    {/* Linki nawigacyjne */}
                    <nav className=" text-[#ffe8e8] flex space-x-6 mt-4 md:mt-0">
                        <Link href="/" className="hover:text-[#e04587] transition">
                            Strona Główna
                        </Link>
                        <Link href="/portfolio/category" className="hover:text-[#e04587] transition">
                            Wydarzenie
                        </Link>
                        <Link href="/contact" className="hover:text-[#e04587] transition">
                            Kontakt
                        </Link>
                    </nav>
                </div>

                {/* Social Media i prawa autorskie */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t text-[#ffe8e8] border-gray-700 mt-6 pt-6">
                    {/* Social Media */}
                    <div className="flex space-x-4">
                        <a href="mailto:davidkamys@yahoo.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope size={20} className="hover:text-[#e04587] transition"/>
                        </a>
                        <a href="mailto:davidkamys@yahoo.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={20} className="hover:text-[#e04587] transition"/>
                        </a>
                        <a href="mailto:davidkamys@yahoo.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={20} className="hover:text-[#e04587] transition"/>
                        </a>
                    </div>

                    {/* Prawa autorskie */}
                    <p className="text-sm text-gray-500 mt-4 md:mt-0">
                        &copy; Ustronalia 2025
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;