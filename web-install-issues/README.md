# Web Install DevTools Issue Test Site

Internal test site for the Web Install API's DevTools **Issue** reporting.
Every scenario in this directory is expected to **fail** installation; each
one targets a specific failure diagnostic so a tester can confirm the Issue
title, the affected manifest URL, and the page-visible API result.

Deployed at
<https://kbhlee2121.github.io/pwa/web-install-issues/>.

## Entry points covered

Current-document (no manifest argument):

- Zero-parameter `navigator.install()`
- Untargeted `<install>`

Explicit / background-manifest (manifest argument supplied):

- `navigator.install({ manifest })`
- Targeted `<install manifest="…">`

## Scenarios

| # | Scenario | Expected Issue |
|---|----------|----------------|
| 1 | No manifest | `No manifest detected` (no manifest URL, no affected request) |
| 2 | Malformed manifest | `Manifest could not be fetched, is empty, or could not be parsed` |
| 3 | Missing manifest `id` | `Manifest does not contain an id field` |
| 4 | Invalid `start_url` | `Manifest 'start_url' is not valid` |
| 5 | Missing `name` and `short_name` | `Manifest does not contain a 'name' or 'short_name' field` |
| 6 | Cross-origin manifest (CORS-blocked) | **No Web Install Issue** (suppressed on the current-document path); a CORS Issue appears from the blocked fetch |

The explicit-manifest page covers scenarios 2–6 plus a missing-`start_url`
variant. In every case the page-visible result is `DataError` (from
`navigator.install`) or `invalid_data` (from `<install>`).

## Tester workflow

1. Use a Chromium / Edge build that includes the Web Install API and the
   DevTools Web Install Issue reporting changes under test.
2. Enable both feature flags (the origin trials have ended) and restart:
   - `about://flags/#web-app-installation-api` &rarr; Enabled
   - `about://flags/#web-app-install-element` &rarr; Enabled
3. Open DevTools → **More tools → Issues**. Leave the panel visible.
4. Open a scenario from `index.html` and trigger one entry point. Read the
   Issue.
5. **Reload the scenario page** before triggering the other entry point.
   Identical Issues deduplicate; a reload is the reliable way to see the
   second Issue.
6. Repeat every scenario in an Incognito / InPrivate window to confirm the
   diagnostic behavior is profile-independent.

## Feature flags, not origin trials

The `WebAppInstallation` and `InstallElement` origin trials have ended, so
these pages do **not** embed OT `<meta>` tokens. Testers must enable the
`about://flags` entries listed above.

## Cross-origin scenario (scenario 6)

The privacy boundary — "current-document Web Install Issues are suppressed
when the linked manifest is on a different origin from the document" — requires
a genuinely different origin. The fixture pages point at:

```
https://microsoftedge.github.io/Demos/pwa-install-api/manifest.json
```

The manifest body at that URL is irrelevant to this scenario. The fetch is
blocked by CORS (GitHub Pages does not send `Access-Control-Allow-Origin` for
manifest requests to a different origin), so the remote manifest is never
consumed by the Web Install pipeline. What is being verified is only the
*absence* of a Web Install Issue on the current-document path plus the CORS
Issue that the browser produces from the blocked fetch itself.

To change the cross-origin URL, edit `CROSS_ORIGIN_MANIFEST_URL` at the top of
`current-document.html` and `explicit-manifest.html`.

## Files

```
web-install-issues/
  index.html                       reviewer landing + scenario index
  current-document.html            zero-param navigator.install() + <install>
  explicit-manifest.html           navigator.install({manifest}) + <install manifest>
  fixtures/
    malformed.webmanifest          intentionally invalid JSON
    missing-id.webmanifest         no `id` (icon reference preserved so the
                                   missing-icon check does not fire first)
    missing-name.webmanifest       no `name` or `short_name`
    missing-start-url.webmanifest  no `start_url`
    start-url-invalid.webmanifest  `start_url` on a different origin
    icon.png                       192x192 icon reused by missing-id.webmanifest
```

## What this site does not do

So that DevTools Network / Storage activity observed here can be attributed to
the API under test rather than to this site, these pages intentionally do the
minimum:

- No analytics, telemetry, beacons, or `fetch()` to any logging endpoint.
- No cookies, no `localStorage`, `sessionStorage`, IndexedDB, or service worker.
- No third-party scripts, stylesheets, fonts, or CDN assets.
- No form fields, so nothing typed or clicked is collected or transmitted.
- The only outbound requests are the manifest fetches the Web Install API
  itself triggers (plus the one cross-origin manifest URL in scenario 6,
  which is the behavior being tested).
