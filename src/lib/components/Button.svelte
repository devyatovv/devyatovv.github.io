<script lang="ts">
    import type {
        HTMLAnchorAttributes,
        HTMLButtonAttributes
    } from "svelte/elements";

    let {
        children,
        class: className = "",
        href,
        ...rest
    }: HTMLButtonAttributes & HTMLAnchorAttributes = $props();

    const classes = $derived(`group inline-block cursor-pointer ${className}`);

    const visualClasses = "button block rounded-lg border border-black/60 bg-white/5 px-4 py-1.5 text-white transition-all duration-150 ease-out group-hover:rounded-3xl group-active:scale-90";
</script>

{#if href}
    <a {href} class={classes} {...rest}>
        <span class={visualClasses}>
            {@render children?.()}
        </span>
    </a>
{:else}
    <button class={classes} {...rest}>
        <span class={visualClasses}>
            {@render children?.()}
        </span>
    </button>
{/if}

<style>
    .button {
        will-change: transform;
        box-shadow:
            inset 0 1px 0 rgb(255 255 255 / 0.1),
            inset 0 -1px 0 rgb(255 255 255 / 0.05);
    }
</style>