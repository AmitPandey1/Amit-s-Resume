import React from 'react';

// Android-green + sky-blue accents for the mobile-dev theme.
const androidRobot = (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-android">
        <path
            fill="currentColor"
            d="M17.6 9.48l1.84-3.18a.3.3 0 0 0-.11-.42.3.3 0 0 0-.41.11l-1.87 3.24a11.5 11.5 0 0 0-10.1 0L5.08 6a.3.3 0 0 0-.41-.11.3.3 0 0 0-.11.42L6.4 9.48A10.8 10.8 0 0 0 1 17.5h22a10.8 10.8 0 0 0-5.4-8.02zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
        />
    </svg>
);

export default function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-10">
                <a href="#top" className="flex items-center gap-2.5" aria-label="Amit Pandey — back to top">
                    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg ring-1 ring-android/50">
                        <img
                            src="/amit.jpg"
                            alt=""
                            className="h-full w-full object-cover object-top"
                        />
                        <span className="absolute inset-x-0 bottom-0 flex justify-center bg-black/45 py-px">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-2 w-2 text-android">
                                <path fill="currentColor" d="M17.6 9.48l1.84-3.18a.3.3 0 0 0-.11-.42.3.3 0 0 0-.41.11l-1.87 3.24a11.5 11.5 0 0 0-10.1 0L5.08 6a.3.3 0 0 0-.41-.11.3.3 0 0 0-.11.42L6.4 9.48A10.8 10.8 0 0 0 1 17.5h22a10.8 10.8 0 0 0-5.4-8.02zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
                            </svg>
                        </span>
                    </span>
                    <span className="flex flex-col leading-tight">
                        <span className="whitespace-nowrap font-display text-base font-bold tracking-tight text-white sm:text-lg">
                            Amit Pandey
                        </span>
                        <span className="hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 sm:block">
                            Android Developer
                        </span>
                    </span>
                </a>
                <nav aria-label="Primary">
                    <ul className="flex items-center gap-2 text-sm sm:gap-3">
                        {[
                            { label: 'Resume', href: '#resume' },
                            { label: 'Projects', href: '#projects' },
                        ].map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="inline-flex min-h-11 items-center rounded-full px-3 font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white sm:px-4"
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
