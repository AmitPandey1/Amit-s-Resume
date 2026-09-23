import React from 'react';
import { motion } from 'framer-motion';
import CornerFrame from './CornerFrame';

const PORTRAIT_URL = '/amit.jpg';

const circleLinks = [
  {
    label: 'Resume',
    href: '#resume',
    className: 'bg-[#1a3a5c] !text-white'
  },
  {
    label: 'Projects',
    href: '#projects',
    className: 'bg-[#0f766e] !text-white'
  },
  {
    label: "Let's talk",
    href: '#contact',
    className: 'bg-[#111111] !text-white'
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Hero() {
  return (
    <section id="top" className="relative flex items-center lg:min-h-[calc(100dvh-84px)]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 py-8 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[220px] sm:max-w-sm lg:max-w-md"
        >
          <CornerFrame>
            <div className="overflow-hidden rounded-full">
              <img
                src={PORTRAIT_URL}
                alt="Portrait of Amit Pandey, Senior Android Developer"
                width={480}
                height={480}
                className="aspect-square w-full object-cover object-top"
              />
            </div>
          </CornerFrame>
          <p className="mt-5 text-center font-mono text-[10px] leading-relaxed uppercase tracking-[0.12em] sm:mt-7 sm:text-[11px] sm:tracking-[0.25em] text-ink/50">
            Fig. 01 — Amit Pandey, Android Developer, Noida
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="min-w-0 text-left">
          <motion.p variants={item} className="font-mono text-[11px] uppercase tracking-[0.12em] leading-relaxed text-ink/50 mb-3 sm:tracking-[0.25em] sm:mb-4">
            Senior Android Developer · 8 Years Experience
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.75rem,12vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-ink"
          >
            Amit<br />Pandey
          </motion.h1>
          <motion.h2 variants={item} className="mt-4 font-display text-lg sm:mt-5 sm:text-xl font-bold tracking-tight text-ink/80">
            Android SDK &amp; Mobile Platform Engineer
          </motion.h2>
          <motion.p variants={item} className="mt-3 max-w-md text-sm sm:mt-4 sm:text-base leading-relaxed text-ink/70 lg:mx-0">
            Building robust mobile SDKs and platform solutions — push notifications, in-app messaging, geofencing, and cross-platform integrations — for nearly 8 years at Semusi.
          </motion.p>
          <motion.div variants={item} className="mt-6 grid grid-cols-3 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-6">
            {circleLinks.map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className={`flex aspect-square w-full min-w-0 items-center justify-center rounded-full font-display text-sm sm:text-base font-bold shadow-sm transition-shadow duration-300 hover:shadow-xl sm:h-32 sm:w-32 lg:h-36 lg:w-36 ${link.className}`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}