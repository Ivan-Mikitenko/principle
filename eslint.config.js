import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import boundaries from "eslint-plugin-boundaries";
import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";

export default defineConfig([
    globalIgnores(["dist", "node_modules"]),
    {
        files: ["**/*.{ts,tsx}"],
        plugins: {
            import: importPlugin,
            boundaries,
            react,
        },
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            sourceType: "module",
        },
        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.app.json",
                },
            },
            "boundaries/elements": [
                { type: "app", pattern: "app/*" },
                { type: "pages", pattern: "pages/*" },
                { type: "features", pattern: "features/*" },
                { type: "entities", pattern: "entities/*" },
                { type: "shared", pattern: "shared/*" },
            ],
        },
        rules: {
            "react/jsx-curly-brace-presence": [
                "error",
                { props: "never", children: "ignore" },
            ],
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: [
                                "@app/*/*",
                                "@pages/*/*",
                                "@features/*/*",
                                "@entities/*/*",
                            ],
                            message:
                                "Импортируй только из публичного API (index.ts)",
                        },
                    ],
                },
            ],

            "boundaries/element-types": [
                "error",
                {
                    default: "disallow",
                    rules: [
                        { from: ["features"], allow: ["shared", "entities"] },
                        {
                            from: ["pages"],
                            allow: ["features", "entities", "shared"],
                        },
                    ],
                },
            ],

            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        ["parent", "sibling", "index"],
                    ],
                    pathGroups: [
                        {
                            pattern: "@{app,pages,features,entities,shared}/**",
                            group: "internal",
                            position: "after",
                        },
                    ],
                    "newlines-between": "always",
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],

            "no-console": "warn",
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "react/react-in-jsx-scope": "off",
        },
    },
]);
