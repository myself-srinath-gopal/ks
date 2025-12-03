import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Camera, Tag, ArrowRight } from 'lucide-react';
import { stories } from '../data/stories';

const StoryDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const story = stories.find(s => s.id === id);

    // Scroll to top when id changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!story) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl mb-4">Story not found</h2>
                <button
                    onClick={() => navigate('/stories')}
                    className="text-black underline hover:text-gray-600"
                >
                    Back to Stories
                </button>
            </div>
        );
    }

    const relatedStories = stories
        .filter(s => story.relatedIds.includes(s.id))
        .slice(0, 3);

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Full Width Hero Image */}
            <div className="relative h-[60vh] w-full">
                <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-2 mb-4 text-sm md:text-base font-medium tracking-wider opacity-90">
                                <span className="uppercase bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                    {story.category}
                                </span>
                                <span>•</span>
                                <span>{story.date}</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                                {story.title}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                <div className="bg-white rounded-t-3xl p-8 md:p-12 shadow-sm">
                    <Link
                        to="/stories"
                        className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back to Stories
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold mb-6">The Story</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {story.description}
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Photography is more than just clicking a shutter; it's about waiting for the right moment, understanding the light, and connecting with the subject. This image represents a culmination of those elements coming together in perfect harmony.
                            </p>
                        </div>

                        {/* Sidebar Details */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-gray-50 p-6 rounded-xl space-y-6">
                                <h3 className="text-xl font-bold border-b border-gray-200 pb-4">Image Details</h3>

                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                                    <div>
                                        <span className="block text-xs text-gray-500 uppercase tracking-wider">Location</span>
                                        <span className="font-medium">{story.location}</span>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Camera className="w-5 h-5 text-gray-500 mt-1" />
                                    <div>
                                        <span className="block text-xs text-gray-500 uppercase tracking-wider">Gear</span>
                                        <span className="font-medium">{story.camera}</span>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Calendar className="w-5 h-5 text-gray-500 mt-1" />
                                    <div>
                                        <span className="block text-xs text-gray-500 uppercase tracking-wider">Date Taken</span>
                                        <span className="font-medium">{story.date}</span>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Tag className="w-5 h-5 text-gray-500 mt-1" />
                                    <div>
                                        <span className="block text-xs text-gray-500 uppercase tracking-wider">Category</span>
                                        <span className="font-medium">{story.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Works */}
                {relatedStories.length > 0 && (
                    <div className="mt-16 mb-12">
                        <h3 className="text-3xl font-bold mb-8">Related Works</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedStories.map((related) => (
                                <Link key={related.id} to={`/stories/${related.id}`} className="group block">
                                    <div className="relative aspect-4/3 overflow-hidden rounded-lg mb-4">
                                        <img
                                            src={related.image}
                                            alt={related.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                    </div>
                                    <h4 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                                        {related.title}
                                    </h4>
                                    <div className="flex items-center text-sm text-gray-500 mt-2">
                                        <span>View Story</span>
                                        <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StoryDetail;
