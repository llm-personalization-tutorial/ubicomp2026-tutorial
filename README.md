# UbiComp/ISWC 2026 LLM Personalization Tutorial

Static website for **From Generic Intelligence to Personalized AI: A Tutorial on Foundations of LLM Personalization**. The tutorial is listed as **T01, Half Day, Sunday, October 11, 2026, Afternoon, Room 5A** on the [official UbiComp/ISWC 2026 tutorial schedule](https://www.ubicomp.org/ubicomp-iswc-2026/tutorials-2026/). The venue is Shanghai International Convention Center, Shanghai, China. The supplied final webpage package gives the detailed tutorial time as **14:00–17:00**.

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
- `assets/js/main.js`: presenter-image fallback, responsive Design Space connector geometry, and BibTeX copy behavior.
- `assets/img/ubicomp-shanghai-human-centered-hero.png`: hero artwork.
- `assets/img/presenters/`: eleven team photos used by the page: Ruijie Wang, Qingkai Zeng, Xin Hui, Xuefei Wang, Yuhan Wang, Li Sun, Ge Wang, Shengzhong Liu, Jizhong Zhao, Jianxin Li, and Philip S. Yu.
- `assets/img/ubicomp2026-tutorial-qr.png`: QR code for the public tutorial website.
- `assets/files/Tutorial7_A4.pdf`: final A4 tutorial brochure linked from the hero and Materials section.
- `assets/files/LLMPersonalization_Tutorial_UbiComp2026.pdf`: the five-page tutorial proposal.
- `.nojekyll`: serves this static site without Jekyll processing.

The KDD paper, KDD Introduction slides, teacher's information-collection form, photo ZIP, site ZIP, and reference screenshot PDF are **not** part of this publication copy.

## GitHub Pages and Later Updates

This website is already published from the separate repository **`llm-personalization-tutorial/ubicomp2026-tutorial`** at:

`https://llm-personalization-tutorial.github.io/ubicomp2026-tutorial/`

The Git remote is `git@github.com:llm-personalization-tutorial/ubicomp2026-tutorial.git`; the existing KDD repository `llm-personalization-tutorial.github.io` serves a different website at the organization root. Do **not** run `git init`, create another repository, or change the remote to the KDD repository for ordinary updates.

After checking the revised page locally, run:

```bash
cd "/Users/grsxsa/2026 Autumn/Ubicomp tutorial/ubicomp2026-tutorial-site"
git status
git remote -v
git add index.html README.md assets/css/style.css assets/img/presenters assets/img/ubicomp2026-tutorial-qr.png assets/files/Tutorial7_A4.pdf
git diff --cached --stat
git commit -m "Add UbiComp tutorial chairs"
git push origin main
```

The `git remote -v` output **must** show `ubicomp2026-tutorial.git`, never `llm-personalization-tutorial.github.io.git`. `git add` only stages local files; GitHub Pages changes after both `git commit` and `git push`.

On GitHub, inspect **Settings > Pages > Build and deployment** to confirm the existing source is **Deploy from a branch**, **main**, **/(root)**. Check **Actions** for a successful `pages build and deployment` run after pushing, then open the published URL and verify the new people and photos. The KDD root site remains unchanged.

If a different repository name or a new organization is chosen, update the `canonical`, `og:url`, `og:image`, and BibTeX `url` values in `index.html` before publishing. The page uses relative asset paths, so ordinary assets will still load under a project-site prefix.

## Content to Confirm

- **Replace the downloadable proposal PDF once an approved correction is available.** The organizer has confirmed the public names `Yuhan Wang` and `Philip S. Yu`; the website, photos, and provisional BibTeX now use them. The teacher-provided PDF still says `Yuhang Wang` and `Phillip S. Yu` in its author information and body. Request a corrected, approved export from the proposal source and replace `assets/files/LLMPersonalization_Tutorial_UbiComp2026.pdf`. Do not patch the formal PDF visually or silently modify the teacher's original.
- Confirm the public roles, biographies, and image permissions for all eleven people shown on the page.
- Recheck the detailed `14:00–17:00` running order against any last-minute conference or room announcement. The official tutorial listing currently confirms October 11, Afternoon, and Room 5A.
- Confirm that the five-page submitted proposal is the PDF approved for public release. It is linked from the hero and Materials section.
- Replace the provisional `@misc` BibTeX with the final ACM Digital Library record when one exists. Do not invent a DOI.
- Add final Ubicomp-specific slides, lecture notes, and architecture comparison tables. The Materials area currently includes the tutorial brochure, website QR code, proposal, and three coming-soon resources. The bundled KDD Introduction slides are intentionally not published here.
- Recheck organizer affiliations, bios, homepage links, and image permissions.
- If the official tutorial day, time, room, or venue changes, update both the page and this README.

## Acceptance Checklist

- Open `http://localhost:8000/` and check both desktop and mobile widths.
- The hero title, Ubicomp framing, and Shanghai artwork display correctly.
- The snapshot states **October 11, 2026**, **14:00–17:00**, **Afternoon**, **Room 5A**, and **Shanghai International Convention Center**.
- The detailed schedule runs continuously from **14:00 to 17:00**, including its **15:30–16:00 Coffee Break**.
- The hero's **Conference Website** button opens the UbiComp/ISWC 2026 conference home page, while the proposal PDF and presenter homepages open correctly.
- All eleven team photos load, including Xin Hui; the page and BibTeX spell **Yuhan Wang** and **Philip S. Yu** consistently.
- On desktop, each Design Space connector starts at a card's bottom-center. The outer white lines make one rounded right-angle turn into the left and right centers of Human agency, while the middle line joins its top-center. Connectors are hidden in the mobile single-column layout.
- Open Materials includes Tutorial Brochure, Official Tutorial Website QR code, Tutorial Proposal, Teaching Deck, Lecture Notes, and Architecture Tables.
- Navigation anchors work, the mobile page has no unwanted horizontal overflow, and Copy BibTeX works.
- Coming-soon materials are not dead links.
- `git remote -v` points to the **new Ubicomp repository** before any push.
- GitHub Pages deploys from `main` and `/(root)`; the final project-site URL opens without affecting the KDD root site.

For subsequent edits, stage only the changed site files, commit, and push to `origin main`; do not use `git push --force` for routine website changes.
