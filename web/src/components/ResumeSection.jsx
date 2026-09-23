import React from 'react';
import { motion } from 'framer-motion';
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

const barColors = ['bg-sun', 'bg-signal', 'bg-pool'];

function Subsection({ index, title, caption, children }) {
    return (
        <div className="grid gap-6 border-t border-ink/10 py-8 sm:gap-8 sm:py-12 md:grid-cols-[220px_1fr] md:gap-14">
            <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-ink/50">{index}</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">{title}</h3>
                {caption && <p className="mt-2 text-sm leading-relaxed text-ink/60">{caption}</p>}
            </div>
            <div>{children}</div>
        </div>
    );
}

export default function ResumeSection() {
    return (
        <section id="resume" className="scroll-mt-16">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-ink/50">
                        01 — Resume
                    </p>
                    <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
                        Nearly 8 years building Android SDKs
                    </h2>
                </Reveal>

                <div className="mt-10">
                    <Reveal>
                        <Subsection
                            index="01.1 — Experience"
                            title="Where I've worked"
                            caption="Mobile SDK engineering across Android, React Native, Kony, and Cordova platforms."
                        >
                            <div className="divide-y divide-ink/10">
                                {experience.map((job) => (
                                    <article
                                        key={job.role}
                                        className="grid gap-2 py-7 first:pt-0 last:pb-0 lg:grid-cols-[170px_1fr] lg:gap-6"
                                    >
                                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50 sm:pt-1.5">
                                            {job.period}
                                        </p>
                                        <div>
                                            <h4 className="font-display text-lg font-bold text-ink">{job.role}</h4>
                                            <p className="text-sm font-medium text-ink/60">{job.company}</p>
                                            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">{job.summary}</p>
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
                            <div className="divide-y divide-ink/10">
                                {education.map((entry) => (
                                    <article
                                        key={entry.degree}
                                        className="grid gap-2 py-7 first:pt-0 last:pb-0 lg:grid-cols-[170px_1fr] lg:gap-6"
                                    >
                                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50 sm:pt-1.5">
                                            {entry.period}
                                        </p>
                                        <div>
                                            <h4 className="font-display text-lg font-bold text-ink">{entry.degree}</h4>
                                            <p className="text-sm font-medium text-ink/60">{entry.school}</p>
                                            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">{entry.summary}</p>
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
                                            <p className="text-sm font-medium text-ink">{skill.name}</p>
                                            <p className="font-mono text-xs text-ink/50">{skill.level}%</p>
                                        </div>
                                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: skill.level / 100 }}
                                                viewport={{ once: true, margin: '-40px' }}
                                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                                                className={`h-full w-full origin-left rounded-full ${barColors[i % barColors.length]}`}
                                            />
                                        </div>
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
                                        className="rounded-full border border-ink/20 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink/70"
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
