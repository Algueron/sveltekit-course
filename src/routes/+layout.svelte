<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<nav class="my-2 bg-amber-600 p2">
	<ul class="flex gap-2">
		<li>
			<a href="/">Home</a>
			<a href="/about">About</a>
		</li>
	</ul>
</nav>
{@render children()}
