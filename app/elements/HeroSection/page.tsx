"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { IoMdPhotos } from "react-icons/io";
import { MdEvent } from "react-icons/md";

const Hero = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const player = document.getElementById("youtube-player");

        const sendCommand = (command) => {
            if (player && player.contentWindow) {
                player.contentWindow.postMessage(JSON.stringify(command), "*");
            }
        };

        const checkTime = () => {
            sendCommand({ event: "command", func: "getCurrentTime" });
        };

        const interval = setInterval(checkTime, 1000);

        window.addEventListener("message", (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data?.info?.currentTime >= 78) {
                    setIsFading(true);
                    setTimeout(() => {
                        sendCommand({ event: "command", func: "seekTo", args: [7] });
                        setIsFading(false);
                    }, 2000);
                }
            } catch (error) {
                console.warn("Ignored cross-origin message", error);
            }
        });

        return () => clearInterval(interval);
    }, []);

    // Funkcja do płynnego przewijania do sekcji #event
    const scrollToEvent = () => {
        const eventSection = document.getElementById("event");
        if (eventSection) {
            eventSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="relative w-full min-h-screen h-screen text-white flex flex-col items-center justify-center overflow-hidden">
                {/* Tło YouTube */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100vh] -translate-x-1/2 -translate-y-1/2">
                        <iframe
                            id="youtube-player"
                            className="w-full h-full pointer-events-none"
                            src="https://www.youtube.com/embed/sT-WR6zdJj0?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&start=7&end=78&playlist=sT-WR6zdJj0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Overlay dla lepszej czytelności */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-black"
                    animate={{ opacity: [0.7, 0.8, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Ikona Menu */}
                <button
                    className="absolute top-4 left-4 p-2 z-50"
                    onClick={() => setMenuOpen(true)}
                >
                    <Menu size={32} />
                </button>

                {/* Pełnoekranowe Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-40"
                    >
                        <button
                            className="absolute top-4 right-4 p-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        <nav className="flex flex-col gap-5 text-center">
                            <button
                                className="flex items-center bg-[#e04587] text-white text-xl font-extrabold rounded-full px-6 py-3 transition-all duration-300 hover:bg-black hover:text-[#e04587] hover:shadow-md"
                                onClick={() => {
                                    scrollToEvent();
                                    setMenuOpen(false);
                                }}
                            >
                                <MdEvent size={30} className="mr-2" />
                                Wydarzenie
                            </button>
                        </nav>
                    </motion.div>
                )}


                {/* Główna treść */}
                <div className="relative flex-1 flex flex-col items-center justify-center text-center max-w-screen-xl mx-auto px-4 md:px-6 z-10">
                    <div className="p-10">
                        <div className="flex flex-col items-center text-center space-y-4">
                            {/* LOGO */}
                            <motion.img
                                src="/images/Ustronalia-LOGO-Color.svg"
                                alt="Logo Juwenalia"
                                className="w-full max-w-4xl object-contain"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50, damping: 10 }}
                            />

                            {/* Tekst */}
                            <motion.h1
                                className="text-[#e04587] text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-tight md:tracking-tighter"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50, damping: 10, delay: 0.4 }}
                            >
                                <span className="text-white">Juwenalia w Naszym Akademiku!</span>
                            </motion.h1>
                        </div>

                        <div className="flex md:flex-row flex-col items-center text-center justify-center md:gap-6 gap-4 mt-6">
                            {/* Przyciski */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="flex items-center bg-[#e04587] text-white text-xl font-extrabold rounded-full px-6 py-3 transition-all duration-300 hover:bg-black hover:text-[#e04587] hover:shadow-md"
                                onClick={scrollToEvent} // Funkcja przewijania do sekcji #event
                            >
                                <MdEvent size={30} className="mr-2" />
                                Wydarzenie
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="flex items-center bg-[#e04587] text-white text-xl font-extrabold rounded-full px-6 py-3 transition-all duration-300 hover:bg-black hover:text-[#e04587] hover:shadow-md"
                                onClick={() => window.open('mailto:davidkamys@yahoo.com', '_blank', 'noopener,noreferrer')}
                            >
                                <IoMdPhotos size={30} className="mr-2" />
                                Zdjęcia
                            </motion.button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
