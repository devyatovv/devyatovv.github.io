import type { Component } from "svelte";

export interface PostMetadata {
    title: string;
    description: string;
    date: string;
}

export interface Post extends PostMetadata {
    slug: string;
    component: Component;
}

const modules = import.meta.glob<{
    default: Component;
    metadata: PostMetadata;
}>("./*.md", { eager: true });

export const posts: Post[] = Object.entries(modules)
    .map(([path, module]) => ({
        slug: path.slice("./".length, -".md".length),
        component: module.default,
        ...module.metadata
    }))
    .sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    });
}