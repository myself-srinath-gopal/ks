import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Carousel = () => {

    const [current, setCurrent] = useState(0)

    const slides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1682951104098-aca2868840fd?w=900&auto=format&fit=crop',
            subtitle: 'Maternity Photography',
            title: 'Pregnancy',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1740416265401-0f4f850ba062?w=900&auto=format&fit=crop',
            subtitle: 'Wedding Photography',
            title: 'Marriage',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1725046908999-195118679132?q=80&w=2340&auto=format&fit=crop',
            title: 'Travel',
            subtitle: 'Outdoor Photography',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1553710120-23dd1551da41?w=900&auto=format&fit=crop',
            title: 'Birthday',
            subtitle: 'Celebration',
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length])

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    const links = ['Home', 'About', 'Work', 'Blog', 'Contact'];

    return (
        <div className='relative h-screen w-full overflow-hidden'>
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "linear" }}
                    className="absolute inset-0"
                >
                    <div style={{ backgroundImage: `url(${slides[current]?.image})` }} className="absolute inset-0 bg-center bg-cover">
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="w-full absolute flex max-[430px]:flex-col max-[430px]:items-start flex-row items-end justify-between bottom-6 sm:bottom-10 z-10">
                <div className="max-w-4xl px-6">
                    <motion.p
                        key={`sub-${current}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-white/80 text-sm sm:text-base md:text-lg uppercase tracking-wider sm:tracking-[0.3em] sm:mb-4 whitespace-nowrap"
                    >
                        {slides[current]?.subtitle}
                    </motion.p>
                    <motion.h1
                        key={`title-${current}`}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                        className="text-3xl sm:text-5xl md:text-7xl text-white tracking-tight max-[430px]:mb-4 mb-8"
                    >
                        {slides[current]?.title}
                    </motion.h1>
                </div>
                <div className="relative w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl cursor-pointer flex items-center justify-center mx-8 z-10 perspective-1000 group">
                    <div className="w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-3xl hover:shadow-blue-500/50">
                        <Camera className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                    {links.map((label, index) => (
                        <NavLink key={label} label={label} index={index} />
                    ))}
                </div>
                <div className="right-4 sm:right-8 flex gap-2 sm:gap-4 px-6 z-20 mb-8">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

const NavLink = ({ label, index }) => {
    const angle = -270 + (index * 36) * Math.PI / 180; // Degrees to radians
    const radius = 120; // Distance from center
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius + 20; // Offset down for bottom alignment

    return (
        <a
            href="#"
            className="absolute text-white font-medium text-sm bg-slate-800/80 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl border border-white/20 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-white/30 hover:font-semibold z-20"
            style={{
                left: `calc(50% + ${x}px)`,
                bottom: `${y}px`,
                transform: 'translateX(-50%) translateY(0)'
            }}
        >
            {label}
        </a>
    );
};


export default Carousel