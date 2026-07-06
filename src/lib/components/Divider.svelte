<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<div class={className} style="border-bottom: 1px solid black;"></div>
