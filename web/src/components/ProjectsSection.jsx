import React from 'react';
import Reveal from './Reveal';

import { workProjects, personalProjects } from '../data/projects';

export default function ProjectsSection() {
    const [featuredWork, ...restWork] = workProjects;

    return (
        <section id="projects" className="scroll-mt-16 border-t border-line/10 bg-background text-foreground">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-28">

                {/* Header */}
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-muted-foreground">
                        02 — Projects
                    </p>
                    <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                        Selected work
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-copy">
                        SDK engineering across native Android, React Native, Kony/Volt MX, Cordova, and Flutter —
                        plus independently published apps on the Google Play Store.
                    </p>
                </Reveal>

                {/* ── Featured Work Project ─────────────────────────────── */}
                <Reveal className="mt-8 sm:mt-16">
                    <article className="grid items-start gap-6 rounded-2xl border border-line/10 p-4 sm:gap-10 sm:p-8 md:grid-cols-2 md:gap-16 lg:p-12">
                        <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-muted-foreground">
                                {featuredWork.index} — {featuredWork.year}
                            </p>
                            <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                                {featuredWork.title}
                            </h3>
                            <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-copy">
                                {featuredWork.description}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {featuredWork.tags.map(tag => (
                                    <span key={tag} className="rounded-full bg-line/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <dl className="mt-8 grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-5 border-t border-line/10 pt-8">
                                <div><dt className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-muted-foreground">Role</dt><dd className="mt-1 text-sm font-medium text-foreground">{featuredWork.role}</dd></div>
                                <div><dt className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-muted-foreground">Platform</dt><dd className="mt-1 text-sm font-medium text-foreground">{featuredWork.platform}</dd></div>
                                <div><dt className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-muted-foreground">Period</dt><dd className="mt-1 text-sm font-medium text-foreground">{featuredWork.year}</dd></div>
                                <div><dt className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-muted-foreground">Highlight</dt><dd className="mt-1 text-sm font-medium text-foreground">{featuredWork.metric}</dd></div>
                            </dl>
                        </div>
                        <div className="relative grid min-w-0 grid-cols-2 gap-2 overflow-hidden rounded-2xl bg-surface ring-1 ring-line/10 p-4 sm:gap-3 sm:p-6">
                            {/* status bar strip — reads as a device screen */}
                            <div className="col-span-2 mb-1 flex items-center justify-between px-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                                <span>SDK features</span>
                                <span className="flex items-center gap-1">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-android" />
                                    online
                                </span>
                            </div>
                            {featuredWork.features.map(({ icon, label }) => (
                                <div key={label} className="flex min-w-0 flex-col items-start gap-2 rounded-xl border border-line/10 bg-line/5 p-3 transition-colors hover:border-android/50 sm:flex-row sm:items-center sm:gap-3 sm:p-4 md:flex-col md:items-start xl:flex-row xl:items-center">
                                    <span className="shrink-0 text-2xl">{icon}</span>
                                    <span className="min-w-0 break-words text-sm font-medium text-foreground leading-snug">{label}</span>
                                </div>
                            ))}
                        </div>
                    </article>
                </Reveal>

                {/* ── Other Work Projects ───────────────────────────────── */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {restWork.map((project, i) => (
                        <Reveal key={project.title} delay={i * 0.07}>
                            <article className="group h-full rounded-2xl border border-line/10 bg-line/[0.04] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-android/60 hover:shadow-lg hover:shadow-android/10">
                                <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-muted-foreground">
                                    {project.index} — {project.year}
                                </p>
                                <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight text-foreground">
                                    {project.title}
                                </h3>
                                <p className="mt-1 text-xs text-muted-foreground">{project.platform}</p>
                                <p className="mt-3 text-sm leading-relaxed text-copy">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="rounded-full bg-line/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-4 font-mono text-xs text-muted-foreground border-t border-line/10 pt-4">{project.metric}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>

                {/* ── Personal / Live Apps ──────────────────────────────── */}
                <Reveal>
                    <div className="mt-20 border-t border-line/10 pt-14">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-muted-foreground">
                            02.2 — Personal Projects
                        </p>
                        <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                            Live on Play Store
                        </h3>
                        <p className="mt-3 max-w-lg text-base leading-relaxed text-copy">
                            Independently designed, built, and published on Google Play — end-to-end ownership from code to store listing.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {personalProjects.map((project, i) => (
                        <Reveal key={project.title} delay={i * 0.1}>
                            <article className="group relative h-full rounded-2xl border border-line/10 bg-line/[0.04] p-5 sm:p-8 transition-all duration-300 hover:border-line/25 hover:shadow-xl">
                                {/* Live badge */}
                                <span className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full bg-android/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-copy ring-1 ring-android/40">
                                    <span className="h-1.5 w-1.5 rounded-full bg-android animate-pulse" />
                                    Live on Play
                                </span>

                                <div className="text-4xl mb-4">{project.icon}</div>
                                <p className="font-mono text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.25em] text-muted-foreground">
                                    {project.index} — Personal
                                </p>
                                <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-foreground">
                                    {project.title}
                                </h3>
                                <p className="mt-1 text-xs text-muted-foreground">{project.platform}</p>
                                <p className="mt-4 text-sm leading-relaxed text-copy">
                                    {project.description}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-1.5">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="rounded-full bg-line/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.playStoreUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-android px-4 py-3 font-mono text-xs uppercase tracking-[0.08em] sm:tracking-[0.15em] text-on-android shadow-md shadow-android/20 transition-all duration-200 hover:brightness-110 hover:shadow-lg"
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
