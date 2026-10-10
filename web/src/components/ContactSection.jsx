import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Linkedin, Github, Mail, UserPlus } from 'lucide-react';
import Reveal from './Reveal';

const details = [
    { label: 'Email', value: 'ap78700@gmail.com', href: 'mailto:ap78700@gmail.com' },
    { label: 'Phone', value: '+91 7379363416', href: 'tel:+917379363416' },
    { label: 'Location', value: 'Noida, Uttar Pradesh, India', href: null },
];

const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amit-pandey-8a91b4140', Icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/AmitPandey1', Icon: Github },
    { label: 'Email', href: 'mailto:ap78700@gmail.com', Icon: Mail },
];

const inputClass =
    'w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-base text-white sm:text-sm placeholder:text-zinc-500 transition-colors focus:border-android focus:outline-none focus:ring-1 focus:ring-android/60';

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    const update = (field) => (event) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextErrors = {};
        if (!form.name.trim()) nextErrors.name = 'Please tell me your name.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
            nextErrors.email = 'Please enter a valid email address.';
        if (form.message.trim().length < 10)
            nextErrors.message = 'A few more words would help — at least 10 characters.';
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length === 0) setSent(true);
    };

    const reset = () => {
        setForm({ name: '', email: '', message: '' });
        setErrors({});
        setSent(false);
    };

    return (
        <section id="contact" className="scroll-mt-16 border-t border-white/10 bg-zinc-950 text-paper">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-zinc-400">
                        03 — Contact
                    </p>
                    <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Let's work together
                    </h2>
                </Reveal>

                <div className="mt-8 grid gap-10 sm:mt-14 sm:gap-14 lg:grid-cols-[1fr_360px] lg:gap-20">
                    <Reveal>
                        {sent ? (
                            <div className="flex h-full min-h-[320px] flex-col items-start justify-center rounded-lg border border-white/10 p-5 sm:p-10">
                                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-android">
                                    <Check className="h-6 w-6 text-white" strokeWidth={2.5} />
                                </span>
                                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                                    Message sent
                                </h3>
                                <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-300">
                                    Thanks for reaching out, {form.name.split(' ')[0]}. I read every message personally and will get back to you within 48 hours.
                                </p>
                                <button
                                    type="button"
                                    onClick={reset}
                                    className="mt-6 text-sm font-medium text-white underline decoration-android decoration-2 underline-offset-4 transition-colors hover:text-zinc-300"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="contact-name" className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-zinc-400">
                                            Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            value={form.name}
                                            onChange={update('name')}
                                            placeholder="Your name"
                                            className={inputClass}
                                        />
                                        {errors.name && <p className="text-xs text-signal">{errors.name}</p>}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="contact-email" className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-zinc-400">
                                            Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            value={form.email}
                                            onChange={update('email')}
                                            placeholder="you@example.com"
                                            className={inputClass}
                                        />
                                        {errors.email && <p className="text-xs text-signal">{errors.email}</p>}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="contact-message" className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-zinc-400">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        rows={6}
                                        value={form.message}
                                        onChange={update('message')}
                                        placeholder="Tell me about the opportunity, timeline, and what success looks like."
                                        className={`${inputClass} resize-y`}
                                    />
                                    {errors.message && <p className="text-xs text-signal">{errors.message}</p>}
                                </div>
                                <div className="flex items-center gap-6 pt-2">
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.07 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                        className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-android font-display text-sm font-bold text-zinc-950 shadow-md shadow-android/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-android/30"
                                    >
                                        Send
                                    </motion.button>
                                    <p className="max-w-[220px] text-xs leading-relaxed text-zinc-400">
                                        Your message goes directly to Amit's inbox.
                                    </p>
                                </div>
                            </form>
                        )}
                    </Reveal>

                    <Reveal delay={0.1}>
                        <aside className="space-y-10 lg:border-l lg:border-white/10 lg:pl-12">
                            <div className="space-y-6">
                                {details.map((item) => (
                                    <div key={item.label}>
                                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-zinc-400">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="mt-1.5 block text-sm font-medium text-white underline-offset-4 hover:underline hover:decoration-android hover:decoration-2"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="mt-1.5 text-sm font-medium text-white">{item.value}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div>
                                <a
                                    href="/amit-pandey.vcf"
                                    download="Amit-Pandey.vcf"
                                    aria-describedby="save-contact-help"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-android"
                                >
                                    <UserPlus className="h-4 w-4" aria-hidden="true" />
                                    Save to contacts
                                </a>
                                <p id="save-contact-help" className="mt-3 text-xs leading-relaxed text-zinc-400">
                                    Save my name, phone, email, and address. Open the downloaded contact file and choose Save or Import in your contacts app.
                                </p>
                            </div>

                            <div>
                                <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-zinc-400">
                                    Find me online
                                </p>
                                <div className="mt-3 flex items-center gap-3">
                                    {socials.map(({ label, href, Icon }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={label}
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-200 hover:border-android hover:bg-android/10 hover:text-android"
                                        >
                                            <Icon className="h-4 w-4" strokeWidth={1.8} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-lg border border-white/10 p-5">
                                <p className="flex items-center gap-2 text-sm font-medium text-white">
                                    <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-android" />
                                    Open to opportunities
                                </p>
                                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                                    Available for senior Android/SDK engineering roles and freelance mobile platform projects.
                                </p>
                            </div>
                        </aside>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
