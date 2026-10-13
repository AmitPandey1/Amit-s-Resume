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

## Documentation configuration

The repository root contains `.gitbook.yaml`:

```yaml
root: ./docs/

structure:
  readme: README.md
  summary: SUMMARY.md
```

This selects `docs` as the documentation root, `docs/README.md` as the opening page and `docs/SUMMARY.md` as the navigation. It follows the configuration structure used by [GitBook's official demo repository](https://github.com/GitbookIO/demo-docs-gitbook/blob/main/.gitbook.yaml).

The YAML configures documentation discovery; the project explanations are in Markdown. Keep the filename `.gitbook.yaml` and add new documentation pages to `docs/SUMMARY.md` using paths relative to `docs`.

To publish these docs, commit the configuration and `docs` directory, then connect the repository and intended branch through GitBook Git Sync. If the GitBook space already contains content, review sync direction before the initial import. This repository change does not connect an account, push commits or publish a documentation site.

GitBook documentation and the Vercel portfolio are separate outputs. The app's Vite build does not build or publish the GitBook pages.
