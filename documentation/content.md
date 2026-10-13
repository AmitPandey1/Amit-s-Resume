# Updating content

## Where to make changes

| Change | Source |
| --- | --- |
| Shared identity, contact fields, summary and experience count | `web/src/data/resume.js`, export `profile` |
| Education entries | `web/src/data/resume.js`, export `education` |
| PDF experience, skills and certifications | `web/src/data/resume.js`, exports `experience`, `skills`, `certifications` |
| Professional and personal projects | `web/src/data/projects.js` |
| Visible hero copy, technology grid, about text and some statistics | `web/src/pages/HomePage.jsx` |
| Layout and responsive styling | `web/src/portfolio.css` |
| Portrait, project screenshots, QR and contact file | `web/public` |
| Resume HTML and print styles | `web/src/lib/resumeDocument.js` |

Shared data is not the only source of visible text. The homepage hard-codes some names, role text, location labels, telephone targets and statistics. Review `HomePage.jsx` after changing `profile`. Its technology grid is separate from the PDF's `skills` array. Other exports such as `skillLevels` and `highlights` are not rendered by the current homepage.

## Adding a project

Add an object to `workProjects` or `personalProjects` in `web/src/data/projects.js`. Use a unique `index` because it is the React list key and identifies the illustration mapping.

```js
{
    index: 'P.03',
    title: 'Example Android App',
    platform: 'Android',
    type: 'personal',
    description: 'A short explanation of the app and its purpose.',
    details: ['A concrete feature or contribution.'],
    tags: ['Kotlin', 'Android'],
    image: '/projects/example-app.png',
    imageAlt: 'Description of the app screens',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=your.package',
}
```

Create the referenced image under `web/public/projects/` and replace the example URL with the real listing. `details` and `tags` must be arrays because the component maps over them.

Projects without an image require a matching entry in the `artwork` object in `web/src/components/ProjectCard.jsx`. There is no fallback for an unknown index: adding an imageless project without artwork will fail during rendering.

Work projects also need `role` and `year` for the PDF template. Personal projects need `playStoreUrl` for their PDF link. On the webpage, `role` defaults to “Independent Android Developer”; `year`, `metric` and the store link are conditionally displayed.

The first work project is featured automatically. All personal projects are featured automatically. The displayed total project count is derived from both arrays, while the homepage's Play Store app count is hard-coded and must be updated separately.

## Static assets and contact details

Assets in `web/public` are requested without the `public` prefix, for example `/amit.jpg` and `/projects/reqtor.png`.

Update `web/public/amit-pandey.vcf` separately when contact details change. The vCard and `web/public/amit-pandey-qr.svg` are static files; changing `profile` does not regenerate them. If the contact URL or deployment domain changes, verify the QR by scanning it. Keep the vCard URL consistent with homepage links and the response headers in `vercel.json`.

After editing resume or project data, [regenerate the PDF](resume-pdf.md), then build and inspect the site. Check expanded project details as well as the collapsed cards.
