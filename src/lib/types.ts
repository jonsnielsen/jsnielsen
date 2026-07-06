export type VideoProps = {
	src: string;
	aspectWidth: number;
	aspectHeight: number;
	backgroundColor: string;
};

export type CaseStudySection = {
	heading: string;
	paragraphs: string[];
};

export type CaseStudy = {
	slug: string;
	title: string;
	/** One-line outcome shown on the homepage card */
	tagline: string;
	meta: {
		client: string;
		role: string;
		period: string;
		link?: { label: string; href: string };
	};
	sections: CaseStudySection[];
	technologies: string[];
	image: {
		src: string;
		alt: string;
	};
	video?: VideoProps;
};

export type WorkExperienceEntry = {
	year: string;
	company: string;
	role: string;
};
