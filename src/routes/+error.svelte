<script lang="ts">
    import { page } from "$app/state";
</script>

<svelte:head>
    <title>{page.status}</title>
</svelte:head>

<div class="flex flex-col gap-4 text-lg pop-in-container">
    <h1 class="text-3xl font-bold text-white">{page.status}</h1>
    <p>{page.error?.message}</p>
</div>