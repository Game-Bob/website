export default {
    "debug-por-url": {
        title: "The SPA Trap: Debug by URL",
        date: "2025-12-26",
        error: "Designing hybrid applications (Capacitor, WebView) as pure Single Page Applications (SPA), where state lives only in memory and has no reflection in the URL, is a critical mistake. By delegating all state to internal variables, you lose the ability to debug the 'webview' directly by jumping to specific screens or sharing a specific state with a bug report from the real device.",
        lesson: "In hybrid app development, the URL must be the source of truth for visual state. Implementing 'Deep Linking' via query parameters transforms DX: adding `?state=broken&msg=42` allows testing complex flows on the device without manual navigation and greatly facilitates screenshot generation for stores (Google Play/App Store) using automation scripts. The reload cost is mitigated by frameworks, but URL state visibility is vital for observability in apps running inside wrappers.",
        tags: ["state-management", "debugging", "dx", "deep-linking"]
    },
    "ia-vaga-linter": {
        title: "The Brilliant Junior (and Dangerously Lazy)",
        date: "2025-12-26",
        error: "Blindly trusting AI is the fastest path to technical entropy. No matter how much you limit them with `.md` files or system instructions, their probabilistic nature leads them to ignore restrictions, inject unnecessary emojis, and break SOLID architecture in favor of the 'quick solution'. The drama is not that AI fails, but that the developer loses control over their own quality standards.",
        lesson: "The only way to maintain sanity is to treat AI as an extremely productive junior profile but without judgment: if there is no technical barrier, it will skip it. Redemption came from shielding the repository with aggressive linters and an non-negotiable workflow. It's not enough to ask for order; you must enforce it through scripts that prevent commits if the code has comments, emojis, or functions exceeding 50 lines. This approach forces AI to perform real separation of responsibilities and abstractions to pass checks. But beware: AI is clever, and when cornered by rules, it will try to mutate the linter or suggest `--no-verify`. If you leave that door open, the system will collapse. Senior developer vigilance over technical foundations is all that separates us from chaos.",
        tags: ["ai-pair-programming", "linting", "husky", "software-quality"],
        codeSteps: [
            {
                title: "1. Iron Rules (ESLint Configuration)",
                code: [
                    "export default [",
                    "  {",
                    "    files: ['src/**/*.{ts,js,astro}'],",
                    "    rules: {",
                    "      'no-comments/disallow': 'error',",
                    "      'max-lines-per-function': ['error', { max: 50, skipBlankLines: true, skipComments: true }],",
                    "      'max-lines': ['error', { max: 200, skipBlankLines: true }],",
                    "      'complexity': ['error', 10],",
                    "      'no-restricted-syntax': [",
                    "        'error',",
                    "        {",
                    "          selector: 'Literal[value=/\\\\p{Emoji}/u]',",
                    "          message: 'Emojis are strictly forbidden in the codebase.'",
                    "        }",
                    "      ]",
                    "    }",
                    "  }",
                    "];"
                ]
            },
            {
                title: "2. The Impenetrable Barrier (Husky & Lint-Staged)",
                code: [
                    "npm install husky lint-staged --save-dev",
                    "npx husky init",
                    "",
                    "echo 'npx lint-staged' > .husky/pre-commit",
                    "",
                    "// lint-staged.config.js",
                    "export default {",
                    "  '*.{ts,js,astro}': [",
                    "    'eslint --fix',",
                    "    'prettier --write',",
                    "    'vitest run --related --passWithNoTests'",
                    "  ]",
                    "};"
                ]
            },
            {
                title: "3. The Final Check: Strict Typing",
                code: [
                    "// tsconfig.json",
                    "{",
                    "  'compilerOptions': {",
                    "    'strict': true,",
                    "    'noImplicitAny': true,",
                    "    'strictNullChecks': true,",
                    "    'noUnusedLocals': true,",
                    "    'noUnusedParameters': true,",
                    "    'noEmit': true",
                    "  }",
                    "}"
                ]
            }
        ]
    },
    "ansiedad-stores": {
        title: "Store Anxiety",
        date: "2025-12-24",
        error: "Color Beat was ready weeks ago. However, panic over the bureaucratic —screenshots, SEO descriptions, privacy policies, and the technical process of uploading to Google Play— became my biggest enemy. What were mere procedures I mentally transformed into an insurmountable mountain, a 'ball' of anxiety that drained my energy and postponed the launch for no real technical reason.",
        lesson: "Step by step, the mountain is not so high. In the end, dedicating two evenings to chipping away at bureaucratic stone takes a weight off your shoulders that you've been dragging for months. It was the reason for this delay, but it will never be for the next game: now that the path is beaten, publishing is integrated as just another phase of development, not a traumatic final event. Lesson learned: Don't let guerrilla marketing and administration paralyze your code.",
        tags: ["bureaucracy", "mindset", "launch", "stores"]
    },
    "color-beat-arbol-habilidades": {
        title: "Color Beat and its Skill Tree (The 3:1 from Hell)",
        date: "2025-12-24",
        error: "Color Beat was a finished casual game. But my 'God Developer' syndrome and my obsession with *rogue-lites* forced me to sabotage it. I crammed a monstrous hexagonal skill tree with complex synergies into a game that only needed colors. I turned a three-week sprint into a 2-month marathon, with the cherry on top of arrogance: I did it all before a single player validated if they wanted that complexity.",
        lesson: "QA is not a phase; it's penance for your arrogance. The metric is clear: QA time exceeded development by a painful 3 to 1. Three times more time debugging than creating, just to ensure two different abilities don't crash the game. Lesson: Keep it scrappy. A simple, living game is worth infinitely more than a beautiful architecture that no one will play."
    },
    "caos-traducciones": {
        title: "Translation Chaos",
        date: "2025-11-15",
        error: "For a small project, managing translations in different languages can be very chaotic. Desynchronized files, lost keys, and uncertainty about whether the secondary language is up to date with the primary turn localization into a maintenance nightmare.",
        lesson: "The simple and functional solution: separate translations into category files and test each one, always using the base language as the source of truth. I implemented an automatic file-by-file comparison of all keys (key by key, not just the total number). An easy-to-program test that guarantees 100% consistency. For small applications or indie developers, this small initial effort is ideal.",
        tags: ["i18n", "testing", "productivity", "indie-dev"],
        codeSteps: [
            {
                title: "1. Environment Setup",
                code: [
                    "const REFERENCE_LANG = 'es';",
                    "const TARGET_LANGS = ['en', 'de', 'fr', 'it', 'pt'];",
                    "const TRANSLATION_FILES = ['ui', 'fortunes', 'bestiary'];"
                ]
            },
            {
                title: "2. The Parity Algorithm",
                code: [
                    "it('should have 100% key parity across all files', () => {",
                    "  TARGET_LANGS.forEach(lang => {",
                    "    TRANSLATION_FILES.forEach(file => {",
                    "      const baseKeys = Object.keys(load(REFERENCE_LANG, file));",
                    "      const targetData = load(lang, file);",
                    "      ",
                    "      baseKeys.forEach(key => {",
                    "        if (!Object.hasOwn(targetData, key)) {",
                    "          throw new Error(`Missing key [${key}] in file [${file}] for language [${lang}]`);",
                    "        }",
                    "      });",
                    "    });",
                    "  });",
                    "});"
                ]
            },
            {
                title: "3. Extra: Detect Empty Values",
                code: [
                    "it('should not have empty translations', () => {",
                    "  TARGET_LANGS.forEach(lang => {",
                    "    TRANSLATION_FILES.forEach(file => {",
                    "      const targetData = load(lang, file);",
                    "      ",
                    "      Object.entries(targetData).forEach(([key, value]) => {",
                    "        if (typeof value === 'string' && value.trim() === '') {",
                    "          throw new Error(`Empty value for [${key}] in [${file}] for [${lang}]`);",
                    "        }",
                    "      });",
                    "    });",
                    "  });",
                    "});"
                ]
            }
        ]
    }
};
