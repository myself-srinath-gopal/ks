import React from 'react';

const stories = [
    {
        id: 1,
        title: 'Chasing Light in Northern Norway',
        excerpt: 'A 10-day expedition into the arctic circle to capture the aurora borealis.',
        date: 'Oct 12, 2023',
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800'
    },
    {
        id: 2,
        title: 'The Art of Black & White',
        excerpt: 'Why removing color can sometimes add more meaning to a photograph.',
        date: 'Sep 28, 2023',
        image: 'https://images.unsplash.com/photo-1713976630301-4de92cc92500?w=900&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Gear Guide 2024',
        excerpt: 'My essential kit for wedding photography and why I chose these lenses.',
        date: 'Aug 15, 2023',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800'
    }
];

const Stories = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
            <div className="max-w-3xl mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Journal</h1>
                <p className="text-lg text-neutral-600">Behind the scenes, photography tips, and tales from our travels.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {stories.map((story) => (
                    <article key={story.id} className="flex flex-col group cursor-pointer">
                        <div className="overflow-hidden mb-6 aspect-4/3">
                            <img
                                src={story.image}
                                alt={story.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="grow">
                            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{story.date}</span>
                            <h2 className="text-xl font-bold mt-2 mb-3 group-hover:text-neutral-600 transition-colors">{story.title}</h2>
                            <p className="text-neutral-600 text-sm leading-relaxed">{story.excerpt}</p>
                        </div>
                        <div className="mt-4">
                            <span className="text-xs font-bold uppercase tracking-widest border-b border-neutral-300 pb-1">Read Story</span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Stories;
