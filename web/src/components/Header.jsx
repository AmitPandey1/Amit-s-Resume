import React from 'react';

const navItems = [
    { label: 'Resume', href: '#resume' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Header() {
    return (
        <header className="w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
                <a href="#top" className="flex items-baseline gap-2.5" aria-label="Amit Pandey — back to top">
                    <span aria-hidden="true" className="inline-block h-3 w-3 translate-y-[1px] rounded-full bg-sun" />
                    <span className="font-display text-lg font-bold tracking-tight text-ink">Amit Pandey</span>
                    <span className="text-sm text-ink/60">Android Developer</span>
                </a>
                <nav aria-label="Primary">
                    <ul className="flex items-center gap-3 text-sm sm:gap-5 sm:text-base">
                        {navItems.map((item, i) => (
                            <li key={item.href} className="flex items-center gap-3 sm:gap-5">
                                {i > 0 && <span aria-hidden="true" className="h-4 w-px bg-ink/25" />}
                                <a
                                    href={item.href}
                                    className="text-ink/75 underline-offset-4 transition-colors hover:text-ink hover:underline hover:decoration-sun hover:decoration-2"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
