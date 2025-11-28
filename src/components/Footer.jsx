import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl font-bold">Lumina</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Capturing the essence of life's most beautiful moments through the lens of creativity and passion.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/gallery" className="hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Journal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>Wedding Photography</li>
                            <li>Portrait Sessions</li>
                            <li>Commercial Shoots</li>
                            <li>Event Coverage</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="mt-0.5 shrink-0" />
                                <span>123 Creative Ave, New York, NY 10001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="shrink-0" />
                                <span>+1 (555) 012-3456</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="shrink-0" />
                                <span>hello@luminastudio.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Lumina Studio. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
