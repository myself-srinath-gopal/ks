import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { stories } from '../data/stories';

const Stories = () => {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Visual Stories</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Every image has a narrative. Dive deeper into the moments, the settings, and the technical details behind our favorite shots.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link to={`/stories/${story.id}`} className="block h-full">
                                <div className="relative h-80 overflow-hidden rounded-lg mb-4">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="inline-flex items-center text-white text-sm font-medium">
                                            Read Story <ArrowRight size={16} className="ml-2" />
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center text-xs text-gray-500 space-x-4">
                                        <span className="flex items-center">
                                            <Calendar size={12} className="mr-1" /> {story.date}
                                        </span>
                                        <span className="flex items-center">
                                            <Tag size={12} className="mr-1" /> {story.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-2 text-sm">
                                        {story.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stories;
