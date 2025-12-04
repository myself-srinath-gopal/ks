import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Header */}
                <div className="mb-10 sm:mb-24 border-b border-gray-100 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">Contact</span>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-gray-900 leading-[0.9]">
                            Start a Conversation
                        </h1>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Contact Info (Left) */}
                    <div className="lg:col-span-4 space-y-16">
                        <div>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                                We are currently accepting bookings for the 2024-2025 season. Whether you have a specific vision or just a rough idea, we'd love to hear from you.
                            </p>
                            <a href="mailto:info@kalaimagalsstudio.com" className="text-lg font-medium border-b border-black pb-1 hover:text-gray-600 transition-colors">
                                info@kalaimagalsstudio.com
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                            <div>
                                <h4 className="text-xl font-bold mb-4">Studio</h4>
                                <p className="text-gray-500 font-light">
                                    789, Main Street <br />
                                    Pethappampatti - 642126
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-4">Socials</h4>
                                <ul className="space-y-2 text-gray-500 font-light">
                                    <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                                    <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
                                    <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Minimal Form (Right) */}
                    <div className="lg:col-span-7 lg:col-start-6">
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="group">
                                    <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-black transition-colors">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full py-4 border-b border-gray-200 focus:border-black outline-none transition-colors bg-transparent text-xl font-serif"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-black transition-colors">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full py-4 border-b border-gray-200 focus:border-black outline-none transition-colors bg-transparent text-xl font-serif"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="group">
                                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-black transition-colors">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full py-4 border-b border-gray-200 focus:border-black outline-none transition-colors bg-transparent text-xl font-serif"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-black transition-colors">Phone</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        className="w-full py-4 border-b border-gray-200 focus:border-black outline-none transition-colors bg-transparent text-xl font-serif"
                                        placeholder="9876543210"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-black transition-colors">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full py-4 border-b border-gray-200 focus:border-black outline-none transition-colors bg-transparent text-xl text-gray-800"
                                >
                                    <option>General Inquiry</option>
                                    <option>Wedding Booking</option>
                                    <option>Portrait Session</option>
                                    <option>Commercial Project</option>
                                </select>
                            </div>

                            <div className="group">
                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-black transition-colors">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full py-4 border-b border-gray-200 focus:border-black outline-none transition-colors bg-transparent text-xl resize-none"
                                    placeholder="Tell us about your vision..."
                                ></textarea>
                            </div>

                            <div className="pt-8">
                                <button
                                    type="submit"
                                    className="group flex items-center space-x-4 text-xl italic hover:text-gray-600 transition-colors"
                                >
                                    <span>Send Message</span>
                                    <span className="p-3 rounded-full border border-gray-200 group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
                                        <ArrowRight size={20} />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;







// import React from 'react';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// const Contact = () => {
//     return (
//         <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
//             <h1 className="text-4xl md:text-6xl font-bold mb-16">Get in Touch</h1>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//                 {/* Contact Form */}
//                 <div>
//                     <p className="text-lg text-neutral-600 mb-8">
//                         Interested in working together? Fill out the form below and we'll get back to you as soon as possible.
//                     </p>
//                     <form className="space-y-6">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div className="space-y-2">
//                                 <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Name</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
//                                     placeholder="Jane Doe"
//                                 />
//                             </div>
//                             <div className="space-y-2">
//                                 <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Email</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
//                                     placeholder="jane@example.com"
//                                 />
//                             </div>
//                         </div>

//                         <div className="space-y-2">
//                             <label htmlFor="subject" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Subject</label>
//                             <select
//                                 id="subject"
//                                 className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
//                             >
//                                 <option>General Inquiry</option>
//                                 <option>Wedding Photography</option>
//                                 <option>Portrait Session</option>
//                                 <option>Commercial Project</option>
//                             </select>
//                         </div>

//                         <div className="space-y-2">
//                             <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Message</label>
//                             <textarea
//                                 id="message"
//                                 rows={5}
//                                 className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
//                                 placeholder="Tell us about your project..."
//                             ></textarea>
//                         </div>

//                         <button
//                             type="submit"
//                             className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors w-full md:w-auto"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>

//                 {/* Info */}
//                 <div className="bg-neutral-100 p-8 md:p-12">
//                     <h3 className="text-2xl font-bold mb-8">Studio Information</h3>

//                     <div className="space-y-8">
//                         <div className="flex items-start gap-4">
//                             <MapPin className="w-6 h-6 text-neutral-400 mt-1" />
//                             <div>
//                                 <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Address</h4>
//                                 <p className="text-neutral-600">789 Main Street<br />Pethappampatti 642126</p>
//                             </div>
//                         </div>

//                         <div className="flex items-start gap-4">
//                             <Phone className="w-6 h-6 text-neutral-400 mt-1" />
//                             <div>
//                                 <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Phone</h4>
//                                 <p className="text-neutral-600">+91 9876543210</p>
//                             </div>
//                         </div>

//                         <div className="flex items-start gap-4">
//                             <Mail className="w-6 h-6 text-neutral-400 mt-1" />
//                             <div>
//                                 <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Email</h4>
//                                 <p className="text-neutral-600">info@kalaimagalsstudio.com</p>
//                             </div>
//                         </div>

//                         <div className="flex items-start gap-4">
//                             <Clock className="w-6 h-6 text-neutral-400 mt-1" />
//                             <div>
//                                 <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Hours</h4>
//                                 <p className="text-neutral-600">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: By Appointment Only</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-12 h-64 bg-neutral-200 w-full">
//                         {/* Placeholder for Map */}
//                         <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.721202721967!2d77.21408491030549!3d10.678734960944782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cbdc0fae3b23%3A0x2f889a55c688e571!2sKalaimagals%20Studio%20and%20Video!5e0!3m2!1sen!2sin!4v1764663644849!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;
