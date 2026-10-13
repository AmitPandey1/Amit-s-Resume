# Resume PDF

The Download Resume buttons serve `web/public/Amit-Pandey-Resume.pdf`. This is a checked-in static file, so the browser does not generate a fresh resume on demand.

## Generation pipeline

1. `web/src/lib/resumeDocument.js` imports shared profile, experience, education, skills, certification and project data.
2. `buildResumeHtml()` returns a complete HTML document with print styles and an explicit page break before the projects section.
3. `web/scripts/generate-resume.mjs` writes that HTML into a temporary directory and starts headless Chrome or Chromium to print it.
4. The script waits up to 30 seconds, checks for the PDF header and end marker, then writes the output to `web/public/Amit-Pandey-Resume.pdf` and cleans up temporary files.

The resume template uses A4 print settings. The actual page count depends on content length, fonts and browser rendering; inspect it after changes.

## Regenerate

From the repository root:

```sh
npm run resume:generate --workspace web
```

The script searches standard Chrome/Chromium locations on macOS and Linux. To select a different executable:

```sh
CHROME_PATH="/absolute/path/to/chrome" npm run resume:generate --workspace web
```

Open the generated PDF and inspect text, page breaks, links and clipping. Include the updated PDF with the data changes. Then run `npm run build` so the static output contains the new file.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| “Set CHROME_PATH…” | Install Chrome/Chromium or point `CHROME_PATH` to its executable. |
| Chrome exits or generation times out | Check that the executable can run headlessly in the environment. |
| Website updates but PDF does not | Run the generator explicitly; `npm run build` only runs Vite. |
| Projects contain missing values | Check project fields against the expectations in [Updating content](content.md). |

The Vercel build does not invoke Chrome or regenerate the PDF. The deployment serves the version already in `web/public`.
