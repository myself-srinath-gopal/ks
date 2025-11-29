import React, { useState } from 'react';
import { motion } from 'framer-motion';

const allImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800', category: 'Wedding' },
    { id: 2, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800', category: 'Portrait' },
    { id: 3, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800', category: 'Nature' },
    { id: 4, src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800', category: 'Studio' },
    { id: 5, src: 'https://images.unsplash.com/photo-1740417373596-c4ae4b705196?q=80&w=900', category: 'Wedding' },
    { id: 6, src: 'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?q=80&w=800', category: 'Portrait' },
    { id: 7, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800', category: 'Nature' },
    { id: 8, src: 'https://images.unsplash.com/photo-1758513422934-1b732ad68590?q=80&w=900', category: 'Studio' },
    { id: 9, src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800', category: 'Wedding' },
];

const categories = ['All', 'Wedding', 'Portrait', 'Nature', 'Studio'];

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const filteredImages = filter === 'All'
        ? allImages
        : allImages.filter(img => img.category === filter);

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Visual Archive</h1>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                    A curated collection of our finest moments captured in time.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`text-sm uppercase tracking-widest pb-1 border-b-2 transition-colors ${filter === cat
                            ? 'border-black text-black'
                            : 'border-transparent text-neutral-500 hover:text-black'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
                {filteredImages.map((img) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={img.id}
                        className="relative group overflow-hidden aspect-3/4"
                    >
                        <img
                            src={img.src}
                            alt={`Gallery ${img.id}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Gallery;
