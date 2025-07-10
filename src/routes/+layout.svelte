<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>{page.data.title ? `${page.data.title}|NoteNow` : 'NoteNow'}</title>
	<meta property="og:title" content="NoteNow" />
	<meta property="og:description" content="Some description" />
	<meta property="description" content="Some description" />
</svelte:head>

{@render children()}
