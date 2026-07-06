import type { CaseStudy } from '$lib/types';
import cannifyClinicsImage from '$lib/assets/images/cannifyclinics.png';
import soundboksImage from '$lib/assets/images/soundboks.png';
import kilnspaceImage from '$lib/assets/images/kilnspace.png';
import rakatXImage from '$lib/assets/images/rakatx.png';

export const caseStudies: CaseStudy[] = [
	{
		slug: 'kilnspace',
		title: 'Kilnspace',
		tagline: 'A full-stack product for ceramicists — designed, built, tested and shipped solo.',
		meta: {
			client: 'Own product',
			role: 'Design, fullstack development, everything',
			period: 'Oct 2025 – present',
			link: { label: 'kilnspace.studio', href: 'https://kilnspace.studio' }
		},
		sections: [
			{
				heading: 'Problem',
				paragraphs: [
					'Ceramicists develop glazes through experimentation — blend tests, firing schedules, chemical tweaks. The state of the art for tracking all of this is notebooks, spreadsheets and photo rolls, and the chemistry calculations behind a glaze are tedious and error-prone to do by hand.'
				]
			},
			{
				heading: 'What I built',
				paragraphs: [
					'Kilnspace is a web app for managing glaze recipes and experiments. It automatically calculates the chemical composition (UMF) of a recipe from its ingredients, and lets users design blend experiments to develop their own glazes systematically instead of by guesswork.',
					'I own every part of it: the domain model, the product design, the frontend, the backend, the test suite and the deployment.'
				]
			},
			{
				heading: 'How it was built',
				paragraphs: [
					'The interesting part is the workflow. Kilnspace is built spec-first with an agentic development setup around Claude Code: features are written as specifications, implemented by agents, and gated by Playwright end-to-end tests and Jest unit tests before anything lands. That discipline is what lets one person ship and maintain a real product at the speed of a small team — without the quality dropping.'
				]
			},
			{
				heading: 'Outcome',
				paragraphs: [
					'Kilnspace is live at kilnspace.studio and in active development, with recipe management, automatic chemistry calculation and experiment tracking shipped.'
				]
			}
		],
		technologies: [
			'Next.js',
			'React',
			'TypeScript',
			'Tanstack Query',
			'Tailwind CSS',
			'Shadcn',
			'Playwright',
			'Jest',
			'Claude Code'
		],
		image: {
			alt: 'kilnspace glaze development app',
			src: kilnspaceImage
		}
	},
	{
		slug: 'soundboks',
		title: 'Soundboks',
		tagline: 'One design system serving web and native app from a single codebase.',
		meta: {
			client: 'SOUNDBOKS',
			role: 'Frontend Developer, digital team',
			period: 'Apr 2020 – Apr 2021',
			link: { label: 'soundboks.com', href: 'https://soundboks.com' }
		},
		sections: [
			{
				heading: 'Problem',
				paragraphs: [
					'SOUNDBOKS — the Danish speaker brand — runs a website, a blog, a webshop and a mobile app. Each surface needed consistent branded UI, but separate codebases meant every component was built and maintained twice.'
				]
			},
			{
				heading: 'My role',
				paragraphs: [
					'I was part of the digital team, working across the website, blog and mobile app. My two biggest projects were the design system and the webshop CMS.'
				]
			},
			{
				heading: 'Key decisions',
				paragraphs: [
					'For the design system, we built the component library with React Native and React-Native-Web, so a single codebase renders natively on iOS and Android and as regular DOM on the web. One implementation of every component, consistent everywhere.',
					'For the webshop, I drove the selection and implementation of a CMS (evaluating and implementing ButterCMS and Storyblok on top of Shopify) with a clear goal: content editors should be able to create product and landing pages without a programmer in the loop.'
				]
			},
			{
				heading: 'Outcome',
				paragraphs: [
					'The shared component library removed the double implementation work between app and web, and the CMS setup moved page creation from the development team to the content team.'
				]
			}
		],
		technologies: [
			'React',
			'TypeScript',
			'Next.js',
			'React-Native',
			'React-Native-Web',
			'Shopify',
			'Storyblok CMS',
			'ButterCMS',
			'AWS'
		],
		image: {
			alt: 'soundboks website',
			src: soundboksImage
		},
		video: {
			backgroundColor: '#E8542F',
			src: '/videos/soundboks-ultra.mp4',
			aspectWidth: 1654,
			aspectHeight: 1228
		}
	},
	{
		slug: 'cannify-clinics',
		title: 'Cannify Clinics',
		tagline: 'A multilingual platform connecting medicinal cannabis patients with doctors.',
		meta: {
			client: 'NoA Ignite',
			role: 'Freelance Frontend Developer',
			period: 'Sep 2021 – Jan 2022'
		},
		sections: [
			{
				heading: 'Problem',
				paragraphs: [
					'Canify Clinics needed a digital platform for medicinal cannabis patients and doctors: a public marketing site, a customer universe for patients, and a support dashboard for staff — all serving multiple languages and markets.'
				]
			},
			{
				heading: 'My role',
				paragraphs: [
					'I was responsible for the frontend across all three surfaces, and for setting up the content platform behind them.'
				]
			},
			{
				heading: 'Key decisions',
				paragraphs: [
					'I set up Sanity as a structured-content CMS so the client could edit sections, compose pages from building blocks and create entirely new pages — in every supported language — without developer involvement.',
					'The public site is built with Next.js for prerendered, fast-loading pages, with Lingui handling internationalization throughout the platform.'
				]
			},
			{
				heading: 'Outcome',
				paragraphs: [
					'The platform launched with the marketing site, patient universe and support dashboard, and the client team manages content and new pages themselves across languages.'
				]
			}
		],
		technologies: [
			'React',
			'Next.js',
			'TypeScript',
			'Sanity CMS',
			'Material UI',
			'Lingui.js',
			'Recoil'
		],
		image: {
			alt: 'cannify clinics website',
			src: cannifyClinicsImage
		},
		video: {
			backgroundColor: '#E8542F',
			src: '/videos/cannifyclinics.mp4',
			aspectWidth: 1654,
			aspectHeight: 1228
		}
	},
	{
		slug: 'rakatx',
		title: 'RakatX',
		tagline: 'Fullstack development on a contract management platform for online tendering.',
		meta: {
			client: 'Mercell',
			role: 'Freelance Fullstack Developer',
			period: 'Apr 2021 – Sep 2021'
		},
		sections: [
			{
				heading: 'Problem',
				paragraphs: [
					'Mercell provides a large ecosystem for buyers and suppliers to run the tendering process online. RakatX, their contract management platform, needed continued development and maintenance — new features in a production system that businesses depend on.'
				]
			},
			{
				heading: 'My role',
				paragraphs: [
					'I worked fullstack across the platform: React and TypeScript on the frontend, .NET and C# on the backend, deployed on Azure.'
				]
			},
			{
				heading: 'Key decisions',
				paragraphs: [
					'Working in a production system with real contracts meant changes had to be safe. End-to-end coverage with Cypress guarded the critical flows, so features could ship without regressions in a domain where mistakes are expensive.'
				]
			},
			{
				heading: 'Outcome',
				paragraphs: [
					'Steady delivery of features and maintenance on a business-critical platform, as an embedded fullstack developer in Mercell’s team.'
				]
			}
		],
		technologies: ['React', 'TypeScript', 'Redux', 'Cypress', '.NET', 'C#', 'Azure'],
		image: {
			alt: 'rakatx web app',
			src: rakatXImage
		}
	}
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
	return caseStudies.find((study) => study.slug === slug);
}

/**
 * Frankly 2025 is under NDA — no visuals, so it appears as a text-only
 * mention instead of a full case study.
 */
export const ndaMention = {
	title: 'Frankly',
	period: '2025',
	text: 'Most recently I redesigned and modernized a large legacy engineering application for Frankly — rethinking the UX and rebuilding the frontend on a modern React architecture (Vite, Tanstack Query, Zustand, Turborepo, gRPC). The work is under NDA, but I’m happy to talk through it.'
};
