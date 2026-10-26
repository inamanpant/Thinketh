<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Pillar and assessment content lives in typed data files under src/data; pages read from them so copy changes never touch layout.
- Public forms insert straight into insert-only tables from the browser; no read access is granted, so submissions stay private.
- Course pricing, stage content and mission copy live in typed src/data modules; views share these sources so pricing and promises remain consistent.
- Full-fee comparisons derive from assisted totals and the maximum aid percentage, never a fabricated historical price; aid is conditional and payment schedules require confirmation.
