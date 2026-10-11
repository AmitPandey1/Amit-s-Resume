import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Atom, Blocks, ChevronDown, Code2, Coffee, Download, ExternalLink, Flame, GitBranch, Github, Globe, Linkedin, Mail, MapPin, Menu, MessageCircle, Phone, Send, Smartphone, UserRoundPlus, X, Database } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { profile, education } from '../data/resume';
import { workProjects, personalProjects } from '../data/projects';
import '../portfolio.css';

const sections = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['education', 'Education'], ['projects', 'Projects'], ['contact', 'Contact']];
const technologies = [
    ['Android', Smartphone, '#72b54a'], ['Kotlin', Code2, '#8762d9'], ['Java', Coffee, '#df8238'], ['React Native', Atom, '#54bdd7'], ['Flutter', Code2, '#36a9de'],
    ['Firebase', Flame, '#f4b931'], ['Jetpack Compose', Blocks, '#58a768'], ['SQLite', Database, '#3888b1'], ['REST APIs', Globe, '#64a478'], ['Git', GitBranch, '#e9694b'],
];
function ResumeLink({ className = '' }) {
    return <a className={`portfolio-button ${className}`} href="/Amit-Pandey-Resume.pdf" download><Download size={17} />Download Resume</a>;
}
function ContactCard() {
    return <aside className="business-card" aria-label="Amit Pandey's digital contact card">
        <div className="card-identity"><div><span className="monogram">AP</span><h2>{profile.name}</h2><p>Android &amp; Mobile SDK Developer</p></div><img className="card-avatar" src="/amit.jpg" alt="Amit Pandey" /></div>
        <div className="card-bottom"><div className="card-contacts">
            <a href="tel:+917379363416"><Phone />{profile.phone}</a>
            <a href={`mailto:${profile.email}`}><Mail />{profile.email}</a>
            <span><MapPin />Noida, India</span>
            <a href={profile.github} target="_blank" rel="noreferrer"><Globe />github.com/AmitPandey1</a>
        </div><a className="card-qr" href="/amit-pandey.vcf" type="text/vcard"><img src="/amit-pandey-qr.svg" alt="QR code to save Amit's contact" /><span>Scan to Save</span></a></div>
    </aside>;
}
function PortfolioSection({ id, title, icon: Icon, open, onToggle, children, action }) {
    return <section id={id} className={`portfolio-section section-${id} ${open ? 'is-open' : ''}`}>
        <div className="section-heading"><h2>{title}</h2>{action}</div>
        <button className="accordion-heading" aria-expanded={open} aria-controls={`${id}-content`} onClick={onToggle}><span className="section-icon"><Icon size={20} /></span><span>{title}</span><ChevronDown size={20} /></button>
        <div id={`${id}-content`} className="section-content">{children}</div>
    </section>;
}
function ContactForm() {
    const [prepared, setPrepared] = useState(false);
    function submit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
        const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setPrepared(true);
    }
    return <form className="portfolio-contact-form" onSubmit={submit}>
        <div className="contact-inputs"><input name="name" aria-label="Your name" placeholder="Your Name" autoComplete="name" required /><input name="email" type="email" aria-label="Your email" placeholder="Your Email" autoComplete="email" required /></div>
        <textarea name="message" aria-label="Your message" placeholder="Your Message" rows={3} required minLength={10} />
        <button className="portfolio-button" type="submit"><Send size={15} />Send Message</button>
        {prepared && <p className="form-feedback" role="status">Your email draft is ready in your email app. Send it there to get in touch.</p>}
    </form>;
}
export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expanded, setExpanded] = useState({ about: true });
    const [allProjects, setAllProjects] = useState(false);
    const featured = [workProjects[0], ...personalProjects];
    const projects = allProjects ? [...featured, ...workProjects.slice(1)] : featured;
    function navigate(id) {
        setMenuOpen(false);
        setExpanded(current => ({ ...current, [id]: true }));
    }
    const sectionProps = id => ({ id, open: !!expanded[id], onToggle: () => setExpanded(current => ({ ...current, [id]: !current[id] })) });
    return <div className="portfolio-shell">
        <Helmet><title>Amit Pandey — Android &amp; Mobile SDK Developer</title><meta name="description" content={profile.summary} /></Helmet>
        <div id="home" className="portfolio-dark">
            <header className="portfolio-header">
                <a className="monogram" href="#home" aria-label="Amit Pandey home">AP</a>
                <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">{sections.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => navigate(id)}>{label}</a>)}</nav>
                <ResumeLink className="header-download" />
                <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
            </header>
            <div className="portfolio-hero">
                <div className="hero-copy"><p className="hero-greeting">Hi, I’m</p><h1>Amit <span>Pandey</span></h1><p className="hero-role">Android &amp; Mobile SDK Developer</p><p className="hero-description">I build modern mobile experiences that are<br className="desktop-break" /> user-friendly, scalable and impactful.</p>
                    <div className="hero-actions"><a className="portfolio-button" href="/amit-pandey.vcf" type="text/vcard"><UserRoundPlus size={17} />Save to Contact</a><ResumeLink className="button-outline" /></div>
                    <div className="portfolio-socials">
                        {[
                            [Linkedin, profile.linkedin, 'LinkedIn'],
                            [Github, profile.github, 'GitHub'],
                            [Mail, `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`, 'Compose email in Gmail'],
                        ].map(([Icon, href, label]) => (
                            <a key={label} href={href} aria-label={`${label} (opens in a new tab)`} title={label} target="_blank" rel="noopener noreferrer"><Icon size={19} /></a>
                        ))}
                    </div>
                </div>
                <div className="hero-portrait"><img src="/amit.jpg" alt="Amit Pandey, Android developer" /></div>
                <ContactCard />
            </div>
        </div>
        <main className="portfolio-paper">
            <PortfolioSection {...sectionProps('about')} title="About Me" icon={Mail}>
                <div className="about-layout">
                    <div>
                        <p className="about-description">I’m a passionate Android &amp; Mobile SDK Developer with a keen interest in building meaningful digital experiences. I enjoy solving problems, learning new technologies, and turning ideas into reality.</p>
                        <div className="about-stats">
                            <div><strong>{profile.yearsExperience}+</strong><span>Years Experience</span></div>
                            <div><strong>{workProjects.length + personalProjects.length}+</strong><span>Projects Delivered</span></div>
                            <div><strong>5+</strong><span>Banking Apps</span><small>Using the SDK I help develop</small></div>
                            <div><strong>2</strong><span>Apps on Play Store</span></div>
                        </div>
                    </div>
                    <div className="about-photo" role="img" aria-label="Laptop, coffee and a notebook reading Build, Learn, Improve, Repeat" />
                </div>
            </PortfolioSection>
            <PortfolioSection {...sectionProps('skills')} title="Skills" icon={Atom}><div className="technology-grid">{technologies.map(([label, Icon, color]) => <div className="technology" key={label}><Icon size={29} color={color} strokeWidth={1.7} /><span>{label}</span></div>)}</div></PortfolioSection>
            <PortfolioSection {...sectionProps('education')} title="Education" icon={GraduationCap}>
                <div className="education-grid">
                    {education.map(entry => (
                        <article className="education-card" key={entry.degree}>
                            <p className="education-period">{entry.period}</p>
                            <h3>{entry.degree}</h3>
                            <p className="education-school">{entry.school}</p>
                            <p className="education-summary">{entry.summary}</p>
                        </article>
                    ))}
                </div>
            </PortfolioSection>
            <PortfolioSection {...sectionProps('projects')} title="Featured Projects" icon={MessageCircle} action={<button className="view-projects" onClick={() => setAllProjects(!allProjects)}>{allProjects ? 'Show Featured' : 'View All Projects'}<ArrowRight size={15} /></button>}>
                <div className="project-grid">{projects.map((project, index) => <article key={project.index} className="portfolio-project"><div className={`project-preview preview-${index % 3}`} role="img" aria-label="Illustrative project interface preview" /><div className="project-info"><h3>{project.title}{project.playStoreUrl && <a href={project.playStoreUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on Google Play`}><ExternalLink size={14} /></a>}</h3><p>{project.description}</p><div className="project-tags">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
                <button className="mobile-view-projects view-projects" onClick={() => setAllProjects(!allProjects)}>{allProjects ? 'Show Featured' : 'View All Projects'}<ArrowRight size={15} /></button>
            </PortfolioSection>
            <PortfolioSection {...sectionProps('contact')} title="Let’s Work Together" icon={MessageCircle}><div className="contact-layout"><div><p>Have a project in mind or just want to say hi? Feel free to reach out!</p><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail />{profile.email}</a><a href="tel:+917379363416"><Phone />{profile.phone}</a><span><MapPin />Noida, India</span></div></div><ContactForm /></div></PortfolioSection>
            <ResumeLink className="mobile-bottom-download" />
        </main>
    </div>;
}
