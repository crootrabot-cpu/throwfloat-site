# InflataGift First Live Site Design

**Goal**
Ship a public, phone-friendly, static concept site for InflataGift that people can open from a shared link and immediately understand: giant present boxes by day, premium inflatable Christmas scene by night, and a clear explanation of why this is better than existing inflatables.

## Product framing
InflataGift is not being presented yet as a store, preorder flow, or backend-heavy application. The first live version is a **shareable concept website** whose job is to make the product idea legible, appealing, and memorable.

## Primary audience
- Friends, collaborators, and potential early believers who need to understand the idea quickly
- Drake on phone, who needs an uncluttered, easy-to-share surface for review and iteration

## Success criteria
- The page makes the concept understandable within a few seconds
- The phone version feels clean, not cramped or confusing
- The site has a real public URL that can be shared immediately
- The site makes an explicit case against the ugly daytime look of normal inflatables
- The artifact remains honest: no fake claims about ordering, email capture, manufacturing readiness, or patent status

## Chosen approach
**Static GitHub Pages site built from Variant A (Editorial Reveal)** with small conversion-language improvements inspired by Variant B.

This is the right first-live cut because it is:
- fast to publish
- trivial to share
- low-risk and low-maintenance
- easy to restyle repeatedly while the concept matures
- easy to move later to Vercel or a custom domain without changing the content model

## Information architecture
1. **Hero**
   - Catchy headline
   - Short subhead explaining the day/night transformation
   - Primary CTA to jump to the night reveal / explanation
   - Day/night toggle on the hero image

2. **Day → night reveal section**
   - Day scene: beautiful house with three giant present boxes
   - Night scene: same concept revealed with Santa, reindeer, snowman
   - Short copy explaining the curiosity hook

3. **How it works**
   - Graphic or simplified sequence
   - Day: tidy present box
   - Dusk trigger: base opens flat
   - Night: inflatable rises from the footprint

4. **Why this wins**
   - Direct explanation that standard inflatables look like melted plastic in the yard during the day
   - InflataGift solves the ugly off-state without giving up the nighttime fun

5. **Concept status footer / next-step honesty**
   - Explicitly frame the site as a concept website / product preview
   - No fake commerce or manufacturing claims

## Build shape
- Static HTML/CSS/JS only
- No backend
- No forms
- No checkout
- No auth
- No external data dependency required for first launch

## File structure
- `index.html` — main public site
- `assets/style.css` — visual system and responsive layout
- `assets/app.js` — day/night toggle and light interaction
- `assets/day-house-presents.png`
- `assets/night-house-inflatables.png`
- `assets/how-it-works.png`
- `.nojekyll`
- `README.md`

## Visual direction
Base the live site on the approved **Editorial Reveal** direction:
- warm premium cream background
- elegant serif headline
- cleaner spacing than the mockup
- clearer mobile stacking
- slightly sharper buying-language in the comparison section

## Mobile design requirements
- Single-column layout below tablet widths
- Hero copy before heavy image blocks where helpful for scan speed
- 16px+ readable body text
- Large tap targets for toggle and CTA
- No dense card walls or tiny labels
- Good vertical rhythm so the page feels like a story, not a dashboard

## Deployment approach
- Create a dedicated public GitHub repository under the authenticated account
- Push the static site
- Enable GitHub Pages from the root of `main`
- Verify the live URL with a real HTTP fetch after propagation

## Testing and verification
- Local static preview via `python3 -m http.server`
- Verify presence of key copy markers with a fetch
- Capture real desktop and mobile-width screenshots with headless Firefox
- Confirm live Pages URL serves the expected headline after deployment

## Out of scope for first live version
- Email capture
- Ordering or checkout
- Configurator
- Patent database research
- Market research system
- Manufacturing feasibility workflows
- “Real app” backend behavior

## Follow-on path after launch
1. Tighten visuals and copy from real feedback
2. Improve image consistency so day/night feels like the same exact house and camera angle
3. Add deeper concept sections only if they improve clarity
4. Begin patent and feasibility research once the customer-facing concept surface feels right
