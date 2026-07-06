<script lang="ts">
	import MediaCover from './MediaCover.svelte';
	import TextAnimationFadeIn from './TextAnimationFadeIn.svelte';
	import TextAnimationLineByLine from './TextAnimationLineByLine.svelte';
	import Video from './Video.svelte';
	import type { CaseStudy } from '$lib/types';

	let {
		image,
		title,
		description,
		video,
		itemNumber,
		href
	}: {
		image: CaseStudy['image'];
		video?: CaseStudy['video'];
		title: string;
		description: string;
		itemNumber: string;
		href?: string;
	} = $props();
</script>

<div class="work-item:flex-row relative flex flex-col justify-between py-24">
	<div class="work-item:w-2/5 flex w-full flex-col justify-between">
		<span class="absolute top-6 text-tiny">{itemNumber}</span>
		<h3 class="h1 -mt-2 leading-none">
			<TextAnimationLineByLine text={title} />
		</h3>
		<div>
			<p class="base pt-8">
				<TextAnimationFadeIn intersectionOptions={{ threshold: 0 }}>
					{description}
				</TextAnimationFadeIn>
			</p>
			{#if href}
				<p class="pt-6">
					<TextAnimationFadeIn intersectionOptions={{ threshold: 0 }}>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href is already resolved by the caller -->
						<a {href} class="text-sm font-medium underline underline-offset-4">
							Read case study &#8594;
						</a>
					</TextAnimationFadeIn>
				</p>
			{/if}
		</div>
	</div>
	<div class="work-item:w-6/12 work-item:pt-0 relative w-full overflow-hidden pt-16">
		<MediaCover />
		{#if !video}
			<img src={image.src} alt={image.alt} loading="lazy" />
		{:else}
			<Video
				src={video.src}
				aspectHeight={video.aspectHeight}
				aspectWidth={video.aspectWidth}
				backgroundColor={video.backgroundColor}
			/>
		{/if}
	</div>
</div>
