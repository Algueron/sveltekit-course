<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<div class="border-2 bg-green-900 p-4">
    <h1 class="text-3x1">(auth) Layout</h1>
    {@render children()}
</div>
