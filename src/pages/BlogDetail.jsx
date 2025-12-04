import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = blogs.find(b => b.id === id);

    // Find next post
    const currentIndex = blogs.findIndex(b => b.id === id);
    const nextPost = blogs[(currentIndex + 1) % blogs.length];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl mb-4">Article not found</h2>
                <button
                    onClick={() => navigate('/blog')}
                    className="text-black underline hover:text-gray-600"
                >
                    Back to Journal
                </button>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Navigation */}
                <Link
                    to="/blog"
                    className="inline-flex items-center text-gray-400 hover:text-black mb-12 transition-colors group text-sm tracking-widest uppercase"
                >
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Journal
                </Link>

                {/* Cinematic Header */}
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-xs font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">
                            {post.category}
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-gray-900 mb-8 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center space-x-6 text-sm font-mono text-gray-500 uppercase tracking-widest">
                            <span>{post.date}</span>
                            <span className="text-gray-300">•</span>
                            <span>By {post.author}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full mb-24"
                >
                    <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-auto max-h-[80vh] object-cover object-center"
                    />
                </motion.div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">

                    {/* Sidebar / Author (Left on Desktop) */}
                    <div className="lg:col-span-3 lg:col-start-2 order-2 lg:order-1">
                        <div className="sticky top-32">
                            <div className="border-t border-gray-900 pt-6 mb-8">
                                <h4 className="text-lg font-bold mb-4">Written By</h4>
                                <div className="flex items-center mb-4">
                                    <img
                                        src={post.authorImg}
                                        alt={post.author}
                                        className="w-12 h-12 rounded-full object-cover mr-4 grayscale"
                                    />
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">{post.author}</p>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">{post.authorRole}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h4 className="text-lg font-bold mb-4">Share</h4>
                                <div className="flex space-x-4 text-gray-400">
                                    <button className="hover:text-black transition-colors"><Share2 size={18} /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                        <div className="prose prose-xl prose-headings:prose-headings:font-medium prose-p:font-light prose-p:text-gray-600 prose-p:leading-loose max-w-none">
                            <p className="lead text-2xl italic text-gray-800 mb-10">
                                {post.excerpt}
                            </p>
                            {post.content.map((paragraph, index) => (
                                <p key={index} className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:leading-[0.8] text-gray-600 first-letter:text-gray-900">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Next Article Navigation */}
                <div className="border-t border-gray-100 pt-20 pb-10">
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-400 uppercase tracking-widest mb-4">Read Next</span>
                        <Link
                            to={`/blog/${nextPost.id}`}
                            className="group flex items-center text-right"
                        >
                            <span className="text-4xl md:text-6xl font-medium mr-6 group-hover:text-gray-600 transition-colors">
                                {nextPost.title}
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

export default BlogDetail;







// import React, { useEffect } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
// import { blogs } from '../data/blogs';

// const BlogDetail = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const post = blogs.find(b => b.id === id);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [id]);

//     if (!post) {
//         return (
//             <div className="min-h-screen flex flex-col items-center justify-center">
//                 <h2 className="text-2xl mb-4">Article not found</h2>
//                 <button
//                     onClick={() => navigate('/blogs')}
//                     className="text-black underline hover:text-gray-600"
//                 >
//                     Back to Journal
//                 </button>
//             </div>
//         );
//     }

//     const relatedPosts = blogs
//         .filter(b => b.id !== id)
//         .slice(0, 2);

//     return (
//         <div className="pt-24 pb-20 bg-white min-h-screen">
//             <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Breadcrumb */}
//                 <Link
//                     to="/blogs"
//                     className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors group"
//                 >
//                     <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
//                     Back to Journal
//                 </Link>

//                 {/* Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center mb-12"
//                 >
//                     <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800 mb-6">
//                         {post.category}
//                     </span>
//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                         {post.title}
//                     </h1>
//                     <div className="flex items-center justify-center space-x-6 text-gray-500 text-sm">
//                         <div className="flex items-center">
//                             <Calendar size={16} className="mr-2" />
//                             {post.date}
//                         </div>
//                         <div className="flex items-center">
//                             <User size={16} className="mr-2" />
//                             {post.author}
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Featured Image */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg mb-16"
//                 >
//                     <img
//                         src={post.img}
//                         alt={post.title}
//                         className="w-full h-full object-cover"
//                     />
//                 </motion.div>

//                 {/* Content Layout */}
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

//                     {/* Main Content */}
//                     <div className="lg:col-span-8">
//                         <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-light">
//                             {post.content.map((paragraph, index) => (
//                                 <p key={index} className="mb-6 first:drop-cap">
//                                     {paragraph}
//                                 </p>
//                             ))}
//                         </div>

//                         {/* Share Section */}
//                         <div className="border-t border-gray-200 mt-12 pt-8">
//                             <div className="flex items-center justify-between">
//                                 <span className="font-bold text-lg">Share this article</span>
//                                 <div className="flex space-x-4">
//                                     <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700">
//                                         <Share2 size={20} />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Sidebar / Author Info */}
//                     <div className="lg:col-span-4 space-y-8">
//                         <div className="bg-gray-50 p-8 rounded-xl sticky top-24">
//                             <h3 className="text-xl font-bold mb-6">About the Author</h3>
//                             <div className="flex items-center mb-4">
//                                 <img
//                                     src={post.authorImg}
//                                     alt={post.author}
//                                     className="w-12 h-12 rounded-full object-cover mr-4"
//                                 />
//                                 <div>
//                                     <p className="font-bold text-gray-900">{post.author}</p>
//                                     <p className="text-sm text-gray-500">{post.authorRole}</p>
//                                 </div>
//                             </div>
//                             <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                                 Passionate about capturing life's most beautiful moments. With over 10 years of experience in photography, specializing in {post.category.toLowerCase()} and storytelling.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </article>

//             {/* Related Posts */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 border-t border-gray-200 pt-16">
//                 <h2 className="text-3xl font-bold mb-12 text-center">Read Next</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                     {relatedPosts.map((related) => (
//                         <Link key={related.id} to={`/blog/${related.id}`} className="group block">
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                                 <div className="aspect-4/3 overflow-hidden rounded-lg">
//                                     <img
//                                         src={related.img}
//                                         alt={related.title}
//                                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                                     />
//                                 </div>
//                                 <div className="flex flex-col justify-center">
//                                     <div className="flex items-center text-xs text-gray-500 mb-2">
//                                         <span>{related.date}</span>
//                                         <span className="mx-2">•</span>
//                                         <span className="text-black font-medium">{related.category}</span>
//                                     </div>
//                                     <h3 className="text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
//                                         {related.title}
//                                     </h3>
//                                     <p className="text-gray-600 text-sm line-clamp-2 mb-4">
//                                         {related.excerpt}
//                                     </p>
//                                     <span className="text-sm font-medium underline decoration-gray-300 underline-offset-4 group-hover:decoration-black transition-all">
//                                         Read Article
//                                     </span>
//                                 </div>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogDetail;
