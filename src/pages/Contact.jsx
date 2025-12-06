import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    const contactMethods = [
        {
            id: 'email',
            label: 'General Inquiries',
            value: 'info@kalaimagalsstudio.com',
            href: 'mailto:info@kalaimagalsstudio.com',
            icon: <Mail className="w-5 h-5" />,
            description: "For bookings, collaborations, and press."
        },
        {
            id: 'phone',
            label: 'Call Us',
            value: '+91 9876543210',
            href: 'tel:+91 9876543210',
            icon: <Phone className="w-5 h-5" />,
            description: "Mon-Fri, 9am - 6pm IST."
        },
        {
            id: 'whatsapp',
            label: 'WhatsApp',
            value: 'Chat with us',
            href: 'https://wa.me/9876543210',
            icon: <MessageCircle className="w-5 h-5" />,
            description: "Quick responses for urgent matters."
        },
        {
            id: 'instagram',
            label: 'Follow Our Journey',
            value: '@kalaimagals_studio',
            href: 'https://instagram.com',
            icon: <Instagram className="w-5 h-5" />,
            description: "Behind the scenes and latest work."
        }
    ];

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Header */}
                <div className="mb-24 border-b border-gray-100 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">Get in Touch</span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-gray-900 leading-[0.9]">
                            Let's Create <br /> Together
                        </h1>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-10">

                    {/* Context / Intro (Left) */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <h3 className="text-3xl font-medium mb-6">Booking {new Date().getFullYear()} - {new Date().getFullYear() + 1}</h3>
                            <p className="text-base xl:text-xl text-gray-600 font-light leading-relaxed mb-8">
                                We are currently accepting commissions for weddings, editorial campaigns, and portrait sessions.
                            </p>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Whether you have a fully fleshed-out concept or just a fragment of an idea, we are here to help you realize it. We prioritize projects that align with our philosophy of natural light and authentic storytelling.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                            <div>
                                <div className="flex items-center mb-4 text-gray-900">
                                    <MapPin size={18} className="mr-2" />
                                    <h4 className="text-base xl:text-lg font-bold">Studio</h4>
                                </div>
                                <p className="text-gray-500 font-light pl-7 text-sm md:text-base">
                                    789 Main Street <br />
                                    Pethappampatti - 642126
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center mb-4 text-gray-900">
                                    <Clock size={18} className="mr-2" />
                                    <h4 className="text-base xl:text-lg font-bold">Hours</h4>
                                </div>
                                <p className="text-gray-500 font-light pl-7 text-sm md:text-base">
                                    Monday - Friday <br />
                                    9:00 AM - 6:00 PM <br />
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Methods Grid (Right) */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.id}
                                    href={method.href}
                                    target={method.id === 'instagram' || method.id === 'whatsapp' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="group flex flex-col gap-8 p-6 border border-gray-100 hover:bg-black hover:border-black transition-all duration-500 min-h-50 rounded-2xl"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="p-3 bg-gray-50 rounded-full group-hover:bg-white/10 group-hover:text-white transition-colors">
                                            {method.icon}
                                        </div>
                                        <ArrowUpRight className="text-gray-300 group-hover:text-white transition-colors" />
                                    </div>

                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-500 mb-2 block">
                                            {method.label}
                                        </span>
                                        <h3 className="text-lg 2xl:text-2xl text-gray-900 group-hover:text-white mb-2 transition-colors">
                                            {method.value}
                                        </h3>
                                        <p className="text-sm text-gray-500 group-hover:text-gray-400 font-light transition-colors">
                                            {method.description}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-12 p-8 bg-gray-50 text-center">
                            <p className="text-gray-500 font-light italic">
                                "Communication leads to community, that is to understanding, intimacy and mutual valuing."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
