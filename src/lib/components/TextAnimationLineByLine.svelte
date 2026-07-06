<script lang="ts">
	import { tick } from 'svelte';
	import { inView } from '$lib/actions/inView';

	let {
		text,
		intersectionOptions = { threshold: 0 }
	}: {
		text: string;
		intersectionOptions?: IntersectionObserverInit;
	} = $props();

	let hasBeenInView = $state(false);
	let measureEl = $state<HTMLElement>();
	let lines = $state<string[]>();

	async function splitIntoLines() {
		if (!text) return;

		lines = undefined;
		await tick();

		const el = measureEl;
		if (!el) return;

		let prevTop: number | undefined;
		const grouped: string[][] = [[]];

		Array.from(el.children).forEach((child, i) => {
			const { top } = child.getBoundingClientRect();
			if (i === 0) prevTop = top;
			if (top !== prevTop) {
				prevTop = top;
				grouped.push([]);
			}
			grouped[grouped.length - 1].push((child as HTMLElement).innerText);
		});

		lines = grouped.map((words) => words.join(' '));
	}

	$effect(() => {
		splitIntoLines();
	});
</script>

<span use:inView={intersectionOptions} onhasbeeninview={() => (hasBeenInView = true)}>
	{#if lines !== undefined}
		{#each lines as line, i (i)}
			<span class="inline-flex overflow-hidden" style="line-height: 1.3;">
				<span
					class="inline-block transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.455,0.03,0.515,0.955)]"
					style="font-size: inherit; font-weight: inherit; transform: translateY({hasBeenInView
						? '0'
						: '100%'}); opacity: {hasBeenInView ? 1 : 0}; transition-delay: {1000 + i * 200}ms;"
				>
					{line}
				</span>
			</span>
		{/each}
	{:else}
		<span bind:this={measureEl}>
			{#each text.split(' ') as word, i (i)}
				<span>{word} </span>
			{/each}
		</span>
	{/if}
</span>
