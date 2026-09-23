import React from 'react';

const navItems = [
    { label: 'Resume', href: '#resume' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Header() {
    return (
        <header className="w-full">
            <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-5 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:py-6 lg:px-10">
                <a href="#top" className="flex items-start gap-2.5 md:items-baseline" aria-label="Amit Pandey — back to top">
                    <span aria-hidden="true" className="mt-2 inline-block h-3 w-3 shrink-0 rounded-full bg-sun md:mt-0 md:translate-y-[1px]" />
                    <span className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-2.5">
                        <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-ink">Amit Pandey</span>
                        <span className="whitespace-nowrap text-sm text-ink/60">Android Developer</span>
                    </span>
                </a>
                <nav aria-label="Primary">
                    <ul className="flex flex-nowrap items-center gap-3 whitespace-nowrap text-sm sm:gap-5 sm:text-base">
                        {navItems.map((item, i) => (
                            <li key={item.href} className="flex items-center gap-3 sm:gap-5">
                                {i > 0 && <span aria-hidden="true" className="h-4 w-px bg-ink/25" />}
                                <a
                                    href={item.href}
                                    className="inline-flex min-h-11 items-center text-ink/75 underline-offset-4 transition-colors hover:text-ink hover:underline hover:decoration-sun hover:decoration-2"
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
