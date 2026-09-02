# Handoff: Black Volt Investments — single-page marketing site

## Overview
A one-page marketing site for **Black Volt Investments (Pvt) Ltd** (www.blackvolt.co.zw), a Zimbabwean company operating four divisions: import and exports, general trading, farm produce, and security guard services. The page positions the company, explains the four divisions, answers common questions, and drives the visitor to request a quotation by phone or email.

Single scrolling page, anchor-based navigation only (`#top`, `#about`, `#services`, `#faq`, `#contact`). No routing, no backend, no forms — every call-to-action is a quote request handled offline via phone/email.

## About the design files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look, layout, copy, and behavior. They are not production code to lift wholesale.

`BlackVolt.dc.html` is authored in a proprietary streaming-component format ("Design Component"): a template with `{{ }}` holes plus a small logic class, all styling inline. Read it as a **visual and behavioral specification**, not as a component to port.

The task is to **recreate this design in the target codebase's existing environment** using its established patterns and libraries. If no codebase exists yet, the design was originally specified as a **Next.js App Router page (`app/page.tsx`) + components, Tailwind CSS, Framer Motion** — that stack is a good default.

## Fidelity
**High fidelity.** Colors, typography, spacing, animation timings, and copy are final. Recreate the UI pixel-accurately. Exact values are given below; measurements that use `clamp()` in the prototype are the responsive rule, not an approximation — carry the clamp behavior over (Tailwind arbitrary values or plain CSS both work).

The **photography is placeholder stock** (Unsplash and a few other stock sources) standing in for Black Volt's own images. See §Assets.

---

## Global setup

### Fonts
| Variable | Family | Weights | Used for |
|---|---|---|---|
| `--font-display` | **Bebas Neue** | 400 | All headings, logo wordmark, giant background wordmarks. Naturally all-caps. |
| `--font-sans` | **Inter** | 400 / 500 / 600 | Body copy, nav, buttons, labels, stat numbers |

In Next.js load both via `next/font/google` and expose as CSS variables. The prototype loads them from the Google Fonts CDN.

### Color tokens
| Token | Value | Use |
|---|---|---|
| `--ink` | `#0E1520` | Hero background, headings, dark surfaces |
| `--ink-deep` | `#05080D` | Mobile menu overlay, footer bottom of gradient |
| `--cool` | `#F1F3F7` | Page background for all light sections, hero stat card |
| `--accent` | `#2F6FED` | Primary accent: highlighted heading words, primary button, label-pill dot, all line icons |
| `--white` | `#FFFFFF` | |
| `--white-05` | `rgba(255,255,255,0.05)` | Hero label-pill background |
| `--white-80` | `rgba(255,255,255,0.8)` | Footer body copy and links |
| `--black-05` | `rgba(0,0,0,0.05)` | Label-pill background on light sections |
| `--card` | `rgba(255,255,255,0.7)` | All cards on light sections |
| `--ink-80` | `rgba(14,21,32,0.8)` | Muted body copy |

Accent is exposed as a tweakable prop in the prototype; alternates offered were `#1273C6`, `#0E4C8A`, `#0E1520`. Ship `#2F6FED` unless told otherwise.

### Layout system
- Every section is full-bleed with padding `clamp(48px,4vw,60px) clamp(20px,3vw,30px)`; inner container `max-width:1280px; margin-inline:auto`.
- Body background `#F1F3F7`; `overflow-x:hidden` on the page wrapper.
- Radii: cards **16px**, gallery/why-us photos **12–16px**, about photo **20px**, buttons **40px**, label pills **90px**, avatars/dots **9999px**, mobile hamburger square **10px**.
- Breakpoints: desktop ≥1440px, tablet 768–1439px, mobile ≤767px. The prototype achieves most of this with `clamp()` + `flex-wrap` rather than hard media queries; the one JS-driven break is the navbar at **1024px** (see §Navbar).

### Type scale (exact)
| Role | Font | Size / line-height | Weight | Letter-spacing | Color |
|---|---|---|---|---|---|
| Hero H1 | Bebas Neue | `clamp(48px,7.2vw,100px)` / same | 400 | `clamp(-3px,-.22vw,-1.5px)` | `#FFFFFF`, accent word `#2F6FED` |
| Giant wordmark (hero) | Bebas Neue | `min(24vw,455px)` / `.8` | 400 | normal | gradient-clipped, see §Hero |
| Giant wordmark (footer) | Bebas Neue | `min(21vw,456px)` / `.8` | 400 | normal | same gradient |
| Section H2 | Bebas Neue | `clamp(36px,3.4vw,48px)` / same | 400 | normal | `#0E1520` (white on CTA), accent word `#2F6FED` |
| Card H3 | Bebas Neue | `clamp(26px,2.4vw,32px)` / 1.2 | 400 | normal | `#000000` |
| Footer column H4 | Bebas Neue | 24px / 24px | 400 | +0.72px | `#FFFFFF` |
| Nav link | Inter | 18px / 23.4px | 500 | −0.54px | `#FFFFFF` |
| Body / paragraph | Inter | 16px / 20.8px | 400 | −0.48px | `rgba(14,21,32,0.8)` |
| Button label | Inter | 16px / 20.8px | 500 | −0.48px | contextual |
| Label-pill text | Inter | 16px / 20.8px | 500 | −0.48px | `#0E1520` (white in hero) |
| Stat number (hero card) | Inter | 44px / 50.6px | 500 | −1.628px | `#000000` |
| Stat number (about) | Inter | `clamp(28px,3vw,44px)` / 1.3 | 500 | −1.76px | `#000000` |
| Lead paragraph (footer intro) | Inter | 20px / 26px | 500 | normal | `#FFFFFF` |
| Footer copyright | Inter | 16px / 27.2px | 400 | normal | `#FFFFFF` |

---

## Reusable atoms

### `<LabelPill>` — section eyebrow
`display:inline-flex; align-items:center; gap:10px; padding:10px 16px; border-radius:90px; background:rgba(0,0,0,0.05)`, leading 8px circle `background:#2F6FED`, then Inter 16px/500 `#0E1520`. On the dark hero: background `rgba(255,255,255,0.05)`, text `#FFFFFF`.

### `<Button variant>`
Pill: `height:49px; padding:14px 20px; border-radius:40px; display:inline-flex; align-items:center; gap:8px; white-space:nowrap`, label Inter 16px/500 −0.48px, trailing 16px right-arrow SVG (`M3 8h9M8.5 4l4 4-4 4`, stroke `currentColor`, width 1.6, round caps).

| Variant | Background | Border | Text/icon |
|---|---|---|---|
| `solid-white` | `#FFFFFF` | none | `#000000` |
| `solid-accent` | `#2F6FED` | none | `#FFFFFF` |
| `outline-accent` | transparent | `1px solid #2F6FED` | `#FFFFFF` |
| `outline-dark` | `rgba(0,0,0,0.35)` | `1px solid rgba(255,255,255,0.35)` | `#FFFFFF` |

Hover on all: `scale(1.03)` on the button, arrow `translateX(4px)`, `0.3s cubic-bezier(0.16,1,0.3,1)`.

### `<SectionHeader>`
- **Split** (Services, Gallery): flex row, `gap:64px`, `justify-content:space-between`, `align-items:flex-end`, `margin-bottom:64px`. Left = LabelPill + H2 (one word accent). Right = 16px paragraph, `max-width:390px`, optionally a `solid-accent` button below.
- **Stacked** (About, Why Choose Us, FAQ): LabelPill → H2 → paragraph, left aligned, `max-width:500px`.

---

## Screens / sections

The page is one screen; sections in DOM order. Each carries a `data-screen-label`.

### 1. Navbar
Two states, switched at a **1024px** viewport threshold measured in JS.

**Wide (≥1024px)** — not sticky, scrolls away with the hero:
`position:absolute; top:24px; left:50%; transform:translateX(-50%); width:100%; max-width:1280px; z-index:10; display:flex; align-items:center; justify-content:space-between; padding:0 30px`.
- Left: 26px accent wrench/gear SVG + **BLACK VOLT** (Bebas Neue 28px, white, +0.5px).
- Center: `Home · About · Services · Contact · FAQ`, Inter 18px/500 white, `gap:28px`. Hover → color fades to `#2F6FED` over 0.25s.
- Right: `solid-white` button **Get A Quote**, 150 × 49.

**Narrow (<1024px)** — fixed bar: `position:fixed; top:0; width:100%; height:64px; background:#0E1520; border-bottom:1px solid rgba(47,111,237,0.4); z-index:60; padding:0 20px`. Logo left (22px icon, 24px wordmark) + a 44×44 accent rounded square (`radius:10`) hamburger right (three 18×2px white bars, `gap:4px`).
Tapping opens a full-screen overlay: `position:fixed; inset:0; background:#05080D; z-index:55; padding:104px 24px 24px`, links stacked at 54px row height, Inter 18px/500 white. The hamburger becomes a white ✕ on the same square. Any link closes the menu.

### 2. Hero  `#top`  `data-screen-label="Hero"`
`background:#0E1520; padding:clamp(120px,18vw,248px) clamp(20px,3vw,30px) 0; min-height:clamp(660px,86vh,895px); position:relative; overflow:hidden`.

Layers back to front:
1. **Accent glow** — 474×474 circle, `background:#2F6FED; border-radius:9999px; filter:blur(100px); opacity:.5`, at `top:0; left:60%; transform:translateX(-50%)`.
2. **Giant background wordmark** — the word **Blackvolt**, Bebas Neue `min(24vw,455px)`/`.8`, centered at `top:clamp(120px,16vw,180px); left:50%`, wrapper `opacity:.2`, gradient-clipped:
   ```css
   background-image: linear-gradient(0deg,
     rgba(5,8,13,0) 18.9%,
     rgba(103,102,102,0.15) 34%,
     rgba(148,148,148,0.33) 44.9%,
     rgba(179,179,179,0.49) 56.8%,
     rgba(202,202,202,0.62) 64.4%,
     rgb(255,255,255) 78%);
   -webkit-background-clip: text;
   background-clip: text;
   -webkit-text-fill-color: transparent;
   color: transparent;
   ```
3. **Cut-out photo** — a uniformed Black Volt guard, PNG-style cut-out, absolutely positioned bottom-right over the content (`~586 × 553` in the prototype), bleeding past the section edge.
4. **Content row** — `position:relative; z-index:2; max-width:1280px; display:flex; flex-wrap:wrap; align-items:flex-end; justify-content:space-between; gap:40px`.
   - Left column, `max-width:666px; padding-bottom:80px`:
     - LabelPill (dark variant): **Security · Trading · Farm Produce**
     - H1, two lines: **PROFESSIONAL SECURITY** / **AND TRADING SOLUTIONS** — the word `SECURITY` in `#2F6FED`.
     - Button row `gap:16px`: `solid-white` **Request A Quote** + `outline-accent` **Our Services**.
   - **Stat card**, `width:304px; min-height:214px; background:#F1F3F7; border-radius:16px; padding:24px; margin-bottom:80px; z-index:3`:
     - `24/7` — Inter 44px/50.6px, 500, −1.628px, black
     - `Guarding Cover` — Inter 16px/500 black
     - `+263 772 404 511` — Inter 16px/400 `rgba(0,0,0,0.8)`
     - Row: three overlapping 36px circles (`background:#0E1520`, `border:2px solid #F1F3F7`, `margin-left:-10px` after the first) lettered **BV / GT / FP**, then `J. Khumalo` in Inter 14px/600 black.

### 3. Logo marquee
`background:#F1F3F7; padding:clamp(48px,4vw,60px) 0`. Centered caption **Serving Businesses, Farms And Homes In Zimbabwe** — Inter 20px/26px, 500, `#000000`, `margin-bottom:32px`.
Below: `overflow:clip` container, no edge-fade mask (hard cut at both edges). Track is `display:flex; width:max-content`, containing the same 12-logo group **twice** (second copy `aria-hidden="true"`), each group `display:flex; gap:24px; padding-right:24px`. Logos are monochrome black "logoipsum"-style marks: a 26px SVG glyph + the word `logoipsum` at Inter 19px/600 −0.4px, item widths 170–230px, height 40px.
Animation: `translateX(0) → translateX(-50%)`, `linear`, infinite, duration computed from a **71 px/s** target (prototype default ~42s; recompute from real track width). Pause on hover.

### 4. About  `#about`
`background:#F1F3F7`; inner flex row, `gap:64px`, wrapping.

**Left column** (`flex:1 1 560px`):
- LabelPill **About Us**
- H2 (`max-width:696px`, `text-wrap:pretty`) — **client's own wording, reproduce verbatim including its spelling**:
  > BLOCK VOLT INVESTIMENTS IS A NEW KID ON THE BLOCK WHICH HAS PENETRATED THE ABOVE MENTIONED SEEVICES ALBEIT WITH **CUSTOMER ORIENTED END RESULTS VALUE FOR MONEY** AND HIGHLY COMPETITIVE PRODUCTS

  The bolded phrase is `#2F6FED`. The typos (`BLOCK`, `INVESTIMENTS`, `SEEVICES`) are the client's — do not silently correct them; ask before changing.
- `solid-accent` button **Request A Quote**
- Stat row, `display:flex; flex-wrap:wrap; gap:clamp(28px,10vw,150px); margin-top:72px`: **4** / Business Divisions · **24/7** / Guarding Cover · **BULAWAYO** / Head Office. Numbers per type scale; labels Inter 16px/20.8px `rgba(14,21,32,0.8)`, `margin-top:6px`. Only the numeric `4` counts up.

**Right column** (`flex:0 1 520px; min-width:280px`): photo in a `overflow:hidden; border-radius:20px; height:560px` wrapper, `object-fit:cover`, hover `scale(1.04)` over 0.6s.

### 5. Services  `#services`
Split header: LabelPill **Our Services**, H2 **SOLUTIONS ACROSS** / **FOUR** DIVISIONS (`FOUR` accent), right paragraph:
> Import and exports, general trading, farm produce, and security guard services, delivered with value for money and highly competitive products.

plus a `solid-accent` **Contact Us** button.

Grid: `display:grid; grid-template-columns:repeat(auto-fit,minmax(272px,1fr)); gap:24px`. Each card `min-height:560px; display:flex; flex-direction:column; background:rgba(255,255,255,0.7); border-radius:16px; overflow:hidden`.

Card anatomy:
- Image wrapper `height:280px; overflow:hidden; flex:none`, image `object-fit:cover`.
- Text block `padding:12px 20px 20px; display:flex; flex-direction:column; flex:1`:
  - a 20px × 1px `#0E1520` rule, `margin-bottom:16px`
  - H3 (card scale, black)
  - paragraph Inter 16px/20.8px, **weight 500**, `rgba(14,21,32,0.8)`
  - pushed to the bottom (`margin-top:auto; padding-top:24px`): a 16px right-arrow + **Enquire** in Inter 18px/500 −0.54px `#0E1520`.

**Card hover:** the rule animates `width:20px → 100%`, the H3 color transitions to `#2F6FED`, both `0.45s cubic-bezier(0.16,1,0.3,1)`; the arrow slides `translateX(6px)`.

| # | Title | Copy |
|---|---|---|
| 1 | Security Guard Services | Trained, uniformed guards for static guarding, premises patrols, and asset protection. |
| 2 | Import And Exports | Sourcing and moving goods across borders with reliable handling and competitive pricing. |
| 3 | General Trading | Supply of general goods to businesses, institutions, and retail customers. |
| 4 | Farm Produce | Fresh farm produce supplied to markets, retailers, and bulk buyers. |

### 6. Why Choose Us
Inner flex row, `align-items:flex-start; gap:64px`.

**Left column** (`flex:1 1 420px; max-width:500px; position:sticky; top:60px`) — a real sticky column that pins while the cards scroll past:
- LabelPill **Why Choose Us**
- H2 **WHY CUSTOMERS** / **CHOOSE** BLACK VOLT (`CHOOSE` accent)
- Paragraph: "Customers prefer Black Volt because it offers end to end solutions, competitive prices, experienced security guards, and excellent personalized services and support."

**Right column** (`flex:1 1 620px`), four stacked cards `gap:24px`, each `min-height:298px; background:rgba(255,255,255,0.7); border-radius:16px; padding:24px; display:flex; flex-wrap:wrap; gap:24px`:
- Left half (`flex:1 1 240px; display:flex; flex-direction:column`): a 34×34 accent line icon at the top, then H3 pushed to the bottom (`margin:auto 0 10px; padding-top:24px`), then a 2-line paragraph.
- Right half (`flex:0 1 320px; min-width:220px; height:250px; overflow:hidden; border-radius:12px`): photo `object-fit:cover`, hover `scale(1.04)` 0.6s.

| Icon | Title | Copy |
|---|---|---|
| person + chevron | End To End Solutions | One partner for guarding, imports, general goods, and farm produce. |
| two people | Competitive Prices | Value for money on every quotation, with highly competitive products. |
| price tag | Experienced Security Guards | Vetted, uniformed personnel trained for static guarding and patrols. |
| helmet | Personalized Service | Excellent personalized service and support, with a direct line to management. |

(Exact icon paths are in the prototype; all strokes `#2F6FED`, width 1.8, round caps/joins.)

### 7. Gallery
Split header: LabelPill **Our Gallery**, H2 **OUR TEAM AND** / **OPERATIONS** IN PICTURES (`OPERATIONS` accent), right paragraph: "Uniformed guards on duty, trading operations, and farm produce moving to market."

Mosaic — `display:flex; flex-wrap:wrap; gap:24px`:
- Left: one image, `flex:1 1 480px; height:634px`.
- Middle column (`flex:1 1 280px`, column, `gap:24px`): 375px tall on top, 235px below.
- Right column (`flex:1 1 280px`, column, `gap:24px`): 235px on top, 375px below.

All wrappers `overflow:hidden; border-radius:16px`; images `object-fit:cover`; hover `scale(1.04)` inside the clipped wrapper, `0.6s cubic-bezier(0.16,1,0.3,1)`.

### 8. FAQ  `#faq`
`padding:clamp(48px,4vw,60px) clamp(20px,3vw,30px) 120px`. Flex row, `gap:64px`.

**Left** (`flex:1 1 380px; max-width:500px`, static): LabelPill **FAQ**, H2 **ANSWERS TO YOUR** / **COMMON** QUESTIONS (`COMMON` accent), paragraph: "Quick answers on our guarding, trading, import and farm produce services. For anything else, call or email us directly."

**Right** (`flex:1 1 520px`): single-open accordion, `gap:16px`, each item `background:rgba(255,255,255,0.7); border-radius:16px; padding:24px 28px`.
- Trigger: full-width borderless button, question Inter 18px/500 `#000000` left; right a **+** built from two 18px black bars in an 18×18 box — the vertical bar animates to `scaleY(0) rotate(90deg)` over 0.3s when open, leaving a **−**.
- Panel: `height:0 → auto`, `opacity:0 → 1`, `0.35s cubic-bezier(0.16,1,0.3,1)`; answer Inter 16px/20.8px `rgba(14,21,32,0.8)`, `margin-top:16px`. Opening one closes the other. All start closed.

| Question | Answer |
|---|---|
| What services do you offer? | Black Volt Investments operates four divisions: import and exports, general trading, farm produce, and security guard services. |
| Do you supply uniformed security guards? | Yes. We deploy trained, uniformed guards for static guarding, premises patrols, and asset protection at business and residential sites. |
| Which areas do you cover? | Our office is at No 22 Cecil Road, Bulawayo. Talk to us about deployments and supply outside the city. |
| Are your guards experienced? | Yes. We deploy experienced security guards and back them with excellent personalized service and support. |
| How are your prices set? | We quote competitively and focus on value for money, with highly competitive products across all four divisions. |
| How do I get a quotation? | Call +263 772 404 511 or email sajuniya63@gmail.com and J. Khumalo will come back to you with a quotation. |

### 9. CTA band
`position:relative; overflow:hidden; min-height:clamp(520px,70vh,743px); padding:clamp(48px,4vw,60px) clamp(20px,3vw,30px); display:flex; align-items:center; justify-content:center`.
- Background image absolutely filling the section, `object-fit:cover`.
- Overlay: `linear-gradient(243deg, rgba(255,255,255,0.05) 0%, rgba(5,8,13,0) 17.7%, rgba(0,0,0,0.61) 49.1%, rgba(0,0,0,0.8) 100%)`, `pointer-events:none`.
- Centered content, `max-width:640px; text-align:center; z-index:2`:
  - H2, white, two lines: **NEED RELIABLE GUARDS OR** / **COMPETITIVE SUPPLY?** — `SUPPLY` in `#2F6FED`.
  - Paragraph, Inter 16px/20.8px white: "Whether you need uniformed security cover or a competitive supply partner for imports, general goods, or farm produce, Black Volt Investments is ready to quote."
  - Button row, `gap:16px`, centered: `solid-white` **Request A Quote** + `outline-dark` **+263 772 404 511** with a leading 16px phone-ring icon.

### 10. Footer  `#contact`
`background:linear-gradient(0deg,#05080D 0%,#0A121C 35%,#123A6B 100%); padding:80px 40px 20px; overflow:hidden` — a blue glow at the top fading to near-black at the bottom.

Top row (`max-width:1280px`, flex, wrap, `gap:48px`, `justify-content:space-between`):
- **Brand** (`flex:1 1 320px; max-width:400px`): accent wrench/gear icon + **BLACK VOLT** (Bebas Neue 28px white), then a lead paragraph Inter 20px/26px 500 white: "Import and exports, general trading, farm produce, and security guard services. Customer oriented end results and value for money."
- **CONTACT** (H4): J. Khumalo · No 22 Cecil Road, Bulawayo · +263 772 404 511 · sajuniya63@gmail.com · jkhumalo94@gmail.com · www.blackvolt.co.zw — Inter 16px/500 `rgba(255,255,255,0.8)`, column `gap:20px`.
- **PAGES**: Home, About, Services, Contact, FAQ.
- **DIVISIONS**: Import And Exports, General Trading, Farm Produce, Security Guard Services — each followed by a small ↗ glyph. Hover: text → `#FFFFFF`, arrow `translate(2px,-2px)`.

**Giant wordmark**: **BLACKVOLT**, Bebas Neue `min(21vw,456px)`/`.8`, centered, `margin-top:60px`, same bottom-to-top gradient clip as the hero.

**Bottom bar**: `border-top:1px solid rgba(255,255,255,0.1); padding-top:20px`, flex, wrap, space-between. Left `© 2026 Black Volt Investments (Pvt) Ltd All Rights Reserved` (Inter 16px/27.2px white); right `Terms and conditions` + `Privacy Policy`, `gap:24px`, `rgba(255,255,255,0.8)`.

---

## Interactions & behavior

### Scroll reveal
Framer Motion `whileInView`, `viewport={{ once: true, amount: 0.2 }}`. Base transition for every reveal: `duration: 0.9, ease: [0.16, 1, 0.3, 1]`, with a ~0.2s trigger delay after entering the viewport. All end at `opacity:1, y:0`.

| Element | From |
|---|---|
| Hero content column, hero stat card | `opacity:0, y:30` |
| Section headers / paragraph blocks | `opacity:0, y:50` |
| Service cards | `opacity:0, y:50` |
| Why-Choose-Us cards | `opacity:0, y:50` |
| Gallery image wrappers | `opacity:0, y:150` |
| FAQ items | `opacity:0, y:50` |
| Footer top row | `opacity:0, y:80` |
| Footer giant wordmark | `opacity:0, y:50` |
| Footer copyright bar | `opacity:0, y:16` |

Card groups (services, why-choose-us, gallery, FAQ) stagger via a parent container, `staggerChildren: 0.12`.

> Implementation note: in the prototype the reveal is **additive** — the element's resting styles are authored normally and the animation is applied on top. Do the same (Framer Motion's `initial`/`whileInView` does this naturally). Never author the hidden state as the element's base style, or a failure to trigger leaves the page blank.

### Count-up numbers
The hero stat is a static `24/7`. In the About stat row, only **4** counts up, from 0 to target over ~1.6s, ease-out, once, on scroll into view. `24/7` and `BULAWAYO` are static strings.

### Marquee
Continuous `x: 0 → -50%` on a duplicated track, `repeat: Infinity`, `ease: "linear"`, duration tuned to ≈71 px/s. Pause on hover.

### Hero ambience
The blurred accent circle pulses `opacity 0.45 ↔ 0.55` and `scale 1 ↔ 1.06` over 6s, infinite, mirrored.

### Hover micro-interactions
| Target | Effect |
|---|---|
| Service card | rule `20px → 100%`, H3 → `#2F6FED`, arrow `+6px X` — 0.45s `[0.16,1,0.3,1]` |
| Gallery / about / why-us images | `scale(1.04)` inside a clipped wrapper, 0.6s |
| All buttons | `scale(1.03)` + arrow `+4px X`, 0.3s |
| Nav links | color → `#2F6FED`, 0.25s |
| Footer links | color → `#FFFFFF`, 0.25s; ↗ arrow `translate(2px,-2px)` |

### Accordion
`height 0 ↔ auto` + `opacity 0 ↔ 1`, `0.35s cubic-bezier(0.16,1,0.3,1)`; the `+ → −` bar morph runs in the same duration. Single-open.

### Mobile menu
Overlay fades and slides in over 0.35s; links stagger in at 0.05s intervals from `opacity:0, x:-20`.

### Reduced motion
Under `@media (prefers-reduced-motion: reduce)`: disable the marquee, the hero glow pulse, the count-up, and all reveal transforms; leave everything at its final state (`opacity:1; transform:none`), and collapse transition durations to ~0.01ms.

---

## State management
Small and local — no store needed.

| State | Type | Purpose |
|---|---|---|
| `narrow` | boolean | Viewport `< 1024px`; selects the fixed mobile navbar. Set from a resize listener / `matchMedia`. |
| `menu` | boolean | Mobile overlay open. Reset to false on any link click and when `narrow` becomes false. |
| `openFaq` | index \| null | Which accordion item is open; starts `null`. Single-open. |
| count-up | per-number, run-once | Triggered by an intersection observer; `hasRun` guard so it never replays. |

No data fetching. All copy is static.

---

## Design tokens
**Colors** — see the token table above.
**Spacing** — 4 / 6 / 8 / 10 / 12 / 16 / 20 / 24 / 28 / 32 / 40 / 48 / 60 / 64 / 72 / 80 / 104 / 120px; section padding `clamp(48px,4vw,60px) clamp(20px,3vw,30px)`; grid gaps 16 / 24 / 48 / 64px.
**Radius** — 8, 10, 12, 16, 20, 40, 90, 9999px.
**Easing** — `cubic-bezier(0.16,1,0.3,1)` for reveals, card hovers, buttons and the accordion; `ease` 0.25s for color-only shifts; `linear` for the marquee.
**Durations** — 0.25s (color), 0.3s (button/icon), 0.35s (accordion, menu), 0.45s (card hover), 0.6s (image zoom), 0.9s (reveal), 1.6s (count-up), 6s (glow), ~42s (marquee).
**Shadows** — none anywhere. Depth comes from the translucent card fill on the cool background.

---

## Assets

### Photography — all placeholder
The prototype has **22 image slots**, currently filled with stock photos (Unsplash, plus three the client swapped in from other stock sources). **None of these are licensed for Black Volt's production site.** Before launch, replace every slot with the client's own photography, or license replacements.

Slot ids and what each needs:
| Slot | Content |
|---|---|
| `hero-tech` | Uniformed Black Volt guard, cut-out on transparent background, anchored bottom-right |
| `about-photo` | Guards on duty at a client site (portrait, 520×560) |
| `svc-leak` | Uniformed guard on static duty |
| `svc-drain` | Goods being loaded for export |
| `svc-heater` | General goods in a trading warehouse |
| `svc-produce` | Farm produce ready for market |
| `why-1` … `why-4` | Guards briefed before deployment · client meeting on site · guard at a client entrance · supervisor with the guarding team |
| `g-1` … `g-5` | Guard team lined up · guard at a client gate · goods checked before dispatch · farm produce ready for supply · patrol vehicle and guards |
| `cta-bg` | Guarded premises at dusk, patrol vehicle and guard at right (wide, room for centered text) |

Keep the blue / charcoal / cool-grey palette consistent across the set.

Where the current photos are Unsplash, each slot carries `credit` and `credit-href` attributes naming the photographer. If any Unsplash image is kept, preserve that attribution.

### Icons
All icons are inline SVG authored in the prototype — logo wrench/gear, button arrow, phone ring, four 34px why-us icons, twelve marquee glyphs. Stroke `#2F6FED` (marquee glyphs `#000`), width 1.7–1.8 (2 for marquee), round caps and joins. Copy the paths out of `BlackVolt.dc.html` or substitute equivalents from the codebase's icon set.

### Logos
The marquee logos are generic "logoipsum" placeholders. Replace with real client/partner logos or remove the strip.

---

## Files in this bundle
| File | What it is |
|---|---|
| `BlackVolt.dc.html` | The design reference — the full page. Open it in a browser to see the intended result. |
| `support.js` | Runtime for the proprietary component format. Required only to view the prototype. **Do not port.** |
| `image-slot.js` | The drag-and-drop image placeholder web component used for every photo. **Do not port** — use plain `<img>` / `next/image`. |
| `README.md` | This document. |

To view the prototype, serve the folder over HTTP (e.g. `npx serve .`) and open `BlackVolt.dc.html`; opening it from `file://` will block the local script loads.

## Open items for the client
- Real photography for all 22 slots (see §Assets).
- Confirm whether the About headline's spelling (`BLOCK VOLT INVESTIMENTS`, `SEEVICES`) should stay verbatim or be corrected.
- Real partner logos for the marquee, or drop the strip.
- Terms and Privacy pages do not exist; those links currently point back to `#top`.
- No contact form — all CTAs are phone/email. Confirm that's intended.
