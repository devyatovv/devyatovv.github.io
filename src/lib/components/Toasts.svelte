<script lang="ts">
    import { toasts } from "$lib/toast.svelte";
    import { fly } from "svelte/transition";
</script>

<div class="fixed right-4 bottom-4 z-50 flex flex-col-reverse items-end gap-2">
    {#each toasts as entry (entry.id)}
        <div
            transition:fly={{ x: 24, duration: 200 }}
            class="glass-panel shadow-inset-medium shadow-[0_4px_16px_rgb(0_0_0/0.4)] rounded-lg px-4 py-3 text-white backdrop-blur"
        >
            {entry.message}
        </div>
    {/each}
</div>