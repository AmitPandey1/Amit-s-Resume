# Home

Welcome to Amit Pandey's portfolio project documentation. This repository contains a React website presenting professional experience, education, mobile projects and contact details, plus a downloadable resume.

The application lives in the `web` npm workspace. Vite builds it into static files for hosting. The Android SDKs and apps described in the portfolio are showcased projects; their source code is not part of this repository.

## Explore the site

- **Documentation** — local setup, code architecture, editing content, PDF generation and deployment.
- **API Reference** — browser routes, downloadable resources and contact behavior.
- **Changelog** — recorded documentation changes.
- **Help Center** — answers and troubleshooting for visitors and contributors.
- **API Reference (draft)** — internal JavaScript data and function contracts for maintainers.

Use the site's section navigation to open each guide.

## Run the portfolio

From the repository root:

```sh
npm ci
npm run dev
```

Open the address printed by Vite, normally `http://localhost:3000`. Use Node 22.12 or later in the Node 22 release line. No application API credentials are required.

The contact form prepares an email in the visitor's mail application. There is no backend, account system or database in this project.
