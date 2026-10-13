# Local development

## Requirements

Use Node.js 22.12 or later within the Node 22 release line and npm. The installed Vite package declares Node compatibility as `^20.19.0 || >=22.12.0`; the repository does not pin a Node version. Chrome or Chromium is needed only when regenerating the resume PDF.

Run commands from the repository root:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000` (or the address printed by Vite if that port is occupied). The dev server binds to `::`. No environment file or API credentials are required by the current application.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run setup` | Run `npm install`; may update dependency resolution and the lockfile. |
| `npm run dev` | Start the web workspace's Vite development server. |
| `npm run build` | Build static application files into `web/dist`. |
| `npm run start` | Preview an existing build on port 3000. |
| `npm run resume:generate --workspace web` | Regenerate the PDF in `web/public`. |
| `npm run lint` | Invoke the workspace lint script; see its current limitation below. |

The root `package.json` defines the `web` workspace and forwards application commands to it. Run installation at the root, where the workspace lockfile is located.

## Verification and current limitations

There is no automated test script configured. For application changes, run `npm run build`, then `npm run start` and check desktop and mobile layouts, menu navigation, section expansion, project details, resume download and contact links.

The lint script references `web/eslint.config.mjs` and `web/eslint.unicode-escapes-formatter.mjs`, but neither file is present in this checkout. Linting needs that configuration restored or the script updated before it can serve as a reliable check. A successful Vite build does not substitute for linting or browser checks.

If a content edit does not appear, confirm that you changed the active homepage or its imported data, rather than an unused component. If the PDF is stale, follow [Resume PDF](resume-pdf.md); a normal build does not regenerate it.
