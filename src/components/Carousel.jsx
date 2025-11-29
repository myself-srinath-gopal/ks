import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
            id:4,
            image:'https://images.unsplash.com/photo-1553710120-23dd1551da41?w=900&auto=format&fit=crop',
            title: 'Birthday Photography',
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
            <div className="w-full absolute flex items-end justify-between bottom-16 z-10">
                <div className="max-w-4xl px-6">
                    <motion.p
                        key={`sub-${current}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="text-white/80 text-sm sm:text-base md:text-lg uppercase tracking-wider sm:tracking-[0.3em] sm:mb-4"
                    >
                        {slides[current]?.subtitle}
                    </motion.p>
                    <motion.h1
                        key={`title-${current}`}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="text-3xl sm:text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8"
                    >
                        {slides[current]?.title}
                    </motion.h1>
                    {/* <motion.button
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="px-8 py-5 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs tracking-widest"
                    >
                        View Portfolio
                    </motion.button> */}
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

export default Carousel