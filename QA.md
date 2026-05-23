# QA Checklist

Use this checklist to choose the right verification for each change. Not every item applies to every PR, but every PR should explain what was checked.

## Documentation-Only Changes

- [ ] Headings are clear and nested correctly.
- [ ] Internal file references point to existing paths.
- [ ] Code fences have language labels where useful.
- [ ] Links are valid or intentionally left as plain paths.
- [ ] The docs do not contradict `package.json`, existing `docs/`, or `.github/` workflows.

## Build and Runtime

- [ ] Run `npm run build` for JavaScript, React, routing, SEO, or production UI changes when feasible.
- [ ] Run `npm run dev` for browser verification of UI or interaction changes.
- [ ] Check the affected route for console errors.
- [ ] Confirm no generated build output is committed unless explicitly requested.

## UI and Responsive Behavior

- [ ] Verify the affected route on a desktop viewport.
- [ ] Verify the affected route on a mobile-sized viewport.
- [ ] Check that text does not overlap, clip, or overflow controls.
- [ ] Confirm navigation and primary calls to action remain usable.
- [ ] Confirm interactive states are visible and meaningful.

## Accessibility

- [ ] Headings follow a logical order.
- [ ] Buttons and links have accessible names.
- [ ] Form fields have labels and usable error/success states.
- [ ] Focus states are visible.
- [ ] Images have meaningful alt text or are marked decorative.
- [ ] Color contrast remains readable.

## SEO and Legal-Sensitive Pages

- [ ] Route-specific title and description are present where relevant.
- [ ] Canonical paths use the existing SEO helper flow.
- [ ] Preview deployments remain noindexed.
- [ ] `robots.txt` and `sitemap.xml` stay aligned with production routes.
- [ ] Legal, privacy, and contact pages are not accidentally removed from navigation or indexing.

## Performance

- [ ] New images have stable dimensions or layout constraints.
- [ ] No unnecessary production dependency was added.
- [ ] Client-side JavaScript did not grow without a clear reason.
- [ ] For release checks, follow `docs/performance/release-checklist.md`.
- [ ] If using PSI, keep secrets out of the repo and use environment variables.

## Reference Demos

- [ ] Demo pages clearly preserve their intended business category.
- [ ] Back links and navigation remain usable.
- [ ] Demo-specific canonical/noindex behavior is correct.
- [ ] Shared reference components still handle empty or malformed data safely.

## Final Handoff Evidence

Every final note or PR should include:

- Files changed.
- Production impact.
- Commands/checks run, with failures or skipped checks called out.
- Browser routes and viewport sizes checked when UI changed.
- Known risks or follow-up work.

