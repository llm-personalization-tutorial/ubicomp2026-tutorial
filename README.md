# UbiComp/ISWC 2026 LLM Personalization Tutorial

Static website for **From Generic Intelligence to Personalized AI: A Tutorial on Foundations of LLM Personalization**. The tutorial is listed as **ID 7, Half Day, Monday, October 12, 2026, Morning, Room 5G** on the [official UbiComp/ISWC 2026 tutorial schedule](https://www.ubicomp.org/ubicomp-iswc-2026/tutorials-2026/). The venue is Shanghai International Convention Center, Shanghai, China. The proposal describes a planned three-hour lecture sequence; the conference has not published exact clock times for this session.

This directory is the **Ubicomp publication copy**. Do not publish from the teacher-provided `llm-personalization-tutorial.github.io` folder: that copy retains a Git remote pointing to the live KDD organization website.

## Local Preview

```bash
cd "/Users/grsxsa/2026 Autumn/Ubicomp tutorial/ubicomp2026-tutorial-site"
python3 -m http.server 8000
```

Open `http://localhost:8000/`. If port 8000 is occupied, use `python3 -m http.server 8001` and open `http://localhost:8001/`.

## Files to Publish

- `index.html`: page content, metadata, conference website link, schedule, people, materials, and citation.
- `assets/css/style.css`: responsive design.
- `assets/js/main.js`: presenter-image fallback and BibTeX copy behavior.
- `assets/img/ubicomp-shanghai-human-centered-hero.png`: hero artwork.
- `assets/img/presenters/`: seven organizer/instructor photos used by the page.
- `assets/files/LLMPersonalization_Tutorial_UbiComp2026.pdf`: the five-page tutorial proposal.
- `.nojekyll`: serves this static site without Jekyll processing.

The KDD paper, KDD Introduction slides, teacher's information-collection form, photo ZIP, site ZIP, and reference screenshot PDF are **not** part of this publication copy.

## Recommended GitHub Pages Deployment

Use the existing GitHub organization **`llm-personalization-tutorial`**, but create a **new, separate public repository** named **`ubicomp2026-tutorial`**. Do not reuse the existing repository `llm-personalization-tutorial.github.io`: that repository serves the KDD site at the organization root.

With this repository name, the expected Ubicomp URL is:

`https://llm-personalization-tutorial.github.io/ubicomp2026-tutorial/`

Create the repository at `https://github.com/organizations/llm-personalization-tutorial/repositories/new` or through the organization's **Repositories > New** interface. Choose **Public** and leave **Add a README**, **.gitignore**, and **license** unchecked so the remote is empty. Confirm the owner and name before creating it.

After obtaining a corrected, approved proposal PDF and reviewing the page, run:

```bash
cd "/Users/grsxsa/2026 Autumn/Ubicomp tutorial/ubicomp2026-tutorial-site"
git init
git branch -M main
git add .
git status
git commit -m "Publish UbiComp 2026 tutorial website"
git remote add origin git@github.com:llm-personalization-tutorial/ubicomp2026-tutorial.git
git remote -v
git push -u origin main
```

The `git remote -v` output **must** show `ubicomp2026-tutorial.git`, never `llm-personalization-tutorial.github.io.git`. The previous KDD site remains unchanged.

Then open the new repository on GitHub and select **Settings > Pages > Build and deployment**. Set **Source** to **Deploy from a branch**, **Branch** to **main**, **Folder** to **/(root)**, and click **Save**. Check **Actions** for a successful `pages build and deployment` run. The Pages settings screen will show the published URL.

If a different repository name or a new organization is chosen, update the `canonical`, `og:url`, `og:image`, and BibTeX `url` values in `index.html` before publishing. The page uses relative asset paths, so ordinary assets will still load under a project-site prefix.

## Before Publication

- **Replace the downloadable proposal PDF before publication.** The organizer has confirmed the public names `Yuhan Wang` and `Philip S. Yu`; the website, photos, and provisional BibTeX now use them. The teacher-provided PDF still says `Yuhang Wang` and `Phillip S. Yu` in its author information and body. Request a corrected, approved export from the proposal source and replace `assets/files/LLMPersonalization_Tutorial_UbiComp2026.pdf`. Do not patch the formal PDF visually or silently modify the teacher's original.
- Confirm that the seven names in the submitted proposal are the intended public organizers/instructors. The separate information-collection form lists three chairs, Ge Wang, Shengzhong Liu, and Jizhong Zhao, but leaves its tutorial and speaker fields blank. Confirm whether those chairs belong on this tutorial website before adding them.
- Confirm exact start/end clock times if the conference later publishes them. The official listing currently says only `Morning`.
- Confirm that the five-page submitted proposal is the PDF approved for public release. It is linked from the hero and Materials section.
- Replace the provisional `@misc` BibTeX with the final ACM Digital Library record when one exists. Do not invent a DOI.
- Add final Ubicomp-specific slides, lecture notes, and architecture comparison tables. The original page text also mentions a reading map, but Materials intentionally remains a four-item layout with no separate Reading card. The bundled KDD Introduction slides are intentionally not published here.
- Recheck organizer affiliations, bios, homepage links, and image permissions.
- If the official tutorial day, time, room, or venue changes, update both the page and this README.

## Acceptance Checklist

- Open `http://localhost:8000/` and check both desktop and mobile widths.
- The hero title, Ubicomp framing, and Shanghai artwork display correctly.
- The snapshot states **Monday, October 12, 2026**, **Morning**, **Room 5G**, and **Shanghai International Convention Center**.
- The lecture sequence totals **180 minutes**, including its 10-minute break, without claiming an official clock start time.
- The hero's **Conference Website** button opens the UbiComp/ISWC 2026 conference home page, while the proposal PDF and presenter homepages open correctly.
- All seven presenter images load; the page and BibTeX spell the corrected names **Yuhan Wang** and **Philip S. Yu**.
- The Design Space cards and human-agency element do not overlap at desktop, tablet, or 320px mobile width; the 人 icon is centered in its circle.
- Open Materials contains exactly four items: Tutorial Proposal, Teaching Deck, Lecture Notes, and Architecture Tables.
- Navigation anchors work, the mobile page has no unwanted horizontal overflow, and Copy BibTeX works.
- Coming-soon materials are not dead links.
- `git remote -v` points to the **new Ubicomp repository** before any push.
- GitHub Pages deploys from `main` and `/(root)`; the final project-site URL opens without affecting the KDD root site.

For later website updates:

```bash
cd "/Users/grsxsa/2026 Autumn/Ubicomp tutorial/ubicomp2026-tutorial-site"
git add .
git commit -m "Update UbiComp tutorial website"
git push
```

`git add` stages a change locally; the change appears online only after `git commit` **and** `git push`.
