// Regenerate the checked-in PDF after editing src/data/resume.js or projects.js:
// npm run resume:generate --workspace web
// Requires Chrome/Chromium. Set CHROME_PATH if it is installed elsewhere.
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { buildResumeHtml } from '../src/lib/resumeDocument.js';

const chrome = process.env.CHROME_PATH || [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
].find(existsSync);
if (!chrome) throw new Error('Set CHROME_PATH to a Chrome or Chromium executable.');

const temp = mkdtempSync(path.join(tmpdir(), 'amit-resume-'));
const output = fileURLToPath(new URL('../public/Amit-Pandey-Resume.pdf', import.meta.url));
let browser;
try {
    const html = path.join(temp, 'resume.html');
    const pdf = path.join(temp, 'resume.pdf');
    writeFileSync(html, buildResumeHtml());
    browser = spawn(chrome, [
        '--headless', '--disable-gpu', '--no-pdf-header-footer',
        '--no-first-run', '--no-default-browser-check', '--disable-background-networking',
        `--user-data-dir=${path.join(temp, 'chrome')}`,
        `--print-to-pdf=${pdf}`, pathToFileURL(html).href,
    ], { stdio: 'ignore' });
    let launchError;
    browser.on('error', (error) => { launchError = error; });
    let bytes;
    const deadline = Date.now() + 30000;
    while (Date.now() < deadline) {
        if (launchError) throw launchError;
        if (existsSync(pdf)) {
            const candidate = readFileSync(pdf);
            if (candidate.subarray(-32).toString().includes('%%EOF')) {
                bytes = candidate;
                break;
            }
        }
        if (browser.exitCode !== null) throw new Error('Chrome exited without creating a PDF.');
        await delay(100);
    }
    if (!bytes) throw new Error('Timed out generating the resume PDF.');
    if (bytes.subarray(0, 5).toString() !== '%PDF-') throw new Error('Invalid PDF output.');
    writeFileSync(output, bytes);
    console.log(`Generated ${output}`);
} finally {
    if (browser && browser.exitCode === null) {
        browser.kill('SIGTERM');
        for (let attempt = 0; attempt < 20 && browser.exitCode === null && browser.signalCode === null; attempt++) await delay(100);
        if (browser.exitCode === null && browser.signalCode === null) browser.kill('SIGKILL');
    }
    rmSync(temp, { recursive: true, force: true });
}
