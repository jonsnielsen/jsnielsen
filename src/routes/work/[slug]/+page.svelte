<script lang="ts">
	import { resolve } from '$app/paths';
	import Layout from '$lib/components/Layout.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import MediaCover from '$lib/components/MediaCover.svelte';
	import Video from '$lib/components/Video.svelte';
	import TextAnimationFadeIn from '$lib/components/TextAnimationFadeIn.svelte';
	import TextAnimationLineByLine from '$lib/components/TextAnimationLineByLine.svelte';
	import TechChips from '$lib/components/TechChips.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { study, studyIndex, nextStudy } = $derived(data);
</script>

<Layout>
	<section class="content-section mt-12">
		<Divider />
		<div class="relative py-16">
			<span class="absolute top-6 text-tiny">{`0${studyIndex + 1}/`}</span>
			<h1 class="leading-none">
				<TextAnimationLineByLine text={study.title} />
			</h1>
			<p class="base max-w-2xl pt-6">
				<TextAnimationFadeIn>{study.tagline}</TextAnimationFadeIn>
			</p>
		</div>
		<Divider />
		<div class="flex flex-col gap-y-4 py-6 text-sm sm:flex-row">
			<div class="sm:w-1/3">
				<span class="mb-1 block text-tiny">Client</span>
				{study.meta.client}
			</div>
			<div class="sm:w-1/3">
				<span class="mb-1 block text-tiny">Role</span>
				{study.meta.role}
			</div>
			<div class="sm:w-1/3">
				<span class="mb-1 block text-tiny">Period</span>
				{study.meta.period}
			</div>
		</div>
		<Divider />
	</section>

	<section class="content-section mt-16">
		<div class="relative mx-auto max-w-5xl overflow-hidden">
			<MediaCover />
			{#if !study.video}
				<img src={study.image.src} alt={study.image.alt} loading="lazy" />
			{:else}
				<Video
					src={study.video.src}
					aspectHeight={study.video.aspectHeight}
					aspectWidth={study.video.aspectWidth}
					backgroundColor={study.video.backgroundColor}
				/>
			{/if}
		</div>
	</section>

	<section class="content-section mb-24 mt-24">
		<div class="mx-auto max-w-2xl">
			{#each study.sections as section (section.heading)}
				<div class="mb-16">
					<h2 class="h3 mb-4">
						<TextAnimationFadeIn>{section.heading}</TextAnimationFadeIn>
					</h2>
					{#each section.paragraphs as paragraph, i (i)}
						<p class="mb-4 text-base">
							<TextAnimationFadeIn intersectionOptions={{ threshold: 0 }}>
								{paragraph}
							</TextAnimationFadeIn>
						</p>
					{/each}
				</div>
			{/each}
			<div class="mb-16">
				<h2 class="h3 mb-4">Technologies</h2>
				<TechChips technologies={study.technologies} />
			</div>
			{#if study.meta.link}
				<div class="mb-16">
					<!-- eslint-disable svelte/no-navigation-without-resolve -- study.meta.link.href is always an external URL -->
					<a
						class="button-lg inline-block"
						href={study.meta.link.href}
						target="_blank"
						rel="noreferrer"
					>
						Visit {study.meta.link.label} &#8599;
					</a>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				</div>
			{/if}
		</div>
	</section>

	<section class="content-section mb-32">
		<Divider class="mb-7" />
		<div class="flex items-baseline justify-between">
			<a href={resolve('/')} class="text-sm font-medium">&#8592; All work</a>
			<a href={resolve('/work/[slug]', { slug: nextStudy.slug })} class="text-sm font-medium">
				Next: {nextStudy.title} &#8594;
			</a>
		</div>
	</section>
</Layout>
