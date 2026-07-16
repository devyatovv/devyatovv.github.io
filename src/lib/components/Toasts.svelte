<script lang="ts">
    import { toasts } from "$lib/toast.svelte";
    import { fly } from "svelte/transition";
</script>

<div class="fixed right-4 bottom-4 z-50 flex flex-col-reverse items-end gap-2">
    {#each toasts as entry (entry.id)}
        <div
            transition:fly={{ x: 24, duration: 200 }}
            class="toast rounded-lg border border-black/60 bg-white/5 px-4 py-3 text-white backdrop-blur"
        >
            {entry.message}
        </div>
    {/each}
</div>

<style>
    .toast {
        box-shadow:
            inset 0 1px 0 rgb(255 255 255 / 0.1),
            inset 0 -1px 0 rgb(255 255 255 / 0.05),
            0 4px 16px rgb(0 0 0 / 0.4);
    }
</style>