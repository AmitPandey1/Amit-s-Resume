import React from 'react';
import Reveal from './Reveal';

// ─── Work Projects ──────────────────────────────────────────────────────────
const workProjects = [
    {
        index: 'W.01',
        year: '2018 – Present',
        title: 'AppICE Android SDK',
        role: 'Android SDK Developer',
        platform: 'Android (Native)',
        type: 'work',
        description:
            'Mobile engagement SDK providing push notifications, in-app messaging, campaign & event tracking, geofencing, and user engagement. Maintained Android compatibility through API 36, improved ANR performance, and integrated SSL/TLS security.',
        metric: '8+ years maintained',
        tags: ['Java', 'Kotlin', 'FCM', 'SQLite', 'Gradle', 'API 36'],
        features: [
            { icon: '🔔', label: 'Push Notifications' },
            { icon: '💬', label: 'In-App Messaging' },
            { icon: '📍', label: 'Geofencing' },
            { icon: '📊', label: 'Campaign Tracking' },
            { icon: '🔐', label: 'SSL/TLS Security' },
            { icon: '⚡', label: 'ANR Debugging' },
            { icon: '🔗', label: 'Deep Links' },
            { icon: '📱', label: 'API 34–36 Support' },
        ],
    },
    {
        index: 'W.02',
        year: '2020 – Present',
        title: 'React Native AppICE Plugin',
        role: 'Native Android Integration',
        platform: 'React Native',
        type: 'work',
        description:
            'Native Android bridge enabling React Native apps to access AppICE SDK features. Built the JS-to-native communication layer supporting callbacks, push notifications, and full SDK feature access.',
        metric: 'Cross-platform SDK bridge',
        tags: ['React Native', 'Java', 'Native Modules', 'npm'],
    },
    {
        index: 'W.03',
        year: '2019 – Present',
        title: 'Kony / Volt MX Wrapper',
        role: 'SDK Wrapper Engineer',
        platform: 'Kony / Volt MX',
        type: 'work',
        description:
            'Java-based wrapper exposing AppICE SDK to Kony/Volt MX apps. Handled push notification routing, callbacks, and bridging native SDK features to the Kony JavaScript layer.',
        metric: 'Enterprise SDK wrapper',
        tags: ['Java', 'Kony', 'Volt MX', 'Push Notifications'],
    },
    {
        index: 'W.04',
        year: '2021 – Present',
        title: 'Cordova & Flutter Plugins',
        role: 'Plugin Developer',
        platform: 'Cordova / Flutter',
        type: 'work',
        description:
            'Cross-platform plugins for AppICE on Cordova and Flutter. Handled plugin setup, push notification routing, deep links, callbacks, and native-to-hybrid communication.',
        metric: '2 cross-platform plugins',
        tags: ['Cordova', 'Flutter', 'Android Native'],
    },
    {
        index: 'W.05',
        year: 'Semusi',
        title: 'AppICE iOS SDK',
        role: 'iOS Contributor',
        platform: 'iOS',
        type: 'work',
        description:
            'Contributed to AppICE iOS SDK development including live-events functionality. Worked on SDK packaging and distribution through CocoaPods and podspec.',
        metric: 'iOS SDK contribution',
        tags: ['iOS', 'CocoaPods', 'podspec', 'Swift/ObjC'],
    },
    {
        index: 'W.06',
        year: 'Semusi',
        title: 'Vtion',
        role: 'Android Developer',
        platform: 'Android',
        type: 'work',
        description:
            'Mobile platform for real-time tracking of media application usage for audience research and TRP-related analytics. Contributed to data collection and tracking features.',
        metric: 'Media analytics platform',
        tags: ['Android', 'Real-time Tracking', 'Analytics', 'TRP'],
    },
    {
        index: 'W.07',
        year: 'Cube Square',
        title: 'Searo / SyncNScan / QuTrust',
        role: 'Android Developer',
        platform: 'Android',
        type: 'work',
        description:
            'Contributed to multiple Android products: Searo (grocery workflows), SyncNScan (device protection & cloud backup), and QuTrust (mobile hardware & sensor diagnostics).',
        metric: '3 Android products',
        tags: ['Android', 'REST APIs', 'Retrofit', 'Volley'],
    },
];

// ─── Personal / Live Projects ─────────────────────────────────────────────
const personalProjects = [
    {
        index: 'P.01',
        title: 'Shree Japa App',
        platform: 'Android · Live on Play Store',
        type: 'personal',
        description:
            'A spiritual Android app for Japa (mantra chanting) practice. Helps users track, count, and maintain their daily chanting sessions with a clean and focused interface.',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ap.shree.japamapp',
        tags: ['Java', 'Android', 'SQLite', 'Personal Project'],
        icon: '🕉️',
    },
    {
        index: 'P.02',
        title: 'Reqtor',
        platform: 'Android · Live on Play Store',
        type: 'personal',
        description:
            'An Android utility app published on the Play Store. Built and published independently, demonstrating end-to-end Android app development, deployment, and Play Store distribution.',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ap.reqtor',
        tags: ['Kotlin', 'Android', 'Play Store', 'Personal Project'],
        icon: '🔧',
    },
];

export default function ProjectsSection() {
    const [featuredWork, ...restWork] = workProjects;

    return (
        <section id="projects" className="scroll-mt-16 border-t border-ink/10">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-28">

                {/* Header */}
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-ink/50">
                        02 — Projects
                    </p>
                    <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
                        Selected work
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
                        SDK engineering across native Android, React Native, Kony/Volt MX, Cordova, and Flutter —
                        plus independently published apps on the Google Play Store.
                    </p>
                </Reveal>

                {/* ── Featured Work Project ─────────────────────────────── */}
                <Reveal className="mt-8 sm:mt-16">
                    <article className="grid items-start gap-6 rounded-2xl border border-ink/10 p-4 sm:gap-10 sm:p-8 md:grid-cols-2 md:gap-16 lg:p-12">
                        <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-ink/50">
                                {featuredWork.index} — {featuredWork.year}
                            </p>
                            <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-4xl">
                                {featuredWork.title}
                            </h3>
                            <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-ink/70">
                                {featuredWork.description}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {featuredWork.tags.map(tag => (
                                    <span key={tag} className="rounded-full bg-ink/[0.07] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/60">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <dl className="mt-8 grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-5 border-t border-ink/10 pt-8">
                                <div><dt className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-ink/50">Role</dt><dd className="mt-1 text-sm font-medium text-ink">{featuredWork.role}</dd></div>
                                <div><dt className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-ink/50">Platform</dt><dd className="mt-1 text-sm font-medium text-ink">{featuredWork.platform}</dd></div>
                                <div><dt className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-ink/50">Period</dt><dd className="mt-1 text-sm font-medium text-ink">{featuredWork.year}</dd></div>
                                <div><dt className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-ink/50">Highlight</dt><dd className="mt-1 text-sm font-medium text-ink">{featuredWork.metric}</dd></div>
                            </dl>
                        </div>
                        <div className="grid min-w-0 grid-cols-2 gap-2 sm:gap-3">
                            {featuredWork.features.map(({ icon, label }) => (
                                <div key={label} className="flex min-w-0 flex-col items-start gap-2 rounded-xl border border-ink/10 p-3 sm:flex-row sm:items-center sm:gap-3 sm:p-4 md:flex-col md:items-start xl:flex-row xl:items-center">
                                    <span className="shrink-0 text-2xl">{icon}</span>
                                    <span className="min-w-0 break-words text-sm font-medium text-ink/70 leading-snug">{label}</span>
                                </div>
                            ))}
                        </div>
                    </article>
                </Reveal>

                {/* ── Other Work Projects ───────────────────────────────── */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {restWork.map((project, i) => (
                        <Reveal key={project.title} delay={i * 0.07}>
                            <article className="group h-full rounded-2xl border border-ink/10 p-5 sm:p-6 transition-shadow duration-300 hover:shadow-lg">
                                <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-ink/50">
                                    {project.index} — {project.year}
                                </p>
                                <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight text-ink">
                                    {project.title}
                                </h3>
                                <p className="mt-1 text-xs text-ink/50">{project.platform}</p>
                                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="rounded-full bg-ink/[0.07] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/55">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-4 font-mono text-xs text-ink/45 border-t border-ink/8 pt-4">{project.metric}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>

                {/* ── Personal / Live Apps ──────────────────────────────── */}
                <Reveal>
                    <div className="mt-20 border-t border-ink/10 pt-14">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-ink/50">
                            02.2 — Personal Projects
                        </p>
                        <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-4xl">
                            Live on Play Store
                        </h3>
                        <p className="mt-3 max-w-lg text-base leading-relaxed text-ink/70">
                            Independently designed, built, and published on Google Play — end-to-end ownership from code to store listing.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {personalProjects.map((project, i) => (
                        <Reveal key={project.title} delay={i * 0.1}>
                            <article className="group relative h-full rounded-2xl border border-ink/10 p-5 sm:p-8 transition-all duration-300 hover:border-ink/30 hover:shadow-xl">
                                {/* Live badge */}
                                <span className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full bg-sun/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/70">
                                    <span className="h-1.5 w-1.5 rounded-full bg-sun animate-pulse" />
                                    Live
                                </span>

                                <div className="text-4xl mb-4">{project.icon}</div>
                                <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-ink/50">
                                    {project.index} — Personal
                                </p>
                                <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-ink">
                                    {project.title}
                                </h3>
                                <p className="mt-1 text-xs text-ink/50">{project.platform}</p>
                                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                                    {project.description}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-1.5">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="rounded-full bg-ink/[0.07] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/55">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.playStoreUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-3 font-mono text-xs uppercase tracking-[0.08em] sm:tracking-[0.15em] text-ink/70 transition-all duration-200 hover:border-ink hover:bg-ink hover:text-paper"
                                >
                                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.18 23.76c.35.2.74.24 1.12.14l12.54-12.54-3.54-3.54L3.18 23.76zM20.8 10.6L17.86 9 3.16.24C2.9.08 2.6 0 2.3 0c-.16 0-.33.03-.48.08L14.3 12.36 20.8 10.6zM22.4 11.45l-1.6-.96-1.86.5-3.7 10.1c.08.28.08.58 0 .88.29-.04.56-.17.78-.38l6.38-10.14zM2.3 24c.3 0 .6-.08.86-.24l.02-.01L13.3 13.64 9.76 10.1 2.3 24z"/>
                                    </svg>
                                    View on Play Store
                                </a>
                            </article>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
