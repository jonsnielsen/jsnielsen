<script lang="ts">
	import type { VideoProps } from '$lib/types';

	let { src, backgroundColor, aspectWidth, aspectHeight }: VideoProps = $props();

	let videoEl: HTMLVideoElement | undefined = $state();

	$effect(() => {
		src;
		videoEl?.load();
	});
</script>

<div
	style="position: relative; background-color: {backgroundColor}; padding-bottom: {(aspectHeight /
		aspectWidth) *
		100}%;"
>
	<video
		bind:this={videoEl}
		class="absolute left-0 top-0 h-full w-full object-cover"
		muted
		playsinline
		preload="metadata"
		loop
		disablepictureinpicture
		disableremoteplayback
		autoplay
		controls={false}
	>
		<source type="video/mp4" {src} />
	</video>
</div>
