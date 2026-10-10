import React from 'react';
import { X, Download, Briefcase, GraduationCap, Award, FileUser } from 'lucide-react';
import {
    profile,
    experience,
    education,
    skills,
    certifications,
} from '../data/resume';

// Mobile-only "Full details" bottom sheet: shows the complete biodata and a
// Direct PDF download, also available in the desktop resume section.
export default function FullDetailsSheet({ open, onClose }) {

    React.useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Full details">
            {/* backdrop */}
            <button
                type="button"
                onClick={onClose}
                aria-label="Close full details"
                className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
            />

            {/* sheet */}
            <div className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-3xl border-t border-android/30 bg-background pb-8 shadow-2xl">
                {/* sticky mini header */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line/10 bg-background/95 px-5 py-3 backdrop-blur">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-android">
                        Full details
                    </span>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-line/15 text-copy active:bg-line/10"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="px-5 pt-5">
                    {/* identity */}
                    <div className="flex items-center gap-4">
                        <div className="shrink-0 rounded-2xl bg-gradient-to-tr from-android to-sky p-[2px]">
                            <img
                                src="/amit.jpg"
                                alt="Portrait of Amit Pandey"
                                className="h-16 w-16 rounded-[14px] object-cover object-top"
                            />
                        </div>
                        <div className="min-w-0">
                            <h3 className="font-display text-xl font-extrabold leading-tight text-foreground">
                                {profile.name}
                            </h3>
                            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-android">
                                {profile.title}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">{profile.company}</p>
                        </div>
                    </div>

                    {/* download resume */}
                    <a
                        href="/Amit-Pandey-Resume.pdf"
                        download="Amit-Pandey-Resume.pdf"
                        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-android px-4 font-display text-sm font-bold text-on-android shadow-lg shadow-android/25 transition-all active:brightness-95"
                    >
                        <Download className="h-4 w-4" aria-hidden="true" />
                        Download Resume (PDF)
                    </a>
                    <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        Download a PDF copy of my resume.
                    </p>

                    {/* summary */}
                    <section className="mt-7">
                        <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                            <FileUser className="h-3.5 w-3.5 text-android" aria-hidden="true" />
                            Profile
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-copy">{profile.summary}</p>
                    </section>

                    {/* experience */}
                    <section className="mt-7">
                        <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                            <Briefcase className="h-3.5 w-3.5 text-android" aria-hidden="true" />
                            Experience
                        </h4>
                        <div className="mt-3 space-y-5">
                            {experience.map((job) => (
                                <article key={job.role} className="rounded-xl border border-line/10 bg-line/5 p-4">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                                        {job.period}
                                    </p>
                                    <h5 className="mt-1 font-display text-base font-bold text-foreground">{job.role}</h5>
                                    <p className="text-xs font-medium text-muted-foreground">{job.company}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-copy">{job.summary}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* education */}
                    <section className="mt-7">
                        <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                            <GraduationCap className="h-3.5 w-3.5 text-android" aria-hidden="true" />
                            Education
                        </h4>
                        <div className="mt-3 space-y-5">
                            {education.map((ed) => (
                                <article key={ed.degree} className="rounded-xl border border-line/10 bg-line/5 p-4">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                                        {ed.period}
                                    </p>
                                    <h5 className="mt-1 font-display text-base font-bold text-foreground">{ed.degree}</h5>
                                    <p className="text-xs font-medium text-muted-foreground">{ed.school}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-copy">{ed.summary}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* skills */}
                    <section className="mt-7">
                        <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                            <Award className="h-3.5 w-3.5 text-android" aria-hidden="true" />
                            Skills &amp; Certifications
                        </h4>
                        <ul className="mt-3 flex flex-wrap gap-2">
                            {skills.map((s) => (
                                <li
                                    key={s}
                                    className="rounded-md border border-line/10 bg-line/5 px-2.5 py-1 font-mono text-[11px] text-copy"
                                >
                                    {s}
                                </li>
                            ))}
                            {certifications.map((c) => (
                                <li
                                    key={c}
                                    className="rounded-md border border-android/30 bg-android/10 px-2.5 py-1 font-mono text-[11px] text-android"
                                >
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <a
                        href="#contact"
                        onClick={onClose}
                        className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-line/25 font-display text-sm font-bold text-foreground transition-colors active:border-android active:text-android"
                    >
                        Contact me
                    </a>
                </div>
            </div>
        </div>
    );
}
