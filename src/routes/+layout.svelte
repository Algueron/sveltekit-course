<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="border-2 bg-pink-900 p-4">
	<h1 class="text-3x1">Root Layout</h1>
	<nav class="my-2 bg-amber-600 p2">
		<ul class="flex gap-2">
			<li>
				<a href="/">Home</a>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
	{@render children()}
</div>