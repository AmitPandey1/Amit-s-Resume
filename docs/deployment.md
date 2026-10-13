# Deployment and GitBook

## Portfolio hosting

The root `vercel.json` configures the website deployment:

| Setting | Value / behavior |
| --- | --- |
| Framework | Vite |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `web/dist` |
| Rewrite | `/(.*)` to `/index.html` for client-side routing |
| vCard headers | `text/vcard; charset=utf-8` and an inline `Amit-Pandey.vcf` filename for `/amit-pandey.vcf` |

Use the repository root as the Vercel project root so workspace commands and this configuration resolve correctly. Other static hosts must serve `web/dist`, support a suitable SPA fallback and preserve static asset URLs. The app itself currently defines only `/`; a hosting fallback does not create additional React routes.

Before deployment, build and preview the app, confirm that the resume PDF is current, and check direct access to the PDF, vCard and images. No application API keys are required by the current source.

## Site sections

`gitbook-docs.yaml` already maps six site sections to separate content directories. Each directory has its own `README.md` landing page and `SUMMARY.md` navigation:

| Section | Directory |
| --- | --- |
| Home | `home` |
| Documentation | `documentation` |
| API Reference | `api-reference` |
| Changelog | `changelog` |
| Help Center | `help-center` |
| API Reference (draft) | `api-reference-1/api-reference` |

The second API Reference space remains marked `draft: true` in the site configuration. It documents internal JavaScript contracts. The first describes public browser interfaces. Edit the pages inside these directories to update the corresponding site sections.

Earlier GitBook onboarding template articles remain on disk but are no longer listed in these section summaries. They are not documentation of this portfolio's behavior.

## Standalone documentation configuration

The repository root contains `.gitbook.yaml`:

```yaml
root: ./docs/

structure:
  readme: README.md
  summary: SUMMARY.md
```

For the separate single-space Git Sync configuration, this selects `docs` as the documentation root, `docs/README.md` as the opening page and `docs/SUMMARY.md` as the navigation. It follows the configuration structure used by [GitBook's official demo repository](https://github.com/GitbookIO/demo-docs-gitbook/blob/main/.gitbook.yaml).

The YAML configures documentation discovery; the project explanations are in Markdown. The original `docs` directory remains available for this single-space configuration. The multi-section site uses the directories in `gitbook-docs.yaml`; update the relevant section summary when adding pages there.

To publish these docs, commit the configuration and `docs` directory, then connect the repository and intended branch through GitBook Git Sync. If the GitBook space already contains content, review sync direction before the initial import. This repository change does not connect an account, push commits or publish a documentation site.

GitBook documentation and the Vercel portfolio are separate outputs. The app's Vite build does not build or publish the GitBook pages.
