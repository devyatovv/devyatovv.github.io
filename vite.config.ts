import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { escapeSvelte, mdsvex } from "mdsvex";
import rehypeKatex from "rehype-katex";
// @ts-expect-error
import remarkMath from "remark-math";
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
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
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
                runes: ({ filename }) =>
                    filename.split(/[/\\]/).includes("node_modules")
                        ? undefined
                        : true
            },
            adapter: adapter()
        })
    ]
});