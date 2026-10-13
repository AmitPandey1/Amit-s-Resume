# Amit's Resume — project guide

This repository contains Amit Pandey's personal portfolio and downloadable resume. It is a browser-rendered React application in the `web` npm workspace, built with Vite and deployed as static files.

Visitors can explore skills, education and projects, download a resume PDF, save a contact card, and prepare an email inquiry. The repository describes Android and mobile SDK projects; their implementation code is not included here.

There is no application backend, database, authentication, or email delivery service. Profile and project content live in JavaScript modules. The contact form opens the visitor's email application.

## Start here

- [Local development](getting-started.md): requirements and commands.
- [Architecture and code map](architecture.md): entry points, components, data flow and styling.
- [Updating content](content.md): profile, projects, images and contact details.
- [Resume PDF](resume-pdf.md): how the downloadable document is generated.
- [Deployment and GitBook](deployment.md): static hosting and documentation sync.

For a first code walkthrough, read `web/src/main.jsx`, `web/src/App.jsx`, `web/src/pages/HomePage.jsx`, then `web/src/components/ProjectCard.jsx`.

These docs describe the source as inspected in October 2026. File paths in code formatting are relative to the repository root unless stated otherwise.
