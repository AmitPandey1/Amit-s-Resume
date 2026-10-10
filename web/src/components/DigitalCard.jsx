import React from 'react';
import { profile } from '../data/resume';
import { motion, useReducedMotion } from 'framer-motion';
import { Smartphone, Mail, Phone, MapPin, QrCode, Download, FileText } from 'lucide-react';

// A digital business card — the hero visual of the portfolio.
// Uses Amit's real profile photo (public/amit.jpg) and mirrors the
// theme-aware device screen design used across the site.

const androidRobot = (className) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
        <path
            fill="currentColor"
            d="M17.6 9.48l1.84-3.18a.3.3 0 0 0-.11-.42.3.3 0 0 0-.41.11l-1.87 3.24a11.5 11.5 0 0 0-10.1 0L5.08 6a.3.3 0 0 0-.41-.11.3.3 0 0 0-.11.42L6.4 9.48A10.8 10.8 0 0 0 1 17.5h22a10.8 10.8 0 0 0-5.4-8.02zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
        />
    </svg>
);

export default function DigitalCard({ className = '', onShowFullDetails }) {
    const reduceMotion = useReducedMotion();

    return (
        <div className={`relative mx-auto w-[340px] max-w-full sm:w-[380px] ${className}`}>
            {/* glow */}
            <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[60px] bg-gradient-to-tr from-android/25 via-sky/10 to-transparent blur-2xl"
            />

            {/* floating badges */}
            <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -left-6 top-16 z-10 hidden rotate-[-4deg] items-center gap-1.5 rounded-full border border-line/10 bg-surface/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-android shadow-xl backdrop-blur sm:flex"
            >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-android" />
                Available for hire
            </motion.div>
            <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -right-5 bottom-20 z-10 hidden rotate-[3deg] items-center gap-1.5 rounded-full border border-line/10 bg-surface/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-sky shadow-xl backdrop-blur sm:flex"
            >
                API 36 · Kotlin 2.0
            </motion.div>

            {/* the card */}
            <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 32, rotate: -1 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="relative overflow-hidden rounded-3xl border-y-[10px] border-x-[7px] border-frame bg-background shadow-2xl shadow-black/50"
            >
                {/* subtle grid, like a device wallpaper */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                />

                {/* status bar */}
                <div className="flex items-center justify-between px-5 pt-2 font-mono text-[10px] text-muted-foreground">
                    <span>9:41</span>
                    <span className="flex items-center gap-1.5">
                        <Smartphone className="h-3 w-3 text-android" />
                        <span className="inline-block h-2 w-4 rounded-[2px] border border-zinc-500 p-[1px]">
                            <span className="block h-full w-2/3 rounded-[1px] bg-android" />
                        </span>
                    </span>
                </div>

                {/* header strip */}
                <div className="mx-5 mt-3 flex items-center justify-between rounded-xl border border-line/10 bg-line/5 px-3.5 py-2">
                    <span className="flex items-center gap-1.5">
                        {androidRobot('h-3.5 w-3.5 text-android')}
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                            Digital Card
                        </span>
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-android" />
                        online
                    </span>
                </div>

                {/* identity */}
                <div className="relative mx-5 mt-5 flex items-center gap-4">
                    <div className="shrink-0 rounded-2xl bg-gradient-to-tr from-android to-sky p-[2px] shadow-lg shadow-android/20">
                        <img
                            src="/amit.jpg"
                            alt="Portrait of Amit Pandey"
                            className="h-20 w-20 rounded-[14px] object-cover object-top"
                        />
                    </div>
                    <div className="min-w-0">
                        <p className="font-display text-xl font-extrabold leading-tight tracking-tight text-foreground">
                            Amit Pandey
                        </p>
                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-android">
                            Senior Android &amp; Mobile SDK Developer
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">Semusi Technologies · Noida, IN</p>
                    </div>
                </div>

                <div className="mx-5 mt-4 flex items-baseline gap-2 rounded-xl border border-android/25 bg-android/10 px-4 py-3">
                    <span className="font-display text-2xl font-extrabold text-android">{profile.yearsExperience}+</span>
                    <span className="text-sm font-medium text-foreground">years of Android experience</span>
                </div>

                {/* contact rows */}
                <ul className="mx-5 mt-5 space-y-1.5">
                    {[
                        { Icon: Mail, label: 'ap78700@gmail.com', href: 'mailto:ap78700@gmail.com' },
                        { Icon: Phone, label: '+91 7379363416', href: 'tel:+917379363416' },
                        { Icon: MapPin, label: 'Noida, Uttar Pradesh, India', href: null },
                    ].map(({ Icon, label, href }) => {
                        const row = (
                            <li className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-line/5">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line/10 bg-line/5 text-android">
                                    <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                                </span>
                                <span className="truncate text-sm text-foreground">{label}</span>
                            </li>
                        );
                        return href ? (
                            <a key={label} href={href}>
                                {row}
                            </a>
                        ) : (
                            <React.Fragment key={label}>{row}</React.Fragment>
                        );
                    })}
                </ul>

                {/* QR + save contact */}
                <div className="mx-5 mt-5 flex flex-col items-center gap-3 rounded-2xl border border-line/10 bg-line/5 p-4">
                    <a href="/amit-pandey-qr.svg" target="_blank" rel="noreferrer" aria-label="Open contact QR code at full size" className="block shrink-0 rounded-lg bg-white p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-android">
                        <img src="/amit-pandey-qr.svg" width="164" height="164" alt="Scan to save Amit Pandey's name, phone number, email and address" />
                    </a>
                    <div className="w-full min-w-0">
                        <p className="flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                            <QrCode className="h-3 w-3 text-sky" /> Scan to connect
                        </p>
                        <p className="mt-1 text-center text-xs text-muted-foreground">Scan with your camera to save my contact.</p>
                        <a
                            href="/amit-pandey.vcf"
                            download="Amit-Pandey.vcf"
                            className="mt-2 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-android px-4 font-display text-xs font-bold text-on-android shadow-md shadow-android/25 transition-all hover:brightness-110"
                        >
                            <Download className="h-3.5 w-3.5" />
                            Save Contact (.vcf)
                        </a>
                    </div>
                </div>

                {/* footer chips */}
                <div className="mx-5 mb-5 mt-4 flex flex-wrap items-center gap-1.5">
                    {['Kotlin', 'Java', 'Jetpack Compose', 'FCM', 'MVVM'].map((t) => (
                        <span
                            key={t}
                            className="rounded-md border border-line/10 bg-line/5 px-2 py-0.5 font-mono text-[9px] text-muted-foreground"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* mobile actions — full biodata + resume download live in the sheet */}
                {onShowFullDetails && (
                    <div className="mx-5 mb-4 md:hidden">
                        <button
                            type="button"
                            onClick={onShowFullDetails}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-android/50 bg-android/10 px-4 font-display text-sm font-bold text-android transition-colors active:bg-android active:text-on-android"
                        >
                            <FileText className="h-4 w-4" aria-hidden="true" />
                            Full Details &amp; Resume
                        </button>
                    </div>
                )}

                {/* gesture pill */}
                <div className="flex justify-center pb-3">
                    <span className="h-1 w-20 rounded-full bg-zinc-600" />
                </div>
            </motion.div>
        </div>
    );
}
