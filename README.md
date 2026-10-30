# 二叉式檢索表 · Dichotomous key lab

香港高中生物科雙語互動學習工具。預設繁體中文，即時切換 English；不需帳戶、API 金鑰、套件安裝或第三方執行時服務。

## 執行 / Run

Requires Python 3; Node.js 24 is used for tests only.

```sh
cd ch.29_Dichotomous-Key
python3 -m http.server 8000
```

Open `http://localhost:8000`. `npm start` runs the same server. Do not open index.html directly: browser ES modules require HTTP. Run `npm test` for the 14 model acceptance tests.

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

`photo-data.js` defines separate, interactive **photo observation keys**. Students inspect one real photograph and select paired statements before looking at the tree below. These are checks of visible features of the reference photograph, not complete species keys. The butterfly and fish are never combined into a cross-group identification task.

The photographed butterfly has **no visible hindwing tail projection**, **no concentric wing eye-spots**, and **visible forewing stripes**. Dark patches are not automatically treated as eye-spots. The fish has **one continuous dorsal fin rather than two separate dorsal fins**, a **rounded rather than forked tail**, and **no distinct body eye-spot**. Answers, region highlights and generated tree/list representations derive from this canonical photo table.

Choices and route controls appear above the tree. All tree views (photo keys, six-specimen keys, comparison and editor) now run **from top to bottom**, with connected branches, paired-statement labels, blue question boxes and yellow terminal boxes. Active routes have a visible outline. The diagram scrolls inside its own panel on small screens. Tree and numbered-list views share stable node paths. Backtracking, reset, step-by-step replay, bilingual switching and immutable route recording with CSV export are supported for photo decisions. Feedback identifies the first inconsistent observation; no unsupported species identity is invented.

The six-specimen key-building, identification and comparison activities remain within their respective butterfly or fish schematic groups. More original specimen photographs would be required for within-group photographic identification challenges.

Fourteen Node checks cover the key engine, independent photo/source mappings, canonical butterfly traits, correct photo paths, first-error diagnosis and numbering. Chromium verifies choice placement above the diagram; parent nodes above their children; both photo routes; source URLs; language and list-view state; backtracking and replay; records; editor operation; mobile overflow; and offline photo loading.

## Main answer layout and updates

The main **Identify from real photos** tab is now the photo-answer workspace: original photograph on the left, paired choices on the right, and a connected top-down tree beneath the choices. On desktop the photo panel sticks within the answer section while scrolling; on narrow screens it stacks above the choices. The former synthetic identification activity is explicitly labelled **Schematic practice**. Both butterfly and fish photos are reachable from the main Identify tab.

The service worker refreshes HTML, JavaScript and CSS from the network when connected, with cached fallbacks for offline use; photos remain locally cached. This prevents an old cached app or stylesheet from indefinitely preserving the earlier list-like diagram. Application updates never force a reload in the middle of a student's answer. Chromium validation included deliberately caching obsolete app/CSS responses and verifying a subsequent online reload restored the new photo-answer layout.
