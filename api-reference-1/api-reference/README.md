# API Reference — internal JavaScript

This draft reference describes source-level interfaces used by maintainers. These are internal modules, not network endpoints or a published SDK.

## Resume data

Module: `web/src/data/resume.js`.

| Export | Shape and purpose |
| --- | --- |
| `profile` | Object with `name`, `yearsExperience`, `title`, `company`, `email`, `phone`, `location`, `linkedin`, `github`, `summary`. |
| `experience` | Array of objects with `period`, `role`, `company`, `summary`. |
| `education` | Array of objects with `period`, `degree`, `school`, `summary`. |
| `skills`, `certifications`, `highlights` | Arrays of strings. |
| `skillLevels` | Array of `{ name, level }` objects. |

The active homepage consumes `profile` and `education`. The PDF consumes `profile`, `experience`, `education`, `skills` and `certifications`. Not every export is displayed by the current homepage.

## Project data

Module: `web/src/data/projects.js` exports `workProjects` and `personalProjects` arrays.

Common card fields are `index`, `title`, `platform`, `description`, `tags` and `details`. `index` must be unique. `tags` and `details` must be arrays. An image-backed card uses `image` and `imageAlt`; otherwise its index must exist in the component's `artwork` map.

Optional webpage fields include `role`, `year`, `metric` and `playStoreUrl`. The PDF template expects `role` and `year` on work projects and `playStoreUrl` on personal projects. Fields such as `type`, `features` and `icon` exist in the data but are not rendered by the current `ProjectCard`.

## buildResumeHtml()

Module: `web/src/lib/resumeDocument.js`.

- Arguments: none.
- Returns: a string containing a complete HTML document and print CSS.
- Reads: shared resume and project modules.
- Does not write files or launch a browser; the generation script handles those operations.

```js
import { buildResumeHtml } from './web/src/lib/resumeDocument.js';

const html = buildResumeHtml();
```

## ProjectCard({ project })

Module: `web/src/components/ProjectCard.jsx`, default export.

Renders a React project card from the project contract above. It owns its expansion state and generates an accessible details ID. Missing `details`, `tags`, or an illustration mapping for an imageless project can cause render errors.

## cn(...inputs)

Module: `web/src/lib/utils.js`.

Combines conditional class values with `clsx`, then resolves Tailwind class conflicts with `tailwind-merge`. Returns the merged class string.

## Formatting helpers

Module: `web/src/lib/format.js`.

| Function | Behavior |
| --- | --- |
| `formatCurrency(amount, options = {})` | Converts the value to a number and formats currency; defaults to USD, with optional `locale` and formatting options. |
| `formatNumber(value, options = {})` | Converts the value to a number and formats it with locale options. |
| `formatDate(date, options = {})` | Returns an empty string for missing or invalid dates; otherwise formats year, month and day with optional overrides. |
| `truncate(text, max = 120)` | Returns an empty string for falsy input; trims and appends an ellipsis when text exceeds the limit. |
| `slugify(text)` | Normalizes text, strips combining accents and unsupported characters, lowercases, and joins whitespace/underscore/hyphen runs with hyphens. |

These helpers are available in the repository; their presence does not imply that the current homepage imports them.
