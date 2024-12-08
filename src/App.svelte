<script lang="ts">
	import type { Route } from '@mateothegreat/svelte5-router'
	import { route, Router } from '@mateothegreat/svelte5-router'

	const routes: Route[] = [
		{
			path: '/snippetsarecool',
			component: mySnippet
		}
	]
</script>

<header>
<nav class="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Fixed navbar</a>
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
					<li class="nav-item active">
						<a class="nav-link" aria-current="page" href="#">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link disabled"
							href="#"
							tabindex="-1"
							aria-disabled="true">Disabled</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>


<!-- Begin page content -->
<main class="main">
	<div class="container">
		<h1 class="mt-5">Sticky footer with fixed navbar</h1>
		<p class="lead">
			Pin a footer to the bottom of the viewport in desktop browsers with this
			custom HTML and CSS. A fixed navbar has been added with
			<code class="small">padding-top: 60px;</code> on the
			<code class="small">main &gt; .container</code>.
		</p>
		<p>
			Back to <a href="#">the default sticky footer</a> minus the navbar.
		</p>
	</div>
</main>
<footer class="footer mt-auto py-3 bg-light">
	<div class="container">
		<span class="text-muted">Place sticky footer content here.</span>
	</div>
</footer>

{#snippet mySnippet()}
	<div class="flex flex-col gap-3 bg-green-400 p-4">
		I'm a snippet!<br />
		Click on a link above to see the params..
	</div>
{/snippet}
