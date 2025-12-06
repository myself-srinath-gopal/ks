import React from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'
import { Aperture, ArrowRight, Camera } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {

    // 

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
                        <h2 className="text-3xl md:text-4xl mb-6 leading-tight">
                            We believe photography is more than just capturing an image—it's about preserving a feeling.
                        </h2>
                        <p className="text-neutral-600 leading-relaxed mb-8">
                            At Kalaimagal's Studio, we specialize in creating timeless visual narratives. Whether it's the intimate moments of a wedding, the raw emotion of a portrait, or the polished aesthetic of a commercial campaign, we bring a unique artistic vision to every project.
                        </p>
                        <Link to="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-neutral-600 transition-colors">
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