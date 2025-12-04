import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { stories } from '../data/stories';

const Stories = () => {
    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Editorial Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 border-b border-gray-100 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">Journal</span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium mb-8 tracking-tighter text-gray-900 leading-[0.9]">
                            Visual Stories
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                            Behind every shutter click lies a narrative. Explore the moments, the settings, and the technical details that breathe life into our frames.
                        </p>
                    </motion.div>
                </div>

                {/* Minimal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                            className="group cursor-pointer flex flex-col"
                        >
                            <Link to={`/stories/${story.id}`} className="block h-full">
                                <div className="relative overflow-hidden mb-8 aspect-4/5">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>

                                <div className="space-y-3 pr-4">
                                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 group-hover:border-gray-300 transition-colors duration-500">
                                        <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                            {story.category}
                                        </span>
                                        <span className="text-xs font-mono text-gray-400">
                                            {story.date}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl text-gray-900 group-hover:text-black transition-colors leading-tight">
                                        {story.title}
                                    </h3>

                                    <p className="text-gray-500 font-light line-clamp-2 text-sm leading-relaxed">
                                        {story.description}
                                    </p>

                                    <div className="pt-4 flex items-center text-xs font-bold tracking-widest uppercase text-gray-900 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                        Read Story <ArrowRight size={14} className="ml-2" />
                                    </div>
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






// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Calendar, Tag } from 'lucide-react';
// import { stories } from '../data/stories';

// const Stories = () => {
//     return (
//         <div className="pt-24 pb-20 bg-white min-h-screen">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-16">
//                     <h1 className="text-5xl font-bold mb-6">Visual Stories</h1>
//                     <p className="text-gray-600 max-w-2xl mx-auto">
//                         Every image has a narrative. Dive deeper into the moments, the settings, and the technical details behind our favorite shots.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {stories.map((story) => (
//                         <div
//                             key={story.id}
//                             className="group cursor-pointer"
//                         >
//                             <Link to={`/stories/${story.id}`} className="block h-full">
//                                 <div className="relative h-80 overflow-hidden rounded-lg mb-4">
//                                     <img
//                                         src={story.image}
//                                         alt={story.title}
//                                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                                     />
//                                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
//                                     <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                                         <span className="inline-flex items-center text-white text-sm font-medium">
//                                             Read Story <ArrowRight size={16} className="ml-2" />
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <div className="space-y-2">
//                                     <div className="flex items-center text-xs text-gray-500 space-x-4">
//                                         <span className="flex items-center">
//                                             <Calendar size={12} className="mr-1" /> {story.date}
//                                         </span>
//                                         <span className="flex items-center">
//                                             <Tag size={12} className="mr-1" /> {story.category}
//                                         </span>
//                                     </div>
//                                     <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
//                                         {story.title}
//                                     </h3>
//                                 </div>
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Stories;
