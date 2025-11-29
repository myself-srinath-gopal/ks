import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Stories', path: '/stories' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact-us' },
    ]
    const { pathname } = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className='w-full bg-[#fefefe]/50 flex items-center justify-between px-6 py-5 fixed top-0 z-20 backdrop-blur-xl shadow-sm'>
            <Link to={"/"} className="flex items-center gap-2">
                <img src="\assets\logo.svg" alt="" className='w-6 h-6' />
                <span className='text-base sm:text-xl font-medium'>Kalaimagal's Studio</span>
            </Link>
            <nav className='hidden md:flex items-center gap-4 lg:gap-6'>
                {
                    navLinks.map((link) => (
                        <Link className={`text-sm font-medium tracking-wide uppercase hover:text-neutral-500 transition-colors relative ${pathname === link.path ? 'text-neutral-900' : 'text-neutral-600'}`} data-label={link.name} key={link.name} to={link.path} title={link.name}>
                            {link.name}
                            {pathname === link.path && (
                                <motion.div
                                    layoutId='underline'
                                    className='absolute left-0 -bottom-1 w-full h-px bg-neutral-900'
                                />
                            )}
                        </Link>
                    ))
                }
            </nav>
            <button onClick={() => setIsOpen(!isOpen)} className='block md:hidden relative z-50 cursor-pointer'>
                {isOpen ? <X className='w-7 h-7' /> : <Menu className='w-7 h-7' />}
            </button>
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden w-full h-screen"
                        >
                            <div className="flex flex-col gap-8 text-center">
                                {navLinks.map((link) => (
                                    <Link
                                        onClick={() => setIsOpen(!isOpen)}
                                        key={link.path}
                                        to={link.path}
                                        className="text-2xl font-light uppercase tracking-widest text-neutral-900 hover:text-neutral-500 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </header>
    )
}

export default Navbar