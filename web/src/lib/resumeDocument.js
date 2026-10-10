import {
    profile,
    experience,
    education,
    skills,
    certifications,
} from '../data/resume.js';

import { workProjects, personalProjects } from '../data/projects.js';

// Used by the PDF generator; resume content comes from the shared profile data.
export function buildResumeHtml() {
    const esc = (s) =>
        String(s).replace(/[–—]/g, '-').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(profile.name)} - Resume</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; color: #1a1a1a; margin: 0; padding: 40px 48px; line-height: 1.5; }
  h1 { font-size: 26px; margin: 0; letter-spacing: -0.02em; }
  .title { font-size: 14px; color: #2e7d32; font-weight: 600; margin-top: 2px; text-transform: uppercase; letter-spacing: 0.06em; }
  .contact { font-size: 12px; color: #444; margin-top: 8px; }
  .contact a { color: #444; text-decoration: none; }
  h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #2e7d32; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin: 22px 0 10px; }
  p.summary { font-size: 13px; margin: 0; }
  .entry { margin-bottom: 12px; break-inside: avoid; }
  .entry-head { display: flex; justify-content: space-between; gap: 16px; align-items: baseline; }
  .entry-head strong { font-size: 14px; }
  .entry-head span { font-size: 11px; color: #666; white-space: nowrap; }
  .entry em { display: block; font-size: 12px; color: #555; margin: 1px 0 4px; }
  .entry p { font-size: 12.5px; margin: 0; color: #333; }
  ul.skills { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 6px; }
  ul.skills li { font-size: 12px; border: 1px solid #ccc; border-radius: 999px; padding: 3px 10px; }
  h2 { break-after: avoid; }
  .projects-page { break-before: page; }
  .projects-page h2 { margin-top: 0; }
  .projects-page .page-label { font-size: 11px; color: #666; margin: 0 0 8px; }
  .project { break-inside: avoid; margin-bottom: 12px; }
  .project h3 { font-size: 13px; line-height: 1.4; margin: 0 0 2px; }
  .project p { font-size: 12px; line-height: 1.45; margin: 0; color: #333; }
  .project .meta { font-size: 10.5px; color: #555; margin: 2px 0; }
  .project a { color: #2e7d32; text-decoration: underline; }
  .projects-page .personal-heading { margin-top: 18px; }
  @media print { body { padding: 0; } @page { size: A4; margin: 14mm; } }
</style>
</head>
<body>
  <header>
    <h1>${esc(profile.name)}</h1>
    <div class="title">${esc(profile.title)}</div>
    <div class="contact">
      ${esc(profile.location)} ·
      <a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a> ·
      <a href="tel:${esc(profile.phone.replace(/\s/g, ''))}">${esc(profile.phone)}</a> ·
      <a href="${esc(profile.linkedin)}">LinkedIn</a> ·
      <a href="${esc(profile.github)}">GitHub</a>
    </div>
  </header>

  <h2>Professional Summary</h2>
  <p class="summary">${esc(profile.summary)}</p>

  <h2>Experience</h2>
  ${experience
      .map(
          (job) => `<div class="entry">
    <div class="entry-head"><strong>${esc(job.role)}</strong><span>${esc(job.period)}</span></div>
    <em>${esc(job.company)}</em>
    <p>${esc(job.summary)}</p>
  </div>`
      )
      .join('\n  ')}

  <h2>Education</h2>
  ${education
      .map(
          (ed) => `<div class="entry">
    <div class="entry-head"><strong>${esc(ed.degree)}</strong><span>${esc(ed.period)}</span></div>
    <em>${esc(ed.school)}</em>
    <p>${esc(ed.summary)}</p>
  </div>`
      )
      .join('\n  ')}

  <h2>Skills</h2>
  <ul class="skills">${skills.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>

  <h2>Certifications</h2>
  <ul class="skills">${certifications.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
  <section class="projects-page">
    <p class="page-label">${esc(profile.name)} · Projects</p>
    <h2>Professional Projects</h2>
    ${workProjects.map((project) => `<article class="project">
      <h3>${esc(project.title)}</h3>
      <p class="meta">${esc(project.role)} · ${esc(project.year)} · ${esc(project.tags.join(' / '))}</p>
      <p>${esc(project.description)}</p>
    </article>`).join('\n')}
    <h2 class="personal-heading">Personal Projects - Published on Google Play</h2>
    ${personalProjects.map((project) => `<article class="project">
      <h3>${esc(project.title)}</h3>
      <p class="meta">${esc(project.tags.filter((tag) => tag !== 'Personal Project').join(' / '))} · <a href="${esc(project.playStoreUrl)}">View on Google Play</a></p>
      <p>${esc(project.description)}</p>
    </article>`).join('\n')}
  </section>
</body>
</html>`;

    return html;
}
