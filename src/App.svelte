<script lang="ts">
	import Start from './routes/Start.svelte'
	import Settings from './routes/Settings.svelte'
	import Tools from './routes/Tools.svelte'
	import Appbar from './lib/Appbar.svelte'
	import IconSprite from './lib/IconSprite.svelte'
	import { nav } from './lib'
	import FileReader from './lib/FileReader.svelte'
	import Router, { location, link } from 'svelte-spa-router'
	import { onMount } from 'svelte'

	const routes = {
		'/': Start,
		'/tools': Tools,
		'/fileReader': FileReader,
		'/settings': Settings
	}

	onMount(async () => {
		await import('bootstrap')
	})
</script>

<IconSprite />

<Appbar {nav}></Appbar>

<main class="main">
	<Router {routes} />
</main>
