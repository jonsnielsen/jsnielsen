<script lang="ts">
	import type { Snippet } from 'svelte';
	import { inView } from '$lib/actions/inView';

	let {
		children,
		intersectionOptions = { threshold: 0 }
	}: {
		children: Snippet;
		intersectionOptions?: IntersectionObserverInit;
	} = $props();

	let hasBeenInView = $state(false);
</script>

<span
	use:inView={intersectionOptions}
	onhasbeeninview={() => (hasBeenInView = true)}
	class="inline-block transition-[transform,opacity] ease-[cubic-bezier(0.455,0.03,0.515,0.955)]"
	style="transform: translateY({hasBeenInView ? 0 : 40}px); opacity: {hasBeenInView
		? 1
		: 0}; transition-duration: {hasBeenInView ? '750ms' : '850ms'};"
>
	{@render children()}
</span>
