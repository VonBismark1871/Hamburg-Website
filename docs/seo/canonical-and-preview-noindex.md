# Canonical & preview noindex strategy

## Canonical flow

- All pages should emit canonical URLs through `components/SEOHead.jsx`.
- Canonical URLs are resolved via `getCanonical(path)` from `lib/seo.js` using the production domain (`https://hamburgwebsites.de`).
- Reusable page layouts (for example reference demos) must receive a page-specific `path` prop to avoid cross-page canonical duplication.

## Preview noindex flow

`SEOHead` now automatically adds:

```html
<meta name="robots" content="noindex, nofollow" />
```

when either of these is true:

1. `noIndex` prop is passed manually for pages that should never be indexed (e.g. demo pages), or
2. `isPreviewEnvironment()` detects a preview deployment context.

`isPreviewEnvironment()` supports both env-based and runtime detection:

- Netlify context values: `deploy-preview`, `branch-deploy`.
- Vercel context value: `preview`.
- Preview deploy host patterns (`--deploy-preview.netlify.app`, `--branch.netlify.app`, `*.vercel.app`).

This keeps production indexable while reducing accidental indexing of preview links.
