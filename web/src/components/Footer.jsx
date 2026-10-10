import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amit-pandey-8a91b4140', Icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/AmitPandey1', Icon: Github },
    { label: 'Email', href: 'mailto:ap78700@gmail.com', Icon: Mail },
];

export default function Footer() {
    return (
        <footer className="bg-ink text-paper">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:gap-10 sm:px-6 sm:py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">Phone</p>
                    <a
                        href="tel:+917379363416"
                        className="mt-2 block text-sm text-zinc-300 transition-colors hover:text-android"
                    >
                        +91 7379363416
                    </a>
                </div>
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">Email</p>
                    <a
                        href="mailto:ap78700@gmail.com"
                        className="mt-2 block text-sm text-zinc-300 transition-colors hover:text-android"
                    >
                        ap78700@gmail.com
                    </a>
                </div>
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                        Find me online
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                        {socials.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-300 ring-1 ring-white/15 transition-colors hover:bg-android hover:text-ink"
                            >
                                <Icon className="h-4 w-4" strokeWidth={1.8} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="lg:text-right">
                    <p className="text-sm text-zinc-400">© 2026 Amit Pandey. All rights reserved.</p>
                    <p className="mt-1 text-sm text-zinc-400">Senior Android Developer · Noida, India.</p>
                </div>
            </div>
        </footer>
    );
}
