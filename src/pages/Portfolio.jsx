import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'The Alpine Wedding',
        client: 'Sarah & John',
        category: 'Wedding',
        image: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=900&auto=format&fit=crop',
        year: '2024'
    },
    {
        id: 2,
        title: 'Urban Solitude',
        client: 'Vogue Italia',
        category: 'Editorial',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200',
        year: '2023'
    },
    {
        id: 3,
        title: 'Wilderness',
        client: 'Nat Geo Travel',
        category: 'Landscape',
        image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200',
        year: '2023'
    },
];

const Portfolio = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-16">Selected Works</h1>

            <div className="space-y-20">
                {projects.map((project) => (
                    <div key={project.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden mb-6 aspect-video md:aspect-21/9">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-200 pb-6">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">{project.category} — {project.year}</p>
                                <h2 className="text-3xl font-bold group-hover:text-neutral-600 transition-colors">{project.title}</h2>
                            </div>
                            <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
                                View Case Study <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
