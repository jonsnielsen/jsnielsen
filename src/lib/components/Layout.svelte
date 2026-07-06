<script lang="ts">
	import type { Snippet } from 'svelte';
	import { resolve } from '$app/paths';
	import DeveloperBadge from './DeveloperBadge.svelte';
	import Divider from './Divider.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<DeveloperBadge />
<header>
	<div
		class="content-section fixed inset-x-0 z-10 mix-blend-difference text-white mx-auto flex h-24 max-w-[1355px] items-center justify-between min-[1900px]:max-w-none"
	>
		<div class="mix-blend-difference flex flex-1 items-center justify-between text-white">
			<a href={resolve('/')} class="text-sm font-medium">
				<span class="hidden tiny:block">
					Jonathan <br class="block sm:hidden" />
					S. Nielsen
				</span>
			</a>
			<nav class="-mr-1 md:-mr-0">
				<ul class="flex gap-8">
					<li class="text-sm font-medium"><a href={resolve('/')}>Home</a></li>
					<li class="text-sm font-medium"><a href={resolve('/about')}>About</a></li>
				</ul>
			</nav>
		</div>
		<a class="button ml-8 mt-1" href="mailto:jonathan.sparvath@gmail.com">Write me</a>
	</div>
</header>
<div class="h-24"></div>
<div class="flex flex-col items-center justify-center">
	<main style="max-width: 1355px;">{@render children()}</main>
</div>
<div class="content-section">
	<Divider />
	<footer class="flex flex-col justify-between pb-40 pt-16 md:flex-row">
		<p class="mb-12 w-1/2 max-w-sm text-tiny md:mb-0 pr-12">
			Feel free to reach out if you have any questions or just want to say hello!
		</p>
		<div class="flex w-1/2 flex-col gap-x-20 gap-y-10 lg:flex-row">
			<div style="width: fit-content;">
				<h3 class="mb-4 text-tiny font-normal">Contact</h3>
				<ul class="text-tiny">
					<li><a href="mailto:jonathan.sparvath@gmail.com">jonathan.sparvath@gmail.com</a></li>
					<li>+45 81 75 53 45</li>
				</ul>
			</div>
			<div style="width: fit-content;">
				<h3 class="mb-4 text-tiny font-normal">Social</h3>
				<ul class="text-tiny">
					<li>
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jsparvath/">
							LinkedIn
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="https://github.com/jonsnielsen"> Github </a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</div>
