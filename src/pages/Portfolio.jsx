import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    { key: 'all', value: 'All' },
    { key: 'wedding', value: 'Wedding' },
    { key: 'portrait', value: 'Portrait' },
    { key: 'nature', value: 'Nature' },
    { key: 'birthday+party', value: 'Birthday' },
    { key: 'maternity', value: 'Maternity' },
];

// const portfolioItems = [
//     {
//         id: 1,
//         title: "The Vows",
//         category: "Wedding",
//         year: "2024",
//         src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//     },
//     {
//         id: 2,
//         title: "Golden Silence",
//         category: "Portrait",
//         year: "2023",
//         src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//     },
//     {
//         id: 3,
//         title: "Misty Peaks",
//         category: "Nature",
//         year: "2023",
//         src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//     },
//     {
//         id: 10,
//         title: "Urban Solitude",
//         category: "Editorial",
//         year: "2024",
//         src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//     },
//     {
//         id: 4,
//         title: "Concrete Jungle",
//         category: "Urban",
//         year: "2024",
//         src: "https://images.unsplash.com/photo-1449824913929-6513b6c6af63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//     },
//     {
//         id: 5,
//         title: "Ethereal Bride",
//         category: "Wedding",
//         year: "2023",
//         src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//     },
//     {
//         id: 6,
//         title: "Raw Emotion",
//         category: "Portrait",
//         year: "2023",
//         src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//     },
//     {
//         id: 7,
//         title: "Alpine Mirror",
//         category: "Nature",
//         year: "2022",
//         src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//     },
//     {
//         id: 8,
//         title: "Night Lights",
//         category: "Urban",
//         year: "2023",
//         src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//     },
//     {
//         id: 9,
//         title: "First Dance",
//         category: "Wedding",
//         year: "2023",
//         src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//     },
//     {
//         id: 11,
//         title: "Studio Light",
//         category: "Portrait",
//         year: "2024",
//         src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
//     },
// ];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=53523013-33a4bce35e382dabf0ec8c7d8&q=portrait&image_type=photo&${activeCategory !== 'all' && 'q=' + activeCategory}`, {
            method: 'GET',
        }).then((res) => res.json()).then((data) => setProjects(data?.hits));
    }, [activeCategory])

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

                    {/* Minimal Filter */}
                    <div className="mt-12 lg:mt-0">
                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat.key}
                                    onClick={() => setActiveCategory(cat.key)}
                                    className={`text-sm tracking-widest uppercase transition-all duration-300 relative pb-1 ${activeCategory === cat.key
                                        ? 'text-black font-medium'
                                        : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    {cat.value}
                                    {activeCategory === cat.key && (
                                        <motion.div
                                            key={cat.key}
                                            layoutId="underline"
                                            className="absolute bottom-0 left-0 right-0 h-px bg-black"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-4"
                >
                    <AnimatePresence>
                        {projects.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                key={item.id}
                                className="break-inside-avoid group cursor-pointer mb-4"
                            >
                                <Link to={`/portfolio/${item.id}`}>
                                    <div className="relative overflow-hidden bg-gray-100 mb-4">
                                        <img
                                            src={item.webformatURL}
                                            className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            {/* <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <ArrowUpRight className="w-6 h-6 text-black" />
                                        </div> */}
                                        </div>
                                    </div>
                                </Link>

                            </motion.div>
                        ))}
                    </AnimatePresence>
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
