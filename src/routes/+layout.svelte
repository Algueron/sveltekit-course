<script lang="ts">
	import { page } from '$app/state';
	import { BProgress } from '@bprogress/core';
	import '@bprogress/core/css';
	import '../app.css';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	BProgress.configure({showSpinner: false});
	let { children } = $props();

	let loadingTimeout: number;

	beforeNavigate(() => {
		loadingTimeout = setTimeout(() => {
			BProgress.start();
		}, 400);
	});

	afterNavigate(() => {
		clearTimeout(loadingTimeout);
		BProgress.done();
	});
</script>

<svelte:head>
	<title>{page.data.title ? `${page.data.title}|NoteNow` : 'NoteNow'}</title>
	<meta property="og:title" content="NoteNow" />
	<meta property="og:description" content="Some description" />
	<meta property="description" content="Some description" />
</svelte:head>

{@render children()}
