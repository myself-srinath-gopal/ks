import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-16">Get in Touch</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div>
                    <p className="text-lg text-neutral-600 mb-8">
                        Interested in working together? Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                                    placeholder="jane@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Subject</label>
                            <select
                                id="subject"
                                className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                            >
                                <option>General Inquiry</option>
                                <option>Wedding Photography</option>
                                <option>Portrait Session</option>
                                <option>Commercial Project</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors w-full md:w-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Info */}
                <div className="bg-neutral-100 p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-8">Studio Information</h3>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-neutral-400 mt-1" />
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Address</h4>
                                <p className="text-neutral-600">123 Photography Lane<br />New York, NY 10012</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-neutral-400 mt-1" />
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Phone</h4>
                                <p className="text-neutral-600">+91 9876543210</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-neutral-400 mt-1" />
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Email</h4>
                                <p className="text-neutral-600">info@kalaimagalsstudio.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="w-6 h-6 text-neutral-400 mt-1" />
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Hours</h4>
                                <p className="text-neutral-600">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: By Appointment Only</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 h-64 bg-neutral-200 w-full grayscale">
                        {/* Placeholder for Map */}
                        <div className="w-full h-full flex items-center justify-center text-neutral-400 text-sm uppercase tracking-widest font-bold border border-neutral-300">
                            Map Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
