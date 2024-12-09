<script lang="ts">
	import Icon from './Icon.svelte'
	import { link } from 'svelte-spa-router'
	let { nav = [{ name: 'Start', href: '/', icon: 'icon-start' }] } = $props()
	let width = $state()
</script>

<header bind:clientWidth={width}>
	<nav class="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
		<div class="container-xl">
			<a class="navbar-brand" href="/">nwp-tools</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarCollapse"
				aria-controls="navbarCollapse"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav ms-auto">
					{#each nav as { name, href, icon }}
						<li class="nav-item">
							<a
								class="nav-link d-flex align-items-center gap-2"
								{href}
								use:link>
								{#if width < 768}
									<Icon {icon} />
									<span>{name}</span>
								{:else}
									<Icon {icon} />
									<span class="visually-hidden">{name}</span>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
</header>
