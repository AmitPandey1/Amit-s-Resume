import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download } from 'lucide-react';
import Reveal from './Reveal';

const experience = [
    {
        period: 'Oct 2018 — Present',
        role: 'Android Developer',
        company: 'Semusi · Noida, India',
        summary:
            'Develop and maintain the AppICE Android SDK with features including push notifications, rich notifications, in-app messaging, geofencing, campaign tracking, user and event tracking. Build reusable SDK solutions integrated into native Android, React Native, Kony/Volt MX, and Cordova applications.',
    },
    {
        period: 'Jan 2018 — Aug 2018',
        role: 'Android Developer Intern',
        company: 'Cube Square Technologies · Noida, India',
        summary:
            'Developed Android applications communicating with backend services using REST APIs, Retrofit, and Volley. Worked on a Bugzilla-based mobile app for issue tracking and content-based Android applications.',
    },
];

const education = [
    {
        period: '2016 — 2018',
        degree: 'Master of Computer Applications (MCA)',
        school: 'DIT University, Dehradun',
        summary: 'CGPA: 7.4/10. Specialization in Computer Science.',
    },
    {
        period: '2012 — 2015',
        degree: 'Bachelor of Computer Applications (BCA)',
        school: 'Deen Dayal Upadhyay Gorakhpur University',
        summary: '73% — Foundation in Computer Science.',
    },
];

const skills = [
    { name: 'Android SDK & Platform Development', level: 95 },
    { name: 'Java & Kotlin', level: 93 },
    { name: 'Push Notifications & FCM', level: 92 },
    { name: 'Cross-Platform SDK Integration', level: 88 },
    { name: 'Networking & SSL/TLS Security', level: 85 },
    { name: 'Performance & ANR Debugging', level: 87 },
];

const certifications = [
    'Kotlin Android Development',
    'Java 8',
    'Android Architecture',
    'Java Design Patterns',
];

const barColors = ['bg-android', 'bg-sky', 'bg-signal'];

function Subsection({ index, title, caption, children }) {
    return (
        <div className="grid gap-6 border-t border-line/10 py-8 sm:gap-8 sm:py-12 md:grid-cols-[220px_1fr] md:gap-14">
            <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-muted-foreground">{index}</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground">{title}</h3>
                {caption && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{caption}</p>}
            </div>
            <div>{children}</div>
        </div>
    );
}

export default function ResumeSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="resume" className="relative scroll-mt-16 overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
                    backgroundSize: '44px 44px',
                }}
            />
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-muted-foreground">
                        01 — Resume
                    </p>
                    <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                        Release history<span className="text-android">.</span>
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-copy">
                        v1.0 shipped in 2018. Since then: continuous delivery of SDK features,
                        Play Store releases, and zero-downtime migrations across API levels.
                    </p>
                    <a
                        href="/Amit-Pandey-Resume.pdf"
                        download="Amit-Pandey-Resume.pdf"
                        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-android/50 bg-android/10 px-5 font-display text-sm font-bold text-android transition-colors hover:bg-android hover:text-on-android"
                    >
                        <Download className="h-4 w-4" aria-hidden="true" />
                        Download Resume (PDF)
                    </a>
                </Reveal>

                <div className="mt-10">
                    <Reveal>
                        <Subsection
                            index="01.1 — Experience"
                            title="Where I've worked"
                            caption="Mobile SDK engineering across Android, React Native, Kony, and Cordova platforms."
                        >
                            <div className="divide-y divide-line/10">
                                {experience.map((job) => (
                                    <article
                                        key={job.role}
                                        className="grid gap-2 py-7 first:pt-0 last:pb-0 lg:grid-cols-[170px_1fr] lg:gap-6"
                                    >
                                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:pt-1.5">
                                            {job.period}
                                        </p>
                                        <div>
                                            <h4 className="font-display text-lg font-bold text-foreground">{job.role}</h4>
                                            <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                                            <p className="mt-2 max-w-xl text-sm leading-relaxed text-copy">{job.summary}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </Subsection>
                    </Reveal>

                    <Reveal>
                        <Subsection
                            index="01.2 — Education"
                            title="Where I studied"
                            caption="Strong academic foundation in computer science."
                        >
                            <div className="divide-y divide-line/10">
                                {education.map((entry) => (
                                    <article
                                        key={entry.degree}
                                        className="grid gap-2 py-7 first:pt-0 last:pb-0 lg:grid-cols-[170px_1fr] lg:gap-6"
                                    >
                                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:pt-1.5">
                                            {entry.period}
                                        </p>
                                        <div>
                                            <h4 className="font-display text-lg font-bold text-foreground">{entry.degree}</h4>
                                            <p className="text-sm font-medium text-muted-foreground">{entry.school}</p>
                                            <p className="mt-2 max-w-xl text-sm leading-relaxed text-copy">{entry.summary}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </Subsection>
                    </Reveal>

                    <Reveal>
                        <Subsection
                            index="01.3 — Skills"
                            title="What I bring"
                            caption="A technical toolkit built on real-world SDK engineering and platform challenges."
                        >
                            <div className="grid gap-x-12 gap-y-7 lg:grid-cols-2">
                                {skills.map((skill, i) => (
                                    <div key={skill.name}>
                                        <div className="flex items-baseline justify-between gap-4">
                                            <p className="text-sm font-medium text-foreground">{skill.name}</p>
                                            <p className="font-mono text-xs text-muted-foreground">{skill.level}%</p>
                                        </div>
                                        {/* Observe the track: the collapsed fill has no visible width on mobile. */}
                                        <motion.div
                                            role="meter"
                                            aria-label={skill.name}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-valuenow={skill.level}
                                            initial={reduceMotion ? false : 'empty'}
                                            animate={reduceMotion ? 'filled' : undefined}
                                            whileInView="filled"
                                            viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                                            className="mt-2 h-1.5 overflow-hidden rounded-full bg-line/10"
                                        >
                                            <motion.div
                                                variants={{ empty: { scaleX: 0 }, filled: { scaleX: 1 } }}
                                                transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : i * 0.06 }}
                                                style={{ width: `${skill.level}%` }}
                                                className={`h-full origin-left rounded-full ${barColors[i % barColors.length]}`}
                                            />
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </Subsection>
                    </Reveal>

                    <Reveal>
                        <Subsection
                            index="01.4 — Certifications"
                            title="Credentials"
                            caption="Continuous learning in Android and Java ecosystems."
                        >
                            <ul className="flex flex-wrap gap-3">
                                {certifications.map((cert) => (
                                    <li
                                        key={cert}
                                        className="rounded-full border border-line/15 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-copy"
                                    >
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </Subsection>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
