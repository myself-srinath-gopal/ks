import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Heart, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

// const team = [
//     {
//         name: "Elena Rodriguez",
//         role: "Founder & Lead Photographer",
//         bio: "With over 15 years behind the lens, Elena sees light where others see shadow. Her work has been featured in Vogue, Harper's Bazaar, and Kinfolk.",
//         img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//     },
//     {
//         name: "David Chen",
//         role: "Creative Director",
//         bio: "A master of composition and visual storytelling. David ensures that every frame serves a greater narrative purpose.",
//         img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//     },
//     {
//         name: "Sarah Johnson",
//         role: "Senior Editor",
//         bio: "The alchemist who brings the raw images to life. Sarah's color grading defines the signature Kalaimagals aesthetic.",
//         img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//     }
// ];

const stats = [
    { label: "Years Active", value: 25 },
    { label: "Stories Told", value: 500 },
    { label: "Happy Clients", value: 2400 },
];

const values = [
    {
        title: "Authenticity",
        description: "We reject the staged and the artificial. We chase the raw, unscripted moments that reveal the true essence of a subject."
    },
    {
        title: "Timelessness",
        description: "Trends fade; emotion endures. We edit with a restraint that ensures your images will look as beautiful in fifty years as they do today."
    },
    {
        title: "Connection",
        description: "Great photography is 20% technique and 80% empathy. We build trust first, allowing us to capture intimacy without intrusion."
    }
];

const About = () => {
    return (
        <div className="bg-white min-h-screen w-full overflow-hidden">

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-12 max-w-[1800px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">Our Story</span>
                    <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tight text-gray-900">
                        The Observers
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-5">
                            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                                Kalaimagals Studio is not just a photography agency; it is a collective of visual poets dedicated to the art of preservation.
                            </p>
                        </div>
                        <div className="lg:col-span-7 flex justify-end">
                            <div className="h-px w-full bg-gray-200 mb-4"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Cinematic Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden mb-10 sm:mb-32"
                >
                    <img
                        src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Studio Atmosphere"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </motion.div>
            </section>

            {/* Narrative Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-medium mb-8 leading-tight">
                            We believe that <span className="italic text-gray-400">light</span> is a language.
                        </h2>
                    </div>
                    <div className="space-y-8">
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                            <span className="text-5xl float-left mr-3 mt-1.5 font-bold text-black">F</span>ounded in 2000, Kalaimagals Studio was born out of a simple yet profound realization: time is the only resource we cannot renew. In a world that moves increasingly fast, photography remains our only rebellion against the fleeting nature of existence.
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                            We don't just take photos. We wait. We watch. We anticipate the split second where emotion, light, and composition align perfectly. Whether it's the quiet intimacy of a wedding morning or the structured chaos of a city street, our lens is always focused on the truth of the moment.
                        </p>
                        <div className="pt-8">
                            <img
                                src="/assets/signature.png"
                                alt="Signature"
                                className="sm:w-1/2"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section (Dark) */}
            <section className="py-32 bg-[#0a0a0a] text-white mt-20">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 border-t border-white/10 pt-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3 }}
                                className="text-center"
                            >
                                <h3 className="text-5xl md:text-7xl font-medium mb-2">
                                    <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={2}
                                        separator=","
                                        delay={(index + 1) * .5}
                                    />
                                    +
                                </h3>
                                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-12 max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start sm:items-end mb-24">
                    <h2 className="text-5xl md:text-7xl font-medium">Our Philosophy</h2>
                    <p className="text-gray-400 text-sm uppercase tracking-widest mt-4 md:mt-0">The pillars of our craft</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                {index === 0 && <Camera size={20} />}
                                {index === 1 && <Clock size={20} />}
                                {index === 2 && <Heart size={20} />}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* The Collective (Team) */}
            {/* <section className="py-20 pb-40 px-4 sm:px-6 lg:px-12 max-w-[1800px] mx-auto">
                <div className="mb-24 border-b border-gray-100 pb-8">
                    <h2 className="text-5xl md:text-7xl font-medium">The Collective</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden mb-8 aspect-3/4">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-3xl text-gray-900 mb-2">{member.name}</h3>
                            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">{member.role}</p>
                            <p className="text-gray-500 font-light leading-relaxed text-sm border-l border-gray-200 pl-4">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section> */}

            {/* CTA */}
            <section className="py-32 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-medium mb-12 leading-tight">
                        Ready to create something <br />
                        <span className="italic text-gray-400">timeless?</span>
                    </h2>
                    <Link
                        to="/contact-us"
                        className="inline-flex items-center space-x-4 text-lg font-bold tracking-widest uppercase border-b border-black pb-2 hover:text-gray-600 hover:border-gray-600 transition-all"
                    >
                        <span>Start a Conversation</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default About;
