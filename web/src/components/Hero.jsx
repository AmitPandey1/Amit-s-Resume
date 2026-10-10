import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, Github, Linkedin, Mail } from 'lucide-react';
import DigitalCard from './DigitalCard';
import CountUp from './CountUp';
import { profile } from '../data/resume';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const techBadges = ['Kotlin', 'Java', 'Jetpack Compose', 'FCM', 'REST APIs', 'MVVM', 'Room'];

const stats = [
  { value: profile.yearsExperience, suffix: '+', label: 'Years of Android' },
  { value: 4, suffix: '', label: 'Platforms supported' },
  { value: 2, suffix: '', label: 'Apps on Play Store' }
];

export default function Hero({ onShowFullDetails }) {
  return (
    <section id="top" className="relative overflow-hidden bg-page text-foreground">
      {/* subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '44px 44px'
        }}
      />
      {/* android-green accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-android/20 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden min-w-0 md:block"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-android/40 bg-android/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-android"
          >
            <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
            Senior Android &amp; Mobile SDK Developer
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(2.75rem,10vw,5rem)] font-extrabold leading-[1.02] tracking-tight"
          >
            Hi, I&apos;m <span className="text-android">Amit Pandey</span>.
            <br />
            I build what ships
            <br />
            on 3 billion phones.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-copy sm:text-lg">
            Nearly 8 years engineering the{' '}
            <strong className="font-semibold text-foreground">AppICE Android SDK</strong> — push
            notifications, in-app messaging, geofencing and cross-platform bridges for React
            Native, Flutter, Cordova and Kony — plus apps live on the Google Play Store.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#resume"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-android px-6 py-3.5 font-display text-sm font-bold text-on-android shadow-lg shadow-android/20 transition-shadow hover:shadow-xl hover:shadow-android/30"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              View my work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-line/25 px-6 py-3.5 font-display text-sm font-bold text-foreground transition-colors hover:border-android hover:text-android"
            >
              Let&apos;s talk
            </motion.a>
            <div className="flex items-center gap-2">
              {[
                { label: 'GitHub', href: 'https://github.com/AmitPandey1', Icon: Github },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amit-pandey-8a91b4140', Icon: Linkedin },
                { label: 'Email', href: 'mailto:ap78700@gmail.com', Icon: Mail }
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line/20 text-copy transition-colors hover:border-android hover:text-android"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-line/10 bg-line/5 px-3 py-1 font-mono text-[11px] text-copy"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-line/10 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-foreground">
                  <CountUp value={stat.value} suffix={stat.suffix} locale="en-US" />
                </dd>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-full lg:justify-self-end"
        >
          <DigitalCard onShowFullDetails={onShowFullDetails} />
        </motion.div>
      </div>
    </section>
  );
}
