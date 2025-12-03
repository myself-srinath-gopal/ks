import React from 'react';

const blogs = [
    {
        id: 1,
        title: "The Art of Golden Hour Photography",
        date: "March 15, 2024",
        category: "Tips & Tricks",
        excerpt: "Why the hour after sunrise and before sunset creates the most magical light for your portraits.",
        img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Capturing Authentic Emotions at Weddings",
        date: "March 10, 2024",
        category: "Weddings",
        excerpt: "How to blend into the background and capture those candid, tear-jerking moments.",
        img: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Choosing the Right Outfit for Your Shoot",
        date: "March 05, 2024",
        category: "Guides",
        excerpt: "A comprehensive guide on colors, patterns, and styles that look best on camera.",
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Studio vs. Natural Light: Which is Better?",
        date: "February 28, 2024",
        category: "Technical",
        excerpt: "Understanding the pros and cons of controlled studio lighting versus the unpredictability of nature.",
        img: "https://images.unsplash.com/photo-1554048612-387768052bf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

const Blogs = () => {
    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">The Journal</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Thoughts, stories, and tips from our life behind the camera.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {blogs.map((post) => (
                        <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span className="text-black font-medium">{post.category}</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-4 hover:text-gray-600 cursor-pointer transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <button className="text-black font-medium border-b border-black hover:border-gray-400 transition-colors pb-1">
                                    Read Article
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
