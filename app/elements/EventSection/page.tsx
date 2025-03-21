"use client";

import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";

const EventPage = () => {
    return (
        <div id="event" className="min-h-screen flex flex-col md:flex-row bg-black text-[#ffe8e8]">
            {/* Sekcja tekstowa po lewej */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left p-6 md:p-12 space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#e04587] tracking-widest uppercase">
                    Juwenalia Akademika Ustronie
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 flex items-center">
                    <FaCalendarAlt className="mr-2 text-[#e04587]" /> 15-17 Czerwca 2025
                </h2>
                <h2 className="text-xl md:text-2xl text-gray-300 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-[#e04587]" /> Warszawa, Akademik Ustronie
                </h2>

                <p className="text-gray-400 leading-loose">
                    Przeżyj najbardziej emocjonujące Juwenalia w klimacie Squid Game!
                    Rywalizuj w wyzwaniach, zdobywaj nagrody i baw się do rana przy najlepszej muzyce.
                </p>

                <button
                    className="flex items-center bg-[#e04587] text-[#ffe8e8] text-xl font-extrabold rounded-full px-6 py-3 transition-all duration-300 hover:bg-black hover:text-[#e04587] hover:shadow-md"
                    onClick={() => window.open('mailto:davidkamys@yahoo.com', '_blank', 'noopener,noreferrer')}
                >
                    <IoMdPhotos size={30} className="mr-2" />
                    Dowiedz
                </button>
            </div>

            {/* Zdjęcie po prawej */}
            <div className="w-full md:w-1/2 h-screen flex items-center justify-center bg-black">
                <img
                    src="https://i.imgur.com/5jaUA50.jpeg"
                    alt="Juwenalia"
                    className="w-auto h-full max-w-full object-contain"
                />
            </div>
        </div>
    );
};

export default EventPage;
