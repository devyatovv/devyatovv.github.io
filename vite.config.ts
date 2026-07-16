import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { escapeSvelte, mdsvex } from "mdsvex";
import { codeToHtml } from "shiki";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            extensions: [".svelte", ".md"],
            preprocess: [
                mdsvex({
                    extensions: [".md"],
                    highlight: {
                        highlighter: async (code, lang) => {
                            const html = await codeToHtml(code, {
                                lang: lang ?? "text",
                                theme: "github-dark",
                                colorReplacements: {
                                    "#24292e": "transparent"
                                }
                            });
                            return `{@html \`${escapeSvelte(html)}\`}`;
                        }
                    }
                })
            ],
            compilerOptions: {
                // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
                runes: ({ filename }) =>
                    filename.split(/[/\\]/).includes("node_modules")
                        ? undefined
                        : true
            },
            adapter: adapter()
        })
    ]
});