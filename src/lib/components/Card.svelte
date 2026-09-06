<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        children,
        class: className = "",
        cursorGlow = false
    }: { children?: Snippet; class?: string; cursorGlow?: boolean } = $props();
</script>

<div
    class="glass-panel shadow-inset-subtle rounded-xl {cursorGlow ? 'cursor-glow-card' : ''} {className}"
    data-cursor-glow={cursorGlow ? "true" : undefined}
>
    {@render children?.()}

    {#if cursorGlow}
        <span class="cursor-glow-border" aria-hidden="true"></span>
    {/if}
</div>
