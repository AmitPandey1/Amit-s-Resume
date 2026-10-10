import {
    profile,
    experience,
    education,
    skills,
    certifications,
} from '../data/resume';

// Builds a clean, light-themed resume document in a hidden iframe and calls
// print() — browsers offer "Save as PDF" there, which works on mobile too.
export function openPrintableResume() {
    const esc = (s) =>
        String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(profile.name)} — Resume</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; color: #1a1a1a; margin: 0; padding: 40px 48px; line-height: 1.5; }
  h1 { font-size: 26px; margin: 0; letter-spacing: -0.02em; }
  .title { font-size: 14px; color: #2e7d32; font-weight: 600; margin-top: 2px; text-transform: uppercase; letter-spacing: 0.06em; }
  .contact { font-size: 12px; color: #444; margin-top: 8px; }
  .contact a { color: #444; text-decoration: none; }
  h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #2e7d32; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin: 22px 0 10px; }
  p.summary { font-size: 13px; margin: 0; }
  .entry { margin-bottom: 12px; }
  .entry-head { display: flex; justify-content: space-between; gap: 16px; align-items: baseline; }
  .entry-head strong { font-size: 14px; }
  .entry-head span { font-size: 11px; color: #666; white-space: nowrap; }
  .entry em { display: block; font-size: 12px; color: #555; margin: 1px 0 4px; }
  .entry p { font-size: 12.5px; margin: 0; color: #333; }
  ul.skills { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 6px; }
  ul.skills li { font-size: 12px; border: 1px solid #ccc; border-radius: 999px; padding: 3px 10px; }
  @media print { body { padding: 0; } @page { margin: 16mm; } }
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
</body>
</html>`;

    let frame = document.getElementById('resume-print-frame');
    if (frame) frame.remove();

    frame = document.createElement('iframe');
    frame.id = 'resume-print-frame';
    frame.setAttribute('aria-hidden', 'true');
    frame.style.position = 'fixed';
    frame.style.right = '0';
    frame.style.bottom = '0';
    frame.style.width = '0';
    frame.style.height = '0';
    frame.style.border = '0';
    frame.style.visibility = 'hidden';
    document.body.appendChild(frame);

    const doc = frame.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();

    const trigger = () => {
        try {
            frame.contentWindow.focus();
            frame.contentWindow.print();
        } finally {
            // Keep the frame until printing is done, then clean up.
            setTimeout(() => frame.remove(), 60000);
        }
    };
    if (doc.readyState === 'complete' || doc.fonts?.status === 'loaded') {
        setTimeout(trigger, 250);
    } else {
        frame.onload = () => setTimeout(trigger, 250);
    }
}
