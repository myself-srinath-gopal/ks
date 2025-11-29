import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-400 py-12 px-6 md:px-12 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-white text-lg font-bold uppercase tracking-wider">Kalaimagal's Studio</h3>
                    <p className="text-sm leading-relaxed">
                        Capturing moments, crafting stories, and preserving memories through the lens of artistic excellence.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-medium mb-4 uppercase text-sm tracking-wide">Explore</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                        <li><Link to="/stories" className="hover:text-white transition-colors">Stories</Link></li>
                        <li><Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
                        <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-medium mb-4 uppercase text-sm tracking-wide">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li>123 Photography Lane</li>
                        <li>New York, NY 10012</li>
                        <li>info@kalaimagalsstudio.com</li>
                        <li>+91 9876543210</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-medium mb-4 uppercase text-sm tracking-wide">Social</h4>
                    <div className="flex gap-4">
                        <Link to="#" className="hover:text-white transition-colors">
                            <img src="/assets/ig.svg" alt="" className='w-7 h-7' />
                        </Link>
                        <Link to="#" className="hover:text-white transition-colors">
                            <img src="/assets/fb.svg" alt="" className='w-7 h-7' />
                        </Link>
                        <Link to="#" className="hover:text-white transition-colors">
                            <img src="/assets/twitter.svg" alt="" className='w-7 h-7' />
                        </Link>
                        <Link to="#" className="hover:text-white transition-colors">
                            <img src="/assets/mail.svg" alt="" className='w-7 h-7' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Kalaimagal's Studio. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Design &amp; Development by Cognifiers</p>
            </div>
        </footer>
    );
};

export default Footer;
