<script lang="ts">
	import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<h1 class="text-4x1">{data.title}</h1>
{data.x}
