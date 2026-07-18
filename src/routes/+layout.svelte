<script lang="ts">
    import "../app.css";

    import { page } from "$app/state";
    import favicon from "$lib/assets/favicon.svg";
    import Toasts from "$lib/components/Toasts.svelte";
    import { cubicOut } from "svelte/easing";
    import { crossfade } from "svelte/transition";

    let { children } = $props();

    const links = [
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" }
    ];

    const [send, receive] = crossfade({ duration: 250, easing: cubicOut });

    function isActive(href: string): boolean {
        return page.url.pathname === href;
    }
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<header class="mb-12 flex items-center justify-center select-none">
    <nav class="glass-panel shadow-inset-subtle flex gap-1 rounded-full p-1.5">
        {#each links as link (link.href)}
            <a
                href={link.href}
                draggable="false"
                aria-current={isActive(link.href) ? "page" : undefined}
                class="relative rounded-full px-5 py-1.5 transition-colors hover:text-white {isActive(link.href) ? 'text-white' : ''}"
            >
                {#if isActive(link.href)}
                    <span
                        class="shadow-inset-subtle absolute inset-0 rounded-full bg-white/10"
                        in:receive={{ key: "pill" }}
                        out:send={{ key: "pill" }}
                    ></span>
                {/if}

                <span class="relative">{link.label}</span>
            </a>
        {/each}
    </nav>
</header>

{@render children()}

<Toasts />