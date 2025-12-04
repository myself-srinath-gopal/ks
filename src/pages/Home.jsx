import React from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'
import { Aperture, ArrowRight, Camera } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {

    const categories = [
        {
            title: 'Weddings',
            image: 'https://images.unsplash.com/photo-1740418762511-b3927603599a?w=900&auto=format&fit=crop',
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
        {
            title: 'Family',
            image: 'https://images.unsplash.com/photo-1756982784804-8b0e9d4cab86?w=900&auto=format&fit=crop',
            desc: 'Capturing family moments that last a lifetime.',
        },
        {
            title: 'Maternity',
            image: 'https://images.unsplash.com/photo-1667357307700-e91503af11c1?w=900&auto=format&fit=crop',
            desc: 'Celebrating motherhood with heartfelt images.',
        },
        {
            title: 'Babies',
            image: 'https://images.unsplash.com/photo-1656634064343-39ff5269d651?w=900&auto=format&fit=crop',
            desc: 'Capturing the innocence of newborn babies.',
        }
    ];

    return (
        <div className='w-full'>
            <Carousel />
            <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
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
                </motion.div>
            </section>
            <section className="bg-neutral-900 text-white py-20 md:py-32 px-4 sm:px-6 lg:px-12">
                <div className="max-w-[1800px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start sm:items-end mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold">Our Expertise</h2>
                        <Link to="/portfolio" className="text-sm font-bold uppercase tracking-widest border-b border-white pb-1 mt-4 md:mt-0 hover:text-neutral-300 transition-colors">
                            View All Works
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((cat, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                key={idx}
                                className="group"
                            >
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
                    <motion.div>
                        <Aperture className="w-16 h-16 mx-auto mb-12 text-gray-500 stroke-1" />
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-12">
                            "We don't just take photographs; we curate memories. Every frame is a rebellion against the fleeting nature of time."
                        </h2>
                        <p className="text-gray-400 text-sm uppercase tracking-[0.3em]">The Kalaimagals Philosophy</p>
                    </motion.div>
                </div>
            </section>
            <section className="py-32 bg-neutral-800 flex items-center justify-center text-center px-4">
                <div className="max-w-7xl">
                    <p className="text-xs font-bold tracking-[0.2em] text-gray-400 mb-8 uppercase">Start a Project</p>
                    <h2 className="text-white text-5xl md:text-7xl font-medium mb-12 leading-tight">
                        Ready to tell your story? <br />
                        <span className="italic text-gray-500">Let's create something timeless.</span>
                    </h2>
                    <Link
                        to="/contact-us"
                        className="inline-block bg-black text-white px-12 py-5 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home