import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    {
        title: 'Weddings',
        image: 'https://images.unsplash.com/photo-1740418762511-b3927603599a?w=900&auto=format&fit=crop',
        desc: 'Capturing love in its purest form.',
    },
    {
        title: 'Portraits',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
        desc: 'Revealing the soul behind the face.',
    },
    {
        title: 'Commercial',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
        desc: 'Elevating brands through visual storytelling.',
    },
    {
        title: 'Family',
        image: 'https://images.unsplash.com/photo-1756982784804-8b0e9d4cab86?w=900&auto=format&fit=crop',
        desc: 'Capturing family moments that last a lifetime.',
    },
    {
        title: 'Maternity',
        image: 'https://images.unsplash.com/photo-1667357307700-e91503af11c1?w=900&auto=format&fit=crop',
        desc: 'Celebrating motherhood with heartfelt images.',
    },
    {
        title: 'Babies',
        image: 'https://images.unsplash.com/photo-1656634064343-39ff5269d651?w=900&auto=format&fit=crop',
        desc: 'Capturing the innocence of newborn babies.',
    }
];


const Gallery = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=53523013-33a4bce35e382dabf0ec8c7d8&q=portrait&image_type=photo`, {
            method: 'GET',
        }).then((res) => res.json()).then((data) => setProjects(data?.hits));
    }, [])

    // console.log(projects)


    return (
        <div className="pt-32 pb-20 min-h-screen bg-white">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Minimal Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 border-b border-gray-100 pb-12"
                >
                    <div className="max-w-2xl">
                        <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">Portfolio</span>
                        <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tight text-gray-900">
                            Our Works
                        </h1>
                        <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                            A curation of moments that define our aesthetic. We believe in the beauty of simplicity and the power of a single frame.
                        </p>
                    </div>
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    layout
                    className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((cat, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                                key={idx}
                                className="group"
                            >
                                <div className="overflow-hidden mb-6 relative h-[400px]">
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                                <p className="text-neutral-400 text-sm">{cat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Footer Note */}
                <div className="mt-24 text-center">
                    <p className="text-gray-400 italic text-xl">
                        "Photography is the story I fail to put into words."
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Gallery;
