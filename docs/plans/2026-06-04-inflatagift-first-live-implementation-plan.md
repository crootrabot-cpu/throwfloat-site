# InflataGift First Live Site Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Build and publish a phone-friendly static GitHub Pages site for InflataGift based on the approved Editorial Reveal direction.

**Architecture:** A single static marketing/concept site with separate CSS and JS assets. The site tells one clear story: present boxes by day, inflatables by night, and why that beats normal inflatables. Deployment is GitHub Pages from the repository root.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Git, GitHub Pages, headless Firefox for screenshots, Python `http.server` for local preview.

---

### Task 1: Create the publishable project skeleton

**Objective:** Create the final project folder structure for the live site.

**Files:**
- Create: `/home/fabric-02-rabot/Desktop/inflatagift-site/index.html`
- Create: `/home/fabric-02-rabot/Desktop/inflatagift-site/assets/style.css`
- Create: `/home/fabric-02-rabot/Desktop/inflatagift-site/assets/app.js`
- Create: `/home/fabric-02-rabot/Desktop/inflatagift-site/.nojekyll`
- Create: `/home/fabric-02-rabot/Desktop/inflatagift-site/README.md`

**Step 1:** Create the files and directories.

**Step 2:** Copy the approved image assets from the mockup folder into `assets/`.

**Step 3:** Verify the files exist.

**Step 4:** Commit after the structure is stable.

### Task 2: Turn Variant A into production-shaped HTML

**Objective:** Convert the successful mockup into a cleaner public `index.html` with stronger section structure and honest copy.

**Files:**
- Modify: `/home/fabric-02-rabot/Desktop/inflatagift-site/index.html`

**Step 1:** Build the hero, reveal, how-it-works, and why-this-wins sections.

**Step 2:** Replace mockup-only labels with public-facing copy.

**Step 3:** Add anchor navigation/CTA behavior where useful.

**Step 4:** Verify the HTML contains the approved headline and comparison language.

### Task 3: Extract and tighten the visual system

**Objective:** Move styling into `assets/style.css` and improve the mobile layout.

**Files:**
- Modify: `/home/fabric-02-rabot/Desktop/inflatagift-site/assets/style.css`

**Step 1:** Port the warm premium visual system from Variant A.

**Step 2:** Improve spacing, button states, image framing, and responsive stacking.

**Step 3:** Ensure the mobile layout reads cleanly in a narrow viewport.

**Step 4:** Verify there is no horizontal overflow and no tiny tap targets.

### Task 4: Wire the interactivity

**Objective:** Add lightweight JavaScript for the day/night toggle and any scroll-jump CTA behavior.

**Files:**
- Modify: `/home/fabric-02-rabot/Desktop/inflatagift-site/assets/app.js`

**Step 1:** Implement the day/night hero toggle.

**Step 2:** Update hero labels when the state changes.

**Step 3:** Keep the JS minimal and dependency-free.

**Step 4:** Verify that the correct image swaps in both states.

### Task 5: Add honest project documentation

**Objective:** Document what the site is and is not.

**Files:**
- Modify: `/home/fabric-02-rabot/Desktop/inflatagift-site/README.md`

**Step 1:** Describe the site as a static concept website.

**Step 2:** Document local preview and deployment steps.

**Step 3:** State that forms, checkout, and backend functionality are intentionally absent.

### Task 6: Verify local preview with content checks

**Objective:** Prove the site works locally before pushing it.

**Files:**
- No source changes required unless issues are found.

**Step 1:** Start `python3 -m http.server` in the project folder.

**Step 2:** Fetch `http://127.0.0.1:<port>/` and verify key text markers are present.

**Step 3:** Capture a desktop screenshot with headless Firefox.

**Step 4:** Capture a mobile-width screenshot with headless Firefox.

**Step 5:** Fix any layout problems found and re-run verification.

### Task 7: Initialize git and create the repo

**Objective:** Turn the local folder into a GitHub-backed project.

**Files:**
- Create: `/home/fabric-02-rabot/Desktop/inflatagift-site/.gitignore`
- Modify: local git metadata

**Step 1:** Initialize git in the project folder.

**Step 2:** Set repo-local git identity if needed.

**Step 3:** Commit the first live site.

**Step 4:** Create a public GitHub repository under the authenticated account and push `main`.

### Task 8: Enable GitHub Pages and verify the public URL

**Objective:** Make the site publicly accessible and prove it is live.

**Files:**
- No source changes required unless deployment issues are found.

**Step 1:** Enable GitHub Pages from the root of `main`.

**Step 2:** Poll the expected `github.io` URL until it returns the expected headline.

**Step 3:** Report the live URL only after a successful fetch.

### Task 9: Capture live-share artifacts

**Objective:** Produce final shareable evidence for review after deployment.

**Files:**
- Create: screenshots inside the project folder as needed

**Step 1:** Capture the live site after GitHub Pages propagation.

**Step 2:** Compare local and live headline markers.

**Step 3:** Hand back the live URL and note the next best improvement.
