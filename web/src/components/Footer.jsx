import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amit-pandey-8a91b4140', Icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/AmitPandey1', Icon: Github },
    { label: 'Email', href: 'mailto:ap78700@gmail.com', Icon: Mail },
];

export default function Footer() {
    return (
        <footer className="bg-page text-foreground">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:gap-10 sm:px-6 sm:py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
                <div className="flex items-center gap-3 sm:col-span-2 lg:col-span-1">
                    <span className="shrink-0 rounded-xl bg-gradient-to-tr from-android to-sky p-[2px]">
                        <img
                            src="/amit.jpg"
                            alt="Portrait of Amit Pandey"
                            className="h-12 w-12 rounded-[10px] object-cover object-top"
                        />
                    </span>
                    <span className="min-w-0">
                        <span className="block font-display text-base font-bold tracking-tight text-foreground">Amit Pandey</span>
                        <span className="block truncate font-mono text-[10px] uppercase tracking-[0.14em] text-android">
                            Senior Android Developer
                        </span>
                    </span>
                </div>
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Phone</p>
                    <a
                        href="tel:+917379363416"
                        className="mt-2 block text-sm text-copy transition-colors hover:text-android"
                    >
                        +91 7379363416
                    </a>
                </div>
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Email</p>
                    <a
                        href="mailto:ap78700@gmail.com"
                        className="mt-2 block text-sm text-copy transition-colors hover:text-android"
                    >
                        ap78700@gmail.com
                    </a>
                </div>
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
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
                                className="flex h-9 w-9 items-center justify-center rounded-full text-copy ring-1 ring-line/15 transition-colors hover:bg-android hover:text-on-android"
                            >
                                <Icon className="h-4 w-4" strokeWidth={1.8} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="lg:text-right">
                    <p className="text-sm text-muted-foreground">© 2026 Amit Pandey. All rights reserved.</p>
                    <p className="mt-1 text-sm text-muted-foreground">Senior Android Developer · Noida, India.</p>
                </div>
            </div>
        </footer>
    );
}
