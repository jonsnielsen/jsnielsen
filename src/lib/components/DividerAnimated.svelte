<script lang="ts">
	import { inView } from '$lib/actions/inView';

	let { class: className = '' }: { class?: string } = $props();

	let hasBeenInView = $state(false);
</script>

<div
	use:inView
	onhasbeeninview={() => (hasBeenInView = true)}
	class="{className} bg-text transition-[width] duration-[850ms] ease-[cubic-bezier(0.455,0.03,0.515,0.955)]"
	style="height: 1px; width: {hasBeenInView ? '100%' : '0%'};"
></div>
