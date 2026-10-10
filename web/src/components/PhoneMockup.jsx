import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// A pure-CSS Android phone mockup used as the hero visual.
// Renders a status bar, an AppICE-style push notification, and an in-app
// message card — the exact features Amit builds in his SDKs.

const androidRobot = (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 text-[#3ddc84]">
        <path
            fill="currentColor"
            d="M17.6 9.48l1.84-3.18a.3.3 0 0 0-.11-.42.3.3 0 0 0-.41.11l-1.87 3.24a11.5 11.5 0 0 0-10.1 0L5.08 6a.3.3 0 0 0-.41-.11.3.3 0 0 0-.11.42L6.4 9.48A10.8 10.8 0 0 0 1 17.5h22a10.8 10.8 0 0 0-5.4-8.02zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
        />
    </svg>
);

export default function PhoneMockup({ className = '' }) {
    const reduceMotion = useReducedMotion();

    return (
        <div className={`relative mx-auto w-[230px] sm:w-[260px] ${className}`}>
            {/* glow */}
            <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[70px] bg-gradient-to-tr from-android/20 via-sky/10 to-transparent blur-2xl"
            />

            {/* device frame */}
            <div className="relative rounded-[42px] border-y-[10px] border-x-[7px] border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50">
                {/* screen */}
                <div className="relative aspect-[9/19.2] overflow-hidden rounded-[32px] bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-3 font-sans">
                    {/* notch */}
                    <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-zinc-950 ring-1 ring-white/5" />

                    {/* status bar */}
                    <div className="flex items-center justify-between pt-1 font-mono text-[9px] text-zinc-400">
                        <span>9:41</span>
                        <span className="flex items-center gap-1">
                            <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current"><path d="M2 22h20V2z" opacity=".9" /></svg>
                            <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current"><path d="M15.5 4A7 7 0 0 0 8 7.6L6.6 6.2A9 9 0 0 1 15.5 3a9 9 0 0 1 6.4 2.6L20.4 7A7 7 0 0 0 15.5 4zm-3 4a4 4 0 0 0-2.8 1.2l1.4 1.4a2 2 0 0 1 2.8 0l1.4-1.4A4 4 0 0 0 12.5 8zM11 16a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" transform="translate(-1 1)" /></svg>
                            <span className="inline-block h-2 w-4 rounded-[2px] border border-zinc-500 p-[1px]"><span className="block h-full w-2/3 rounded-[1px] bg-zinc-400" /></span>
                        </span>
                    </div>

                    {/* lock-screen time */}
                    <div className="mt-6 text-center">
                        <p className="font-display text-3xl font-bold tracking-tight text-white">9:41</p>
                        <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                            Monday · Oct 11
                        </p>
                    </div>

                    {/* push notification */}
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: -14, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-5 rounded-xl bg-zinc-800/90 p-3 shadow-lg ring-1 ring-white/10 backdrop-blur"
                    >
                        <div className="flex items-center gap-1.5">
                            {androidRobot}
                            <span className="text-[9px] font-semibold uppercase tracking-wider text-zinc-400">
                                AppICE · now
                            </span>
                        </div>
                        <p className="mt-1.5 text-[11px] font-semibold leading-snug text-white">
                            🎉 Flash sale ends tonight!
                        </p>
                        <p className="mt-0.5 text-[10px] leading-snug text-zinc-400">
                            Up to 50% off — delivered via FCM rich notification.
                        </p>
                        <div className="mt-2 flex gap-1.5">
                            <span className="rounded-md bg-zinc-700 px-2 py-1 text-[8px] font-medium uppercase tracking-wider text-zinc-300">Open</span>
                            <span className="rounded-md bg-zinc-700 px-2 py-1 text-[8px] font-medium uppercase tracking-wider text-zinc-300">Dismiss</span>
                        </div>
                    </motion.div>

                    {/* in-app message */}
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-3 space-y-2"
                    >
                        <div className="ml-8 max-w-[85%] rounded-2xl rounded-tr-sm bg-android/90 px-3 py-2">
                            <p className="text-[10px] leading-snug text-zinc-950">
                                In-app campaign received ✅
                            </p>
                        </div>
                        <div className="mr-8 max-w-[85%] rounded-2xl rounded-tl-sm bg-zinc-800 px-3 py-2 ring-1 ring-white/5">
                            <p className="text-[10px] leading-snug text-zinc-300">
                                Geofence entry event tracked 📍
                            </p>
                        </div>
                    </motion.div>

                    {/* bottom pill nav */}
                    <div className="absolute inset-x-0 bottom-3 flex justify-center">
                        <span className="h-1 w-20 rounded-full bg-zinc-600" />
                    </div>
                </div>
            </div>

            {/* floating badge */}
            <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-6 top-24 hidden rotate-[-4deg] items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-android shadow-xl backdrop-blur sm:flex"
            >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-android" />
                Push delivered · 120ms
            </motion.div>

            <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -right-5 bottom-28 hidden rotate-[3deg] items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-sky shadow-xl backdrop-blur sm:flex"
            >
                API 36 · Kotlin 2.0
            </motion.div>
        </div>
    );
}
