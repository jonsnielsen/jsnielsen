<script lang="ts">
	import Divider from './Divider.svelte';
	import type { WorkExperienceEntry } from '$lib/types';

	let { entries, class: className = '' }: { entries: WorkExperienceEntry[]; class?: string } =
		$props();
</script>

<div class={className}>
	<div class="hidden md:block">
		<div class="flex max-w-6xl pb-1">
			<span class="w-[22%]">Period</span>
			<span class="w-1/3">Company</span>
			<span>Role</span>
		</div>
		<Divider />
		<ul>
			{#each entries as entry, i (i)}
				<li>
					<div class="my-8 flex max-w-6xl">
						<span class="w-[22%]">{entry.year}</span>
						<span class="w-4/12">{entry.company}</span>
						<span>{entry.role}</span>
					</div>
					<Divider />
				</li>
			{/each}
		</ul>
	</div>

	<div class="flex w-full pb-1 md:hidden">
		<ul class="w-full">
			{#each entries as entry, i (i)}
				<li>
					<div class={i !== 0 ? 'py-4' : 'mb-4'}>
						<div class="flex">
							<span class="w-5/12 tiny:w-1/3">Period</span>
							<span class="w-7/12 tiny:w-2/3">{entry.year}</span>
						</div>
						<div class="flex">
							<span class="w-5/12 tiny:w-1/3">Company</span>
							<span class="w-7/12 tiny:w-2/3">{entry.company}</span>
						</div>
						<div class="flex">
							<span class="w-5/12 tiny:w-1/3">Role</span>
							<span class="w-7/12 tiny:w-2/3">{entry.role}</span>
						</div>
					</div>
					<Divider />
				</li>
			{/each}
		</ul>
	</div>
</div>
