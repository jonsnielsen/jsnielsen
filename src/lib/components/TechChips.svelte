<script lang="ts">
	let { technologies, class: className = '' }: { technologies: string[]; class?: string } =
		$props();
</script>

<ul class="flex flex-wrap gap-2 {className}">
	{#each technologies as technology (technology)}
		<li class="rounded-full px-3 py-1 text-tiny" style="background-color: #cc7c5d; color: #faf8f5;">
			{technology}
		</li>
	{/each}
</ul>
