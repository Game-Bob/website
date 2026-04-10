import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import noComments from "eslint-plugin-no-comments";

const customCommentsPlugin = {
    rules: {
        "no-html-comments": {
            meta: {
                type: "problem",
                docs: {
                    description: "Disallow HTML comments in non-JS parts",
                },
            },
            create(context) {
                return {
                    Program() {
                        const sourceCode = context.sourceCode;
                        const pattern = "<!" + "--" + "[\\s\\S]*?--" + ">";
                        const regex = new RegExp(pattern, "g");
                        let match;
                        while ((match = regex.exec(sourceCode.getText())) !== null) {
                            context.report({
                                loc: sourceCode.getLocFromIndex(match.index),
                                message: "HTML comments are forbidden.",
                            });
                        }
                    },
                };
            },
        },
    },
};

export default [
    {
        ignores: [
            "**/dist/",
            "**/node_modules/",
            ".astro/",
            "**/.astro/**",
            "**/public/**",
            ".vercel/",
            "scripts/**",
        ],
    },
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs["flat/recommended"],

    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.mjs", "**/*.astro"],
        plugins: {
            "no-comments": noComments,
            custom: customCommentsPlugin,
        },
        rules: {
            "no-comments/disallowComments": "error",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "custom/no-html-comments": "error",
            "complexity": ["error", 5],
            "max-lines": ["error", { "max": 100, "skipBlankLines": true, "skipComments": false }],
            "max-lines-per-function": ["error", { "max": 40, "skipBlankLines": true, "skipComments": false }],
            "max-depth": ["error", 3],
            "max-params": ["error", 3],
        },
    },

    {
        files: ["**/i18n/slugs.ts", "src/pages/index.astro"],
        rules: {
            "max-lines": "off",
        },
    },
    {
        files: ["**/*.astro"],
        plugins: {
            custom: customCommentsPlugin,
        },
        rules: {
            "custom/no-html-comments": "error",
        },
    },
];
