import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { portfolioItems } from '../data/portfolio';

const PortfolioDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const item = portfolioItems.find(i => i.id === id);

    // Find next project for navigation
    const currentIndex = portfolioItems.findIndex(i => i.id === id);
    const nextItem = portfolioItems[(currentIndex + 1) % portfolioItems.length];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!item) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl mb-4">Project not found</h2>
                <button
                    onClick={() => navigate('/portfolio')}
                    className="text-black underline hover:text-gray-600"
                >
                    Back to Portfolio
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Navigation */}
                <Link
                    to="/portfolio"
                    className="inline-flex items-center text-gray-400 hover:text-black mb-12 transition-colors group text-sm tracking-widest uppercase"
                >
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    <div className="lg:col-span-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6 text-gray-900"
                        >
                            {item.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-gray-500 font-light italic"
                        >
                            "{item.description}"
                        </motion.p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-6">
                            <div>
                                <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1">Category</span>
                                <span className="text-lg font-medium">{item.category}</span>
                            </div>
                            <div>
                                <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1">Year</span>
                                <span className="text-lg font-medium">{item.year}</span>
                            </div>
                            {item.client && (
                                <div>
                                    <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1">Client</span>
                                    <span className="text-lg font-medium">{item.client}</span>
                                </div>
                            )}
                            {item.location && (
                                <div>
                                    <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1">Location</span>
                                    <span className="text-lg font-medium">{item.location}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full mb-24"
                >
                    <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-auto max-h-[85vh] object-cover object-center"
                    />
                </motion.div>

                {/* Project Details / Narrative */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-4">
                        <h3 className="text-3xl font-bold mb-6">The Project</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Every photograph captures a moment that will never exist again. For this project, our goal was to strip away the unnecessary and focus purely on the emotion and form.
                        </p>
                        {item.service && (
                            <div className="mb-6">
                                <span className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Service Provided</span>
                                <p className="text-gray-900">{item.service}</p>
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-8 space-y-8">
                        {item.challenge && (
                            <div>
                                <h4 className="text-lg font-bold mb-3">The Challenge</h4>
                                <p className="text-gray-600 leading-relaxed font-light text-lg">{item.challenge}</p>
                            </div>
                        )}
                        {item.solution && (
                            <div>
                                <h4 className="text-lg font-bold mb-3">The Approach</h4>
                                <p className="text-gray-600 leading-relaxed font-light text-lg">{item.solution}</p>
                            </div>
                        )}
                        {!item.challenge && (
                            <p className="text-gray-600 leading-relaxed font-light text-lg">
                                We approached this shoot with a minimalist mindset, allowing the subject to breathe within the frame. By utilizing natural light and careful composition, we aimed to create an image that feels both timeless and immediate. The interplay of light and shadow was crucial in defining the mood and texture of the final piece.
                            </p>
                        )}
                    </div>
                </div>

                {/* Additional Images Grid */}
                {item.images && item.images.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                        {item.images.map((img, idx) => (
                            <div key={idx} className="relative aspect-3/4 overflow-hidden">
                                <img src={img} alt={`Detail ${idx}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Next Project Navigation */}
                <div className="border-t border-gray-100 pt-20 pb-10">
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-400 uppercase tracking-widest mb-4">Next Project</span>
                        <Link
                            to={`/portfolio/${nextItem.id}`}
                            className="group flex items-center text-right"
                        >
                            <span className="text-4xl md:text-6xl font-medium mr-6 group-hover:text-gray-600 transition-colors">
                                {nextItem.title}
                            </span>
                            <span className="p-4 rounded-full border border-gray-200 group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
                                <ArrowRight size={24} />
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PortfolioDetail;
