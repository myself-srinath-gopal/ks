import { Menu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about-us' },
        { name: 'Contact', path: '/contact-us' },
    ]
    const { pathname } = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 700) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleNavToggle = () => {
        const line = document.querySelector('.navtoggler__line')
        line.classList.toggle('open')
        setIsOpen(!isOpen)
    }

    return (
        <header className={`w-full flex justify-between items-center gap-5 p-6 fixed top-0 z-20 ${scrolled ? 'bg-white shadow-sm' : pathname !== '/' ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
            <Link to={"/"} className={`flex items-center gap-2 ${scrolled || pathname !== "/" ? 'text-neutral-900' : 'text-white'}`}>
                <img src="\assets\logo.svg" alt="" className='w-6 h-6' />
                <span className='text-base sm:text-xl font-medium'>Kalaimagal's Studio</span>
            </Link>
            <nav className='hidden md:flex items-center gap-4 lg:gap-6'>
                {
                    navLinks.map((link) => (
                        <Link className={`text-sm font-medium tracking-wide uppercase ${scrolled || pathname !== '/' ? 'text-neutral-900' : 'text-white'} hover:text-neutral-500 transition-colors relative ${pathname === link.path ? 'text-neutral-900' : 'text-neutral-600'}`} data-label={link.name} key={link.name} to={link.path} title={link.name}>
                            {link.name}
                            {pathname === link.path && (
                                <motion.div
                                    layoutId='underline'
                                    className={`absolute left-0 -bottom-1 w-full h-px ${scrolled || pathname !== "/" ? 'bg-neutral-900' : 'bg-white'}`}
                                />
                            )}
                        </Link>
                    ))
                }
            </nav>
            <button onClick={handleNavToggle} className='w-5 h-5 block md:hidden relative z-50 cursor-pointer navtoggler'>
                <span className='navtoggler__line h-px w-5 bg-neutral-900 absolute right-0 top-1/2 -translate-y-1/2'></span>
            </button>
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="bg-white fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden w-full h-screen"
                        >
                            <div className="flex flex-col gap-8 text-center">
                                {navLinks.map((link) => (
                                    <Link
                                        onClick={handleNavToggle}
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