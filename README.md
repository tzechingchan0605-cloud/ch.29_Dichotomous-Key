# 二叉式檢索表 · Dichotomous key lab

香港高中生物科雙語互動學習工具。預設繁體中文，即時切換 English；不需帳戶、API 金鑰、套件安裝或第三方執行時服務。

## 執行 / Run

Requires Python 3; Node.js 24 is used for tests only.

```sh
cd ch.29_Dichotomous-Key
python3 -m http.server 8000
```

Open `http://localhost:8000`. `npm start` runs the same server. Do not open index.html directly: browser ES modules require HTTP. Run `npm test` for the 12 model acceptance tests.

## Offline / 離線

After one successful online visit, the service worker caches all essential content for offline reloads. No remote fonts, images, translation services or CDNs are used. Browser storage clearing removes the cache. A new app version should bump `CACHE` in sw.js.

Download `offline-lab.zip`, extract it, and run `python3 -m http.server 8000` in the extracted folder. Internet is not needed; Python must already be installed. The download link itself needs a network connection unless previously downloaded.

## GitHub publication

Pushing to main runs `.github/workflows/pages.yml`: model tests, a downloadable offline ZIP, and GitHub Pages deployment. The workflow requests Pages enablement; if organisation or repository policy prevents this, an administrator must enable **Settings → Pages → GitHub Actions**. A committed workflow is not evidence that deployment completed; check its Actions run.

## Model and dictionary

`engine.js` defines both canonical feature tables before drawing/key generation. Butterfly features: hindwing tail projection, eye-spot, transverse stripe. Fish features: forked vs rounded tail, body eye-spot, two vs one dorsal fins. SVG geometry in `app.js` derives each visible feature from the table. A–F are schematic teaching specimens, not real species; colours and sizes are not criteria. The outside specimen X has an additional triangle marking and is explicitly outside the reference set.

`app.js` exports the stable-ID bilingual `dictionary`, including the supplied Hong Kong glossary. No Latin species names, evolutionary relationships, measurements, rates or biological timing are invented. Replay advances previously recorded choices with a button, rather than introducing a time-based model. Local storage retains language only; routes, editor history and records remain in the current tab and can be exported.

No textbook PDF was attached. The implementation follows the supplied section 29.4 specification and glossary; textbook pages and the current EDB supplementary document have **not** been independently verified. It does not claim official curriculum certification. No enrichment content has been introduced as required knowledge.

## Completed acceptance checks

- Node: both worked keys identify all six specimens; three alternative split orders accepted.
- Node: numbered paired statements and tree traversal agree for every specimen.
- Node: empty splits rejected; replacing a parent removes descendants.
- Node: overlapping / non-exhaustive predicates, missing branches, unhelpful splits, unresolved groups, duplicate and wrong identities, unreachable specimens and cycles diagnosed.
- Chromium: identify A, change representation mid-route, switch language, record result and expose CSV download.
- Chromium: build partial key, undo, change language, redo; verify partial tree survives.
- Chromium: worked keys pass for both sets; each flawed example produces its expected diagnosis.
- Chromium: 390px layout keeps language switch visible without horizontal overflow.
- Chromium: offline reload succeeds after service-worker activation; no uncaught page errors.

Testing used a temporary external Playwright installation and system Chromium, not a runtime dependency. Free explanations are self-assessed against revealed guidance and never keyword-graded. Exported records include immutable specimen features, full key, route and terminal; changing settings does not alter earlier records. Key JSON exports preserve the original tree and generated paired statements; print includes both forms. Printing uses the browser's PDF/print facility.

## Real photographs and source citations

The default **Real photographs** reference set uses the two original JPEGs uploaded by the user to this repository. Both photographs are displayed locally and included in the service-worker cache and offline ZIP. Every display includes the corresponding source link supplied by the user:

- `assets/金裳鳳蝶.jpeg`: http://www.kaohsiungfarm.com.tw/Font-Page/butterfly-dtl/butterfly06/
- `assets/羅非魚.jpeg`: https://agroworld.my/cn/article-details/389-article-05

Photographs supplied by the user; rights and credit remain with the original websites / rights holders. No open licence or photographer identity is invented. The six-member butterfly and fish schematic sets remain separate reference sets; the two photographs are not relabelled as six different specimens.

`photo-data.js` is the canonical photo table: A has visible wings and antennae, without fins; B has visible fins, without wings or antennae. These observations were checked against the actual uploaded photographs, rather than inferred from species names. Only these two reference photographs can be identified by this key; species identity outside the reference set is not verified. Feature highlighting marks a visible region when the characteristic is present. Alternative first splits by wings, antennae or fins are accepted.

Two additional Node checks verify the photo features, alternative routes, existing image files and source mappings. Chromium checks cover photo loading, both identification routes, language retention, source URLs, highlighting, photo-key construction, mobile layout and offline image reload.
