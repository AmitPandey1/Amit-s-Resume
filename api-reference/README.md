# API Reference

The portfolio exposes a browser page and static resources. It does not implement a REST or GraphQL API, authentication endpoints, API keys, request quotas or server-side form submission. This reference documents the interfaces that actually exist.

## Routes and resources

| Path | Type | Purpose |
| --- | --- | --- |
| `/` | React page | Portfolio homepage; the only route declared in `web/src/App.jsx`. |
| `/#home`, `/#about`, `/#skills`, `/#education`, `/#projects`, `/#contact` | Section anchors | Navigate within the homepage. |
| `/Amit-Pandey-Resume.pdf` | Static PDF | Downloadable resume, generated separately from the application build. |
| `/amit-pandey.vcf` | Static vCard | Contact data for importing into a contacts application. |
| `/amit-pandey-qr.svg` | Static SVG | QR image displayed on the contact card. |
| `/amit.jpg` | Static image | Profile portrait. |
| `/projects/shree-ji-path.png` and `/projects/reqtor.png` | Static images | Personal project screenshots. |

Assets are stored in `web/public` and copied into the Vite build. The Vercel configuration assigns the vCard `Content-Type: text/vcard; charset=utf-8` and `Content-Disposition: inline; filename="Amit-Pandey.vcf"`.

## Contact form contract

The form in `web/src/pages/HomePage.jsx` collects:

| Field | Validation | Use |
| --- | --- | --- |
| `name` | Required | Included in the subject and message body. |
| `email` | Required, browser email validation | Included in the message body. |
| `message` | Required, at least 10 characters | Used as the main message text. |

Submission prevents the normal form request and assigns an encoded `mailto:` URL to `window.location.href`. Its subject is `Portfolio inquiry from <name>`. The body contains the message, sender name and email address. The recipient comes from `profile.email` in `web/src/data/resume.js`.

There is no JSON response or delivery confirmation. The visitor must send the draft from their email application. Telephone links use `tel:`; social and Play Store links open external services.

## Hosting behavior

`vercel.json` configures an SPA rewrite to `/index.html`. This allows the host to serve the application shell, but does not add React routes or an API. An unknown path should not be treated as a supported endpoint merely because it returns HTML.
