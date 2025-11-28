import React from 'react'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="max-w-6xl mx-auto py-10 sm:py-30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-6 items-center px-6 sm:px-10">
                    <div className="flex flex-col gap-4 sm:gap-2">
                        <span style={{ animationDelay: ".2s" }} className='bg-(--primary)/10 py-0.5 px-1.5 rounded w-max text-(--primary) uppercase text-xs sm:text-sm font-semibold tracking-normal sm:tracking-wide opacity-0 animate-fadeup'>Modern Photography Solutions</span>
                        <h1 style={{ animationDelay: ".5s" }} className='text-2xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight opacity-0 animate-fadeup'>Capture Moments <br />That Tell Your Story</h1>
                        <p style={{ animationDelay: ".8s" }} className='text-sm sm:text-base text-gray-600 opacity-0 animate-fadeup'>Timeless photography crafted with precision, creativity, and passion. Book your session today and let your memories shine forever.</p>
                        <Link to={"/gallery"} style={{ animationDelay: "1.1s" }} className='flex items-center gap-2 px-5 py-3 w-max rounded-full bg-(--primary) text-white mt-3 sm:mt-6 overflow-hidden opacity-0 animate-fadeup group'>
                            <span className='text-sm sm:text-lg font-semibold'>Explore Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6 lucide lucide-arrow-up-right-icon lucide-arrow-up-right translate-y-10 group-hover:translate-y-0 duration-400"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </Link>
                    </div>
                    <img src="https://images.unsplash.com/photo-1753947674135-f7ffb57356e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfDJ8MHx8fDI%3D" alt="" className='w-full h-full object-cover rounded-2xl animate-fadeIn' />
                </div>
            </section>
            <section className="max-w-6xl mx-auto py-10 sm:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 sm:px-10">
                    <div className="flex flex-col max-md:order-1">
                        <img src="https://images.unsplash.com/photo-1488926756850-a13b25e2f415?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBob3RvZ3JhcGhlcnxlbnwwfDB8MHx8fDI%3D" alt="" className='h-80 object-cover rounded-2xl' />
                        <div className="relative bg-(--primary) rounded-2xl p-6 text-white mt-3 sm:mt-6 overflow-hidden opacity-0 h-max sm:h-1/2 animate-fadeup">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-aperture-icon lucide-aperture absolute -top-30 -right-30
                            w-72 sm:w-96 h-72 sm:h-96 opacity-10 sm:opacity-20 -z-10"><circle cx="12" cy="12" r="10" /><path d="m14.31 8 5.74 9.94" /><path d="M9.69 8h11.48" /><path d="m7.38 12 5.74-9.94" /><path d="M9.69 16 3.95 6.06" /><path d="M14.31 16H2.83" /><path d="m16.62 12-5.74 9.94" /></svg>
                            <div className="flex flex-col gap-3">
                                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth
                                        ="1.8" strokeLinecap
                                        ="round" strokeLinejoin="round" className="lucide lucide-zap-icon lucide-zap w-6 sm:w-7 h-6 sm:h-7"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
                                </div>
                                <p className='text-base sm:text-lg'>
                                    Our mission is to create a comfortable, fun, and stress-free environment where clients feel confident and natural in front of the camera.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <span className='bg-(--primary)/10 py-0.5 px-1.5 rounded w-max text-(--primary) uppercase text-xs sm:text-sm font-semibold tracking-normal sm:tracking-wide'>Behind the Lens</span>
                        <h1 className='text-2xl sm:text-3xl lg:text-3xl font-medium leading-tight tracking-tight opacity-0 animate-fadeup'>
                            Photography is driven by a deep passion for capturing life's most precious moments with artistrical precision.
                        </h1>
                        <p className='text-base leading-tight text-slate-600 opacity-0 animate-fadeup'>
                            We’re a creative photography studio dedicated to capturing real emotions, honest stories, and beautiful moments. From portraits to weddings, we focus on making every session relaxed, natural, and unforgettable.
                        </p>
                        <p className='text-base leading-tight text-slate-600 opacity-0 animate-fadeup'>
                            We offer a premium photography experience built on elegance, precision, and personalized service.
                        </p>
                        <div className="flex flex-col gap-4">
                            <span className='text-lg font-medium'>Specializations</span>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth
                                        ="2" strokeLinecap
                                        ="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check w-6.5 h-6.5 fill-(--primary) text-white"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                    <span className='text-gray-500'>Creativity</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth
                                        ="2" strokeLinecap
                                        ="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check w-6.5 h-6.5 fill-(--primary) text-white"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                    <span className='text-gray-500'>Quanlity</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth
                                        ="2" strokeLinecap
                                        ="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check w-6.5 h-6.5 fill-(--primary) text-white"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                    <span className='text-gray-500'>Digital Excellence</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth
                                        ="2" strokeLinecap
                                        ="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check w-6.5 h-6.5 fill-(--primary) text-white"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                    <span className='text-gray-500'>Customer Experience</span>
                                </div>
                            </div>
                        </div>
                        <Link to={"/about"} style={{ animationDelay: "1.1s" }} className='btn-secondary flex items-center gap-2 px-5 py-3 w-max rounded-full border border-(--primary) text-(--primary) overflow-hidden opacity-0 animate-fadeup group'>
                            <span className='text-sm sm:text-lg font-medium group-hover:text-white'>Know More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6 lucide lucide-arrow-up-right-icon lucide-arrow-up-right duration-400 group-hover:text-white"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto py-10 sm:py-20 px-6 sm:px-10">
                <div className="flex flex-col gap-4 items-center text-center">
                    <span style={{ animationDelay: ".2s" }} className='bg-(--primary)/10 py-0.5 px-1.5 rounded w-max text-(--primary) uppercase text-xs sm:text-sm font-semibold tracking-normal sm:tracking-wide opacity-0 animate-fadeup'>Gallery</span>
                    <h2 className='text-2xl sm:text-3xl lg:text-3xl font-medium leading-tight tracking-tight opacity-0 animate-fadeup'>Memories We’ve Created</h2>
                    <p className='text-base leading-tight text-slate-600 opacity-0 animate-fadeup'>
                        A glimpse into the moments, emotions, and stories we’ve captured—presented in clean, natural compositions.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 grid-flow-dense gap-4 mt-8">
                    <img src="https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfDB8MHx8fDI%3D" alt="" className='col-span-1 row-span-1 h-full w-full object-cover' />
                    <img src="https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfDB8MHx8fDI%3D" alt="" className="col-span-1 row-span-1 h-full w-full object-cover" />
                    <img src="https://images.unsplash.com/photo-1612599542558-f3022089fb38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJpcnRoZGF5JTIwcGFydHl8ZW58MHwwfDB8fHwy" alt="" className='col-span-2 row-span-1 h-full w-full object-cover' />
                    <img src="https://images.unsplash.com/photo-1566915682737-3e97a7eed93b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwdGVtcGxlfGVufDB8fDB8fHwy" alt="" className="col-span-2 row-span-2 h-full w-full object-cover" />
                    <img src="https://images.unsplash.com/photo-1674479019005-1ade92b0c3fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8Mg%3D%3D" alt="" className="col-span-1 row-span-1 h-full w-full object-cover" />
                    <img src="https://images.unsplash.com/photo-1741823000538-a5a1071b0f87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJhYnklMjBzaG93ZXJ8ZW58MHx8MHx8fDI%3D" alt="" className="col-span-1 row-span-1 h-full w-full object-cover" />
                    <img src="https://images.unsplash.com/photo-1598615646907-540accba17e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1hdGVybml0eSUyMHBob3RvZ3JhcGh5fGVufDB8MHwwfHx8Mg%3D%3D" alt="" className='col-span-2 row-span-1 h-full w-full object-cover' />
                </div>
            </section>
            <section className="max-w-6xl mx-auto py-10 sm:py-20 px-6 sm:px-10">
                <div className="relative overflow-hidden bg-(--primary) px-6 py-15 rounded-2xl">
                    <div className="hidden sm:block">
                        <div className="absolute w-px h-full rounded-full bg-white top-0 right-12 skew-x-[-30deg]" aria-hidden="true"></div>
                        <div className="absolute w-px h-full rounded-full bg-white top-0 right-13 skew-x-[-30deg]" aria-hidden="true"></div>
                        <div className="absolute w-px h-full rounded-full bg-white top-0 right-24 skew-x-[-30deg]" aria-hidden="true"></div>
                        <div className="absolute w-px h-full rounded-full bg-white top-0 right-25 skew-x-[-30deg]" aria-hidden="true"></div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-20">
                        <div className="flex flex-col gap-3 text-white text-center">
                            <div className='text-3xl md:text-5xl font-semibold'>
                                <CountUp
                                    start={0}
                                    end={12}
                                    duration={8}
                                />
                                <span>K+</span>
                            </div>
                            <h2 className='text-base md:text-lg font-medium'>Happy Clients</h2>
                        </div>
                        <div className="flex flex-col gap-3 text-white text-center">
                            <div className='text-3xl md:text-5xl font-semibold'>
                                <CountUp
                                    start={0}
                                    end={23}
                                    duration={6}
                                />
                                <span>+</span>
                            </div>
                            <h2 className='text-base md:text-lg font-medium'>Years of Experience</h2>
                        </div>
                        <div className="flex flex-col gap-3 text-white text-center">
                            <div className='text-3xl md:text-5xl font-semibold'>
                                <CountUp
                                    start={0}
                                    end={200}
                                    duration={5}
                                />
                                <span>%</span>
                            </div>
                            <h2 className='text-base md:text-lg font-medium'>Customer Satisfaction</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto py-10 sm:py-20 px-6 sm:px-10">
                <div className="flex flex-col gap-4 items-center text-center">
                    <span style={{ animationDelay: ".2s" }} className='bg-(--primary)/10 py-0.5 px-1.5 rounded w-max text-(--primary) uppercase text-xs sm:text-sm font-semibold tracking-normal sm:tracking-wide opacity-0 animate-fadeup'>Services</span>
                    <h2 className='text-2xl sm:text-3xl lg:text-3xl font-medium leading-tight tracking-tight opacity-0 animate-fadeup'>From Portraits to Weddings — We Capture Every Detail</h2>
                    <p className='text-base leading-tight text-slate-600 opacity-0 animate-fadeup'>
                        Whether it’s family portraits, newborn shoots, or lifestyle photography, we capture the emotion and warmth in every moment.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 grid-flow-dense gap-4 mt-8">
                    <figure className='card rounded-xl overflow-hidden'>
                        <img src="https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfDB8MHx8fDI%3D" alt="" />
                        <figcaption>Wedding</figcaption>
                    </figure>
                </div>
            </section>
            {/* <section className='h-screen relative'>
                <div className='absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
                    <h2 className='text-white text-2xl sm:text-3xl lg:text-4xl font-semibold logo whitespace-nowrap'>Kalaimagal's Photography</h2>
                </div>
                <div className="absolute bg-linear-to-t from-transparent to-black/50 w-full h-full text-center flex flex-col items-center justify-center gap-6">

                    <h1 style={{ animationDelay: ".3s" }} className='text-4xl sm:text-6xl lg:text-8xl font-medium leading-tight tracking-tight text-white opacity-0 animate-fadeup'>Capture Moments That Tell Your Story</h1>
                    <p style={{ animationDelay: ".6s" }} className='text-base sm:text-xl lg:text-2xl text-white opacity-0 animate-fadeup'>Timeless photography crafted with precision, creativity, and passion. </p>
                    <div className="">
                        <Link to="/gallery" style={{ animationDelay: ".6s" }} className='flex items-center gap-2 px-6 py-5 w-max rounded-full bg-black text-white mt-3 sm:mt-6 overflow-hidden opacity-0 animate-fadeup group'>
                            <span className='text-sm sm:text-2xl font-medium'>Explore Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-7 sm:h-7 lucide lucide-arrow-up-right-icon lucide-arrow-up-right translate-y-12 group-hover:translate-y-0 transition duration-300"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </Link>
                    </div>
                </div>
                <div className="h-screen">
                    <img src="https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover' />
                </div>
            </section> */}
            {/* <section className="max-w-7xl mx-auto py-30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 px-10">
                    <div className="flex flex-col gap-4 justify-between">
                        <div className="flex flex-col gap-2">
                            <span className='text-lg font-medium text-gray-600'>(01)</span>
                            <h2 className='text-2xl lg:text-3xl font-medium leading-tight tracking-tight text-slate-900 opacity-0 animate-fadeup'>Behind the Lens</h2>
                        </div>
                        <p className='text-base sm:text-lg leading-tight text-slate-600 opacity-0 animate-fadeup'>
                            We’re a creative photography studio dedicated to capturing real emotions, honest stories, and beautiful moments. From portraits to weddings, we focus on making every session relaxed, natural, and unforgettable.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl'>
                            <strong>Photography</strong> is driven by a deep passion for capturing life's most precious <strong>moments</strong> with artistrical precision.
                        </h1>
                        <Link style={{ animationDelay: ".6s" }} className='btn-secondary flex items-center gap-2 px-6 py-5 w-max rounded-full border border-black mt-3 sm:mt-6 overflow-hidden opacity-0 animate-fadeup group'>
                            <span className='text-sm sm:text-2xl font-medium group-hover:text-white'>Explore Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-7 sm:h-7 lucide lucide-arrow-up-right-icon lucide-arrow-up-right group-hover:text-white"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-blackpy-30">
                <div className="max-w-7xl mx-auto px-10">

                </div>
            </section> */}
        </>
    )
}

export default Home