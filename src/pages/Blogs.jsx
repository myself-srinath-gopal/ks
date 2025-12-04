import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blog = () => {
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
                        <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">The Journal</span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium mb-8 tracking-tighter text-gray-900 leading-[0.9]">
                            Insights & Dialogue
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                            Thoughts on creativity, technical guides, and the stories behind the shutter. A collection of our experiences in the world of photography.
                        </p>
                    </motion.div>
                </div>

                {/* Minimal Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                    {blogs.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                            className="group cursor-pointer flex flex-col"
                        >
                            <Link to={`/blog/${post.id}`} className="block">
                                <div className="relative overflow-hidden mb-8 aspect-16/10">
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
                                </div>

                                <div className="flex items-center space-x-4 text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
                                    <span>{post.category}</span>
                                    <span className="w-px h-3 bg-gray-300" />
                                    <span>{post.date}</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 leading-tight group-hover:text-gray-600 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-gray-500 font-light leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-xs font-bold tracking-widest uppercase text-black border-b border-transparent group-hover:border-black self-start pb-1 transition-all">
                                    Read Article
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;









// import React from 'react';
// import { blogs } from '../data/blogs';
// import { Link } from 'react-router-dom';

// const Blogs = () => {
//     return (
//         <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-16">
//                     <h1 className="text-5xl font-bold mb-6">The Journal</h1>
//                     <p className="text-gray-600 max-w-2xl mx-auto">
//                         Thoughts, stories, and tips from our life behind the camera.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                     {blogs.map((post) => (
//                         <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
//                             <Link to={`/blog/${post.id}`} className="block h-64 overflow-hidden relative group">
//                                 <img
//                                     src={post.img}
//                                     alt={post.title}
//                                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                                 />
//                                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
//                             </Link>
//                             <div className="p-8 grow flex flex-col">
//                                 <div className="flex items-center text-sm text-gray-500 mb-4">
//                                     <span>{post.date}</span>
//                                     <span className="mx-2">•</span>
//                                     <span className="text-black font-medium">{post.category}</span>
//                                 </div>
//                                 <Link to={`/blog/${post.id}`}>
//                                     <h2 className="text-2xl font-bold mb-4 hover:text-gray-600 cursor-pointer transition-colors">
//                                         {post.title}
//                                     </h2>
//                                 </Link>
//                                 <p className="text-gray-600 mb-6 leading-relaxed grow">
//                                     {post.excerpt}
//                                 </p>
//                                 <div className="mt-auto">
//                                     <Link
//                                         to={`/blog/${post.id}`}
//                                         className="inline-block text-black font-medium border-b border-black hover:border-gray-400 transition-colors pb-1"
//                                     >
//                                         Read Article
//                                     </Link>
//                                 </div>
//                             </div>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Blogs;
