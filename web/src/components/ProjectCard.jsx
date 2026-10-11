import React, { useId, useState } from 'react';
import { ArrowRightLeft, Bell, ChartNoAxesCombined, ChevronDown, Cloud, Code2, ExternalLink, Layers, Package, Radio, ShieldCheck, ShoppingBasket, Smartphone, Activity } from 'lucide-react';

const artwork = {
    'W.01': { label: 'Android engagement SDK', icon: Smartphone, nodes: [[Bell, 'Push'], [Code2, 'Events'], [ShieldCheck, 'Security']], tone: 'green' },
    'W.02': { label: 'React Native ↔ AppICE', icon: ArrowRightLeft, nodes: [[Code2, 'JavaScript'], [Layers, 'Native bridge'], [Smartphone, 'Android SDK']], tone: 'blue' },
    'W.03': { label: 'Kony / Volt MX integration', icon: Layers, nodes: [[Code2, 'Kony JS'], [Package, 'Java wrapper'], [Bell, 'Push & callbacks']], tone: 'purple' },
    'W.04': { label: 'Cordova & Flutter plugins', icon: Package, nodes: [[Code2, 'Cordova'], [ArrowRightLeft, 'Native bridge'], [Layers, 'Flutter']], tone: 'blue' },
    'W.05': { label: 'AppICE for iOS', icon: Smartphone, nodes: [[Radio, 'Live events'], [Package, 'CocoaPods'], [Code2, 'podspec']], tone: 'purple' },
    'W.06': { label: 'Vtion · Media audience insights', icon: ChartNoAxesCombined, nodes: [[Radio, 'Media usage'], [Activity, 'Tracking'], [ChartNoAxesCombined, 'Analytics']], tone: 'green' },
    'W.07': { label: 'Everyday Android products', icon: Smartphone, nodes: [[ShoppingBasket, 'Searo'], [Cloud, 'SyncNScan'], [ShieldCheck, 'QuTrust']], tone: 'amber' },
};

function ProjectPreview({ project }) {
    if (project.image) return <img className="project-preview project-screenshot" src={project.image} alt={project.imageAlt} loading="lazy" width="840" height="306" />;
    const { label, icon: Icon, nodes, tone } = artwork[project.index];
    return <div className={`project-preview project-illustration illustration-${tone}`} role="img" aria-label={`${label}: ${nodes.map(([, name]) => name).join(', ')}`}>
        <div className="illustration-heading" aria-hidden="true"><Icon size={26} /><span>{label}</span><span className="illustration-orbit" /></div>
        <div className="illustration-nodes" aria-hidden="true">{nodes.map(([NodeIcon, name]) => <div key={name}><NodeIcon size={27} strokeWidth={1.6} /><span>{name}</span></div>)}</div>
    </div>;
}

export default function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);
    const detailsId = useId();
    return <article className="portfolio-project">
        <ProjectPreview project={project} />
        <div className="project-info">
            <div className="project-details">
                <h3><button className="project-toggle" type="button" aria-expanded={expanded} aria-controls={detailsId} onClick={() => setExpanded(current => !current)}><span>{project.title}</span><ChevronDown size={18} aria-hidden="true" /></button></h3>
                <p className={expanded ? 'project-description' : 'project-description project-description-collapsed'}>{project.description}</p>
                <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div id={detailsId} className="project-details-body" hidden={!expanded}>
                    <dl>
                        <div><dt>Role</dt><dd>{project.role || 'Independent Android Developer'}</dd></div>
                        <div><dt>Platform</dt><dd>{project.platform}</dd></div>
                        {project.year && <div><dt>Period / organization</dt><dd>{project.year}</dd></div>}
                        {project.metric && <div><dt>Highlight</dt><dd>{project.metric}</dd></div>}
                    </dl>
                    <h4>Features & contributions</h4>
                    <ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
                    {project.playStoreUrl && <a className="project-store-link" href={project.playStoreUrl} target="_blank" rel="noreferrer">View on Google Play <ExternalLink size={13} /></a>}
                </div>
            </div>
        </div>
    </article>;
}
