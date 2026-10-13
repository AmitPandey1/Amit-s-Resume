# Architecture and code map

## Rendering flow

```text
web/index.html
  -> src/main.jsx (mounts App; imports index.css)
     -> src/App.jsx (theme provider and browser router)
        -> ScrollToTop
        -> / route: pages/HomePage.jsx (imports portfolio.css)
           -> data/resume.js: profile and education
           -> data/projects.js: workProjects and personalProjects
           -> components/ProjectCard.jsx

data/resume.js + data/projects.js
  -> lib/resumeDocument.js
     -> scripts/generate-resume.mjs
        -> public/Amit-Pandey-Resume.pdf
```

`App.jsx` defines only the `/` route. Homepage links use section hashes such as `#about` and `#projects`. `ScrollToTop` watches the pathname and hash, scrolls to a matching element, or returns to the top.

## Active components and state

| Code | Responsibility |
| --- | --- |
| `web/src/pages/HomePage.jsx` | Page layout, navigation, hero, skills, education, projects and contact section. |
| `ResumeLink` inside `HomePage.jsx` | Links to the pre-generated resume PDF. |
| `ContactCard` inside `HomePage.jsx` | Renders identity, contact links and the QR image linking to a vCard. |
| `PortfolioSection` inside `HomePage.jsx` | Shared section wrapper with mobile accordion controls. |
| `ContactForm` inside `HomePage.jsx` | Encodes form data into a `mailto:` URL and shows draft-prepared feedback. It does not send email. |
| `web/src/components/ProjectCard.jsx` | Project image or illustration, tags, expandable details and optional Play Store link. |

`HomePage` owns `menuOpen`, an `expanded` map for sections, and `allProjects`. About starts expanded. Featured projects consist of the first work project plus all personal projects; the all-projects view appends the remaining work projects. Each project card independently controls its expanded state and uses `useId` to connect its button and details region.

The contact form uses browser validation for required fields, an email input and a minimum message length of 10 characters. Its feedback means an email draft was requested, not that a message was delivered.

## Styling and dependencies

The application uses React 18, React Router, Lucide icons and React Helmet for page metadata. `App.jsx` configures `next-themes` with a class attribute, system default and local storage key `amit-theme`.

`web/src/index.css` imports Google Fonts, Tailwind layers and global theme variables. `web/src/portfolio.css` supplies the active portfolio layout, component styles and responsive rules, including mobile rules below 768px. Many portfolio colors are defined directly there; changing theme variables alone will not recolor every element. The current homepage does not mount the separate `ThemeSelector` component.

`web/vite.config.js` maps `@` to `web/src`. `web/tailwind.config.js`, `web/postcss.config.js` and `web/components.json` configure Tailwind, PostCSS and the shadcn-style component library.

## Other files in the repository

`web/src/components` also contains `Hero`, `Header`, `DigitalCard`, `ResumeSection`, `ProjectsSection`, `FullDetailsSheet`, `ContactSection`, `Footer` and other components. They are not mounted by the current `App`/`HomePage` tree. For example, updating `Hero.jsx` will not change the visible homepage hero.

`web/src/components/ui` contains reusable UI primitives, with associated hooks and utility helpers in `hooks` and `lib`. Their presence, or a dependency in `package.json`, does not mean the active page uses them. Follow imports from the entry point when deciding what to edit.

`web/public` holds the assets served at root URLs. `web/dist` is build output and should not be edited as source. Root screenshots are reference material, while `web/public/design-reference.jpeg` is actually used as a CSS background on the homepage.
