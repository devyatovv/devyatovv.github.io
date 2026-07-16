<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        children,
        class: className = ""
    }: { children?: Snippet; class?: string } = $props();
</script>

<div class="card rounded-xl border border-black/60 bg-white/5 {className}">
    {@render children?.()}
</div>

<style>
    .card {
        box-shadow:
            inset 0 1px 0 rgb(255 255 255 / 0.07),
            inset 0 -1px 0 rgb(255 255 255 / 0.04);
    }
</style>