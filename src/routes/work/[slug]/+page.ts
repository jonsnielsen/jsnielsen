import { error } from '@sveltejs/kit';
import { caseStudies, getCaseStudy } from '$lib/data';
import type { PageLoad } from './$types';

export const entries = () => caseStudies.map((study) => ({ slug: study.slug }));

export const load: PageLoad = ({ params }) => {
	const study = getCaseStudy(params.slug);
	if (!study) error(404, 'Case study not found');

	const studyIndex = caseStudies.findIndex((s) => s.slug === params.slug);
	const previousStudy = studyIndex > 0 ? caseStudies[studyIndex - 1] : null;
	const nextStudy = studyIndex < caseStudies.length - 1 ? caseStudies[studyIndex + 1] : null;

	return { study, studyIndex, previousStudy, nextStudy };
};
