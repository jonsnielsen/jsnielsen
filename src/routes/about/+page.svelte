<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import WorkExperienceTable from '$lib/components/WorkExperienceTable.svelte';
	import TechChips from '$lib/components/TechChips.svelte';
	import cvData from '$lib/data/cv-data.json';
	import type { WorkExperienceEntry } from '$lib/types';

	const MONTH_NAMES = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	function formatMonthYear(dateString: string) {
		const [year, month] = dateString.split('-');
		return `${MONTH_NAMES[Number(month) - 1]} ${year}`;
	}

	function formatDateRange(startDate: string, endDate: string) {
		if (endDate === 'Present') {
			return `${formatMonthYear(startDate)} - Present`;
		}
		return `${formatMonthYear(startDate)} - ${formatMonthYear(endDate)}`;
	}

	const workExperienceEntries: WorkExperienceEntry[] = cvData.experiences.map((experience) => ({
		year: formatDateRange(experience.startDate, experience.endDate),
		company: experience.company,
		role: experience.role
	}));

	const allTechnologies = cvData.globalSkills.flatMap(
		(skillCategory) => skillCategory.technologies
	);
</script>

<Layout>
	<section class="content-section">
		<Divider />
		<div class="about-content-wrapper mb-40 mt-7">
			<p class="about-title h2 -mt-2 mb-12">About</p>
			<div>
				<h1 class="text-lg font-normal">
					Hi! I'm Jonathan Nielsen, a freelance fullstack developer with 7+ years of professional
					experience building modern websites, scalable web applications, CMS platforms, and design
					systems — both independently and as part of larger development teams.
				</h1>
				<br />
				<p class="text-lg">
					Contact me for any enquiries or just say hello: {cvData.profile.email}
				</p>
			</div>
		</div>
	</section>

	<section class="content-section">
		<div class="relative">
			<Divider class="mb-7" />
			<div class="mb-24 flex items-start justify-between">
				<h2 class="relative -top-1">Work Experience &#8595;</h2>
				<!-- eslint-disable svelte/no-navigation-without-resolve -- static file download, not an app route -->
				<a
					class="button-lg relative bottom-0 top-3 hidden sm:block"
					href="/cv-jonathan-nielsen.pdf"
					download
				>
					Download full CV &#8595;
				</a>
				<!-- eslint-enable svelte/no-navigation-without-resolve -->
			</div>
			<WorkExperienceTable class="mx-auto mb-20 max-w-7xl" entries={workExperienceEntries} />
			<Divider class="mb-7" />
		</div>
	</section>

	<section class="tech-section content-section mb-20">
		<h2 class="tech-section-title relative -top-1 mb-12">
			Technologies
			<span class="tech-section-title-arrow-right">&#8594;</span>
			<span class="tech-section-title-arrow-down">&#8595;</span>
		</h2>
		<div class="tech-section-title mb-40">
			<p class="text-lg">
				I specialize in modern technologies to ensure fast and reliable results.
			</p>
			<br />
			<TechChips technologies={allTechnologies} />
		</div>
		<Divider />
	</section>
</Layout>

<style>
	.about-content-wrapper {
		display: block;
	}

	.tech-section {
		display: block;
	}

	.tech-section-title {
		width: 100%;
	}

	.tech-section-title-arrow-right {
		display: none;
	}

	.tech-section-title-arrow-down {
		display: inline-block;
	}

	@media (min-width: 880px) {
		.about-title {
			margin-right: clamp(20px, 15vw, 220px);
		}

		.about-content-wrapper {
			display: flex;
		}

		.tech-section {
			display: flex;
		}

		.tech-section-title {
			width: 50%;
		}

		.tech-section-title-arrow-right {
			display: inline-block;
		}

		.tech-section-title-arrow-down {
			display: none;
		}
	}
</style>
