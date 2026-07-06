<script lang="ts">
	import { resolve } from '$app/paths';
	import Layout from '$lib/components/Layout.svelte';
	import WorkItem from '$lib/components/WorkItem.svelte';
	import TextAnimationFadeIn from '$lib/components/TextAnimationFadeIn.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import DividerAnimated from '$lib/components/DividerAnimated.svelte';
	import { caseStudies, ndaMention } from '$lib/data/';

	type ServiceType = {
		title: string;
		description: string;
	};

	const services: ServiceType[] = [
		{
			title: 'Product development',
			description:
				'From idea to shipped product: fullstack development with the testing, tooling and deployment setup that keeps it maintainable as it grows.'
		},
		{
			title: 'Design systems',
			description:
				'Component libraries and design systems that scale across web and native — one implementation of every component, consistent UI everywhere.'
		},
		{
			title: 'CMS & content platforms',
			description:
				'I help pick the right CMS and integrate it so editors can create pages and manage content without needing a developer in the loop.'
		},
		{
			title: 'Automated testing',
			description:
				'Unit and end-to-end test suites that catch regressions before users do — making every release safe to ship and every refactor safe to make.'
		}
	];
</script>

<Layout>
	<section class="content-section mb-80 mt-40 xl:mt-60">
		<h1 style="max-width: 1300px;">
			Senior fullstack developer helping teams build complex and scalable web applications.
		</h1>
		<p class="mt-8 text-sm">freelance &middot; 7+ years of experience &middot; Copenhagen area</p>
	</section>

	<section class="content-section">
		<h2 class="section-title mb-8">Selected Work &#8595;</h2>
		<ul>
			{#each caseStudies as study, index (study.slug)}
				<Divider />
				<li>
					<WorkItem
						title={study.title}
						description={study.tagline}
						image={study.image}
						video={study.video}
						href={resolve('/work/[slug]', { slug: study.slug })}
						itemNumber={`0${index + 1}/`}
					/>
				</li>
				{#if index === caseStudies.length - 1}
					<Divider />
				{/if}
			{/each}
		</ul>
		<div class="relative py-16">
			<span class="absolute top-6 text-tiny">{ndaMention.period}</span>
			<h3 class="h3 mb-4 pt-8">
				<TextAnimationFadeIn>{ndaMention.title}</TextAnimationFadeIn>
			</h3>
			<p class="max-w-2xl text-base">
				<TextAnimationFadeIn intersectionOptions={{ threshold: 0 }}>
					{ndaMention.text}
				</TextAnimationFadeIn>
			</p>
		</div>
		<Divider />
	</section>

	<section class="content-section mb-40 mt-12 block sm:flex">
		<h2 class="w-full: mb-20 sm:mb-40 sm:w-1/2">
			Services <span class="hidden sm:inline-block">&#8594;</span>
			<span class="inline-block sm:hidden">&#8595;</span>
		</h2>
		<ul class="w-full sm:w-1/2">
			{#each services as service, i (service.title)}
				<li>
					{#if i !== 0}
						<DividerAnimated class="mb-6 mt-14" />
					{/if}
					<h3 class="mb-4 text-sm font-normal lg:mb-6">
						<TextAnimationFadeIn>{service.title}</TextAnimationFadeIn>
					</h3>
					<p class="max-w-lg text-sm">
						<TextAnimationFadeIn>{service.description}</TextAnimationFadeIn>
					</p>
				</li>
			{/each}
		</ul>
	</section>
</Layout>
