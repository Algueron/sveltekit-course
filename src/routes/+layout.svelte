<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="border-2 bg-pink-900 p-4">
	<h1 class="text-3x1">Root Layout</h1>

	{@render children()}
</div>
