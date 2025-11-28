import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='w-xs px-1.5 py-3 sm:px-2.5 sm:py-5 fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded-full backdrop-blur-[2px] bg-black/10 z-10'>
            <nav>
                <ul className='flex items-center justify-evenly sm:justify-around'>
                    <li>
                        <NavLink data-label='Home' className='navlink' to={"/"} title='Home'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house w-7 h-7 sm:w-9 sm:h-9"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink data-label='Gallery' className='navlink' to={"/gallery"} title='Gallery'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gallery-vertical-icon lucide-gallery-vertical w-7 h-7 sm:w-9 sm:h-9"><path d="M3 2h18" /><rect width="18" height="12" x="3" y="6" rx="2" /><path d="M3 22h18" /></svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink data-label='Blogs' className='navlink' to={"/blogs"} title='Blogs'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text-icon lucide-message-square-text w-7 h-7 sm:w-9 sm:h-9"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /><path d="M7 11h10" /><path d="M7 15h6" /><path d="M7 7h8" /></svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink data-label='Contact' className='navlink' to={"/contact"} title='Contact'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-forwarded-icon lucide-phone-forwarded w-7 h-7 sm:w-9 sm:h-9"><path d="M14 6h8" /><path d="m18 2 4 4-4 4" /><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar