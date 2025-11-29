import React from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Home = () => {

    const categories = [
        {
            title: 'Weddings',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
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
    ];

    return (
        <div className='w-full'>
            <Carousel />
            <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            We believe photography is more than just capturing an image—it's about preserving a feeling.
                        </h2>
                        <p className="text-neutral-600 leading-relaxed mb-8">
                            At Kalaimagal's Studio, we specialize in creating timeless visual narratives. Whether it's the intimate moments of a wedding, the raw emotion of a portrait, or the polished aesthetic of a commercial campaign, we bring a unique artistic vision to every project.
                        </p>
                        <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-neutral-600 transition-colors">
                            Read Our Story <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1603126004256-4110103b999a?w=900&auto=format&fit=crop"
                            alt="Photographer at work"
                            className="w-full h-[300px] sm:h-[500px] object-cover rounded-lg"
                        />
                        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-neutral-200 -z-10 hidden md:block rounded-lg"></div>
                    </div>
                </div>
            </section>
            <section className="bg-neutral-900 text-white py-20 md:py-32 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start sm:items-end mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold">Our Expertise</h2>
                        <Link to="/portfolio" className="text-sm font-bold uppercase tracking-widest border-b border-white pb-1 mt-4 md:mt-0 hover:text-neutral-300 transition-colors">
                            View All Works
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="group cursor-pointer">
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-24 px-6 text-center bg-neutral-50">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to create something beautiful?</h2>
                <p className="text-neutral-600 mb-10 max-w-2xl mx-auto">
                    Let's discuss your vision and how we can bring it to life through our lens.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                    Get in Touch
                </Link>
            </section>
        </div>
    )
}

export default Home