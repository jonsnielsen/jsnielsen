<script lang="ts">
	import { inView } from '$lib/actions/inView';

	let hasBeenInView = $state(false);
</script>

<div
	use:inView
	onhasbeeninview={() => (hasBeenInView = true)}
	class="absolute h-full w-full bg-background transition-transform ease-[cubic-bezier(0.455,0.03,0.515,0.955)]"
	style="z-index: 1; transform: translateX({hasBeenInView
		? '100%'
		: '0'}); transition-duration: 500ms; transition-delay: 800ms;"
></div>
