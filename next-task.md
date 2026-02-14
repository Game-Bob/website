# Next Task: Create Remaining Mechanics Pages

## Context
Currently only `slingshot.astro` page exists. Need to create static pages for the remaining 25 mechanics.

## Mechanics List
Based on `src/data/gamebob/mechanics.ts`, these mechanics need pages:

1. ✅ slingshot (DONE)
2. ❌ swipe
3. ❌ gravity-well
4. ❌ flocking
5. ❌ tap-fly
6. ❌ hold-jump
7. ❌ clicker
8. ❌ autorunner
9. ❌ platformer
10. ❌ size-matters
11. ❌ one-bullet-shooter
12. ❌ echolocation
13. ❌ vibrator-cracker
14. ❌ magnetic-finger
15. ❌ color-chameleon
16. ❌ the-barrier
17. ❌ finger-twister
18. ❌ gravity-flip
19. ❌ neon-grapple
20. ❌ rhythm-jump
21. ❌ draw-the-path
22. ❌ viewport-collision
23. ❌ bullet-time-painting
24. ❌ momentum-transfer

## Instructions

### Step 1: Check translations exist
For each mechanic, verify translations exist in:
- `src/i18n/locales/en/mechanics.ts`
- `src/i18n/locales/es/mechanics.ts`

Each mechanic should have:
```typescript
"mechanic-id": {
    title: "Title",
    description: "Description",
    tags: ["tag1", "tag2"],
    // Optional fields for detailed pages:
    instruction: "Instruction text",
    subInstruction: "Sub instruction",
    howItWorks: {
        key1: "How it works point 1",
        key2: "How it works point 2",
    },
    controls: {
        key1: "Control 1",
        key2: "Control 2",
    }
}
```

### Step 2: Create page file
For each mechanic, create: `src/pages/[lang]/mechanics/{mechanic-id}.astro`

Use `slingshot.astro` as template:

```astro
---
import MechanicPage from "../../../components/gamebob/mechanics/MechanicPage.astro";
import MechanicCanvas from "../../../components/gamebob/mechanics/MechanicCanvas.astro";
import MechanicInfo from "../../../components/gamebob/mechanics/MechanicInfo.astro";
import { Icon } from "astro-icon/components";
import { ui } from "../../../i18n/ui";
import { useTranslations } from "../../../i18n/utils";
import { getGitHubUrls } from "../../../config/github";

export async function getStaticPaths() {
    return Object.keys(ui).map((lang) => ({
        params: { lang }
    }));
}

const { lang } = Astro.params;
const t = useTranslations(lang as any);

const { repo: GITHUB_BASE, code: CODE_URL } = getGitHubUrls("MECHANIC-ID");
---

<MechanicPage
    title={t("mechanics.MECHANIC-ID.title")}
    description={t("mechanics.MECHANIC-ID.description")}
    githubUrl={GITHUB_BASE}
    codeUrl={CODE_URL}
    image="/images/gamebob/mechanics/MECHANIC-ID.webp"
    lang={lang}
>
    <Icon slot="icon" name="ICON-NAME" class="text-COLOR-400" />

    <MechanicCanvas
        id="game-canvas"
        instruction={t("mechanics.MECHANIC-ID.instruction")}
        subInstruction={t("mechanics.MECHANIC-ID.subInstruction")}
        verticalOnMobile={true}
    />

    <MechanicInfo>
        <Fragment slot="how-it-works">
            <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">•</span>
                <span>{t("mechanics.MECHANIC-ID.howItWorks.KEY1")}</span>
            </li>
            <!-- Add more items as needed -->
        </Fragment>

        <Fragment slot="controls">
            <div class="mechanic-control-item full-width">
                <span class="mechanic-control-label">{t("mechanics.MECHANIC-ID.controls.KEY1")}</span>
                <span class="mechanic-control-sublabel">{t("mechanics.MECHANIC-ID.controls.KEY2")}</span>
            </div>
            <!-- Add more controls as needed -->
        </Fragment>
    </MechanicInfo>
</MechanicPage>

<script>
    import { MechanicGame } from "../../../lib/mechanics/MECHANIC-ID/MechanicGame";

    const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
    const overlay = document.getElementById("game-canvas-overlay");
    let game: MechanicGame | null = null;

    if (canvas && overlay) {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        overlay.addEventListener("click", () => {
            overlay.style.opacity = "0";
            overlay.style.pointerEvents = "none";
            if (!game) {
                game = new MechanicGame(canvas);
            }
        });

        window.addEventListener("resize", () => {
            if (game) game.resize();
        });
    }
</script>
```

### Step 3: Important notes

1. **Replace placeholders:**
   - `MECHANIC-ID` → actual mechanic ID (e.g., "swipe")
   - `ICON-NAME` → appropriate mdi icon
   - `COLOR` → color class (yellow, blue, green, etc.)
   - `MechanicGame` → actual game class name from `/lib/mechanics/`

2. **Check game class:**
   - Look in `src/lib/mechanics/MECHANIC-ID/` for the main game class
   - Import path might vary (e.g., `SwipeGame.js`, `SwipeMechanic.ts`, etc.)

3. **Adapt to mechanic needs:**
   - Some mechanics might not need `howItWorks` or `controls` sections
   - Some might need different canvas aspect ratios (change `verticalOnMobile`)
   - Some might have different initialization logic in the `<script>` tag

4. **Images:**
   - Images should be at `/public/images/gamebob/mechanics/MECHANIC-ID.webp`
   - If image doesn't exist, use a placeholder or omit the `image` prop

5. **Run tests after each batch:**
   ```bash
   npm test
   npm run lint
   npx astro check
   ```

## Suggested Workflow

1. Create pages in batches of 5
2. Test each batch before continuing
3. Commit after each successful batch
4. If a mechanic has missing translations, add them first to both en/es files

## Files to update

- Create: `src/pages/[lang]/mechanics/{mechanic-id}.astro` (x24 files)
- No changes needed to:
  - `src/data/gamebob/mechanics.ts` (already complete)
  - `src/i18n/locales/*/mechanics.ts` (should already have translations)
  - Components (already exist)

## Success Criteria

- All 24 mechanic pages created
- All pages render without errors
- All tests pass
- No TypeScript errors
- All pages use proper i18n (no hardcoded text)
- GitHub URLs are generated via `getGitHubUrls()` service
