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
    'w-full rounded-lg border border-ink/20 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink';

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
        <section id="contact" className="scroll-mt-16 border-t border-ink/10">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
                        03 — Contact
                    </p>
                    <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
                        Let's work together
                    </h2>
                </Reveal>

                <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_360px] lg:gap-20">
                    <Reveal>
                        {sent ? (
                            <div className="flex h-full min-h-[320px] flex-col items-start justify-center rounded-lg border border-ink/15 p-10">
                                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pool">
                                    <Check className="h-6 w-6 text-ink" strokeWidth={2.5} />
                                </span>
                                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink">
                                    Message sent
                                </h3>
                                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/70">
                                    Thanks for reaching out, {form.name.split(' ')[0]}. I read every message personally and will get back to you within 48 hours.
                                </p>
                                <button
                                    type="button"
                                    onClick={reset}
                                    className="mt-6 text-sm font-medium text-ink underline decoration-sun decoration-2 underline-offset-4 transition-colors hover:text-ink/70"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="contact-name" className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60">
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
                                        <label htmlFor="contact-email" className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60">
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
                                    <label htmlFor="contact-message" className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60">
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
                                        className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-pool font-display text-sm font-bold text-ink shadow-sm transition-shadow duration-300 hover:shadow-xl"
                                    >
                                        Send
                                    </motion.button>
                                    <p className="max-w-[220px] text-xs leading-relaxed text-ink/50">
                                        Your message goes directly to Amit's inbox.
                                    </p>
                                </div>
                            </form>
                        )}
                    </Reveal>

                    <Reveal delay={0.1}>
                        <aside className="space-y-10 lg:border-l lg:border-ink/10 lg:pl-12">
                            <div className="space-y-6">
                                {details.map((item) => (
                                    <div key={item.label}>
                                        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="mt-1.5 block text-sm font-medium text-ink underline-offset-4 hover:underline hover:decoration-sun hover:decoration-2"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="mt-1.5 text-sm font-medium text-ink">{item.value}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div>
                                <a
                                    href="/amit-pandey.vcf"
                                    download="Amit-Pandey.vcf"
                                    aria-describedby="save-contact-help"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                                >
                                    <UserPlus className="h-4 w-4" aria-hidden="true" />
                                    Save to contacts
                                </a>
                                <p id="save-contact-help" className="mt-3 text-xs leading-relaxed text-ink/60">
                                    Save my name, phone, email, and address. Open the downloaded contact file and choose Save or Import in your contacts app.
                                </p>
                            </div>

                            <div>
                                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
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
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-all duration-200 hover:border-ink hover:bg-ink hover:text-paper"
                                        >
                                            <Icon className="h-4 w-4" strokeWidth={1.8} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-lg border border-ink/15 p-5">
                                <p className="flex items-center gap-2 text-sm font-medium text-ink">
                                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-sun" />
                                    Open to opportunities
                                </p>
                                <p className="mt-2 text-xs leading-relaxed text-ink/60">
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
