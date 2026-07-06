import { Fragment } from 'react';
import { Layout } from '../components/Layout';
import { WorkItem } from '../components/WorkItem';
import { TextAnimationFadeIn } from '../components/TextAnimationFadeIn';
import { Divider } from '../components/Divider';
import { DividerAnimated } from '../components/DividerAnimated';
import { caseStudies, ndaMention } from '../data/caseStudies';

export default function Home() {
  const workItemList = (
    <ul>
      {caseStudies.map((study, index) => (
        <Fragment key={study.slug}>
          <Divider />
          <li>
            <WorkItem
              title={study.title}
              description={study.tagline}
              image={study.image}
              video={study.video}
              href={`/work/${study.slug}`}
              itemNumber={`0${index + 1}/`}
            />
          </li>
          {index === caseStudies.length - 1 && <Divider />}
        </Fragment>
      ))}
    </ul>
  );

  const serviceList = (
    <ul className="w-full sm:w-1/2">
      {services.map((service, i) => (
        <li className="" key={service.title}>
          {i !== 0 && <DividerAnimated className="mt-14 mb-6" />}
          <h3 className="mb-4 lg:mb-6 text-sm font-normal">
            <TextAnimationFadeIn>{service.title}</TextAnimationFadeIn>
          </h3>
          <p className="text-sm max-w-lg">
            <TextAnimationFadeIn>{service.description}</TextAnimationFadeIn>
          </p>
        </li>
      ))}
    </ul>
  );

  return (
    <Layout>
      <section className="mt-40 xl:mt-60 mb-80 content-section">
        <h1 style={{ maxWidth: '1300px' }}>
          Senior fullstack developer helping teams build
          complex and scalable web applications.
        </h1>
        <p className="text-sm mt-8">
          freelance &middot; 7+ years of experience &middot; Copenhagen area
        </p>
      </section>
      <section className="content-section">
        <h2 className="mb-8 section-title">Selected Work &#8595;</h2>
        {workItemList}
        <div className="relative py-16">
          <span className="absolute text-tiny top-6">
            {ndaMention.period}
          </span>
          <h3 className="h3 mb-4 pt-8">
            <TextAnimationFadeIn>{ndaMention.title}</TextAnimationFadeIn>
          </h3>
          <p className="text-base max-w-2xl">
            <TextAnimationFadeIn interSectionOptions={{ threshold: 0 }}>
              {ndaMention.text}
            </TextAnimationFadeIn>
          </p>
        </div>
        <Divider />
      </section>
      <section className="mt-12 mb-40 content-section block sm:flex">
        <h2 className="mb-20 sm:mb-40 w-full: sm:w-1/2">
          Services <span className="hidden sm:inline-block">&#8594;</span>
          <span className="inline-block sm:hidden">&#8595;</span>
        </h2>
        {serviceList}
      </section>
    </Layout>
  );
}

type ServiceType = {
  title: string;
  description: string;
};

const services: ServiceType[] = [
  {
    title: 'App modernization',
    description:
      'I get dropped into large, existing codebases to redesign and modernize them — improving the UX, performance and architecture without stopping the product.',
  },
  {
    title: 'Product development',
    description:
      'From idea to shipped product: fullstack development with the testing, tooling and deployment setup that keeps it maintainable as it grows.',
  },
  {
    title: 'Design systems',
    description:
      'Component libraries and design systems that scale across web and native, so teams ship consistent UI faster instead of building everything twice.',
  },
  {
    title: 'CMS & content platforms',
    description:
      'I help teams pick the right CMS and integrate it so editors create pages and manage content without needing a developer in the loop.',
  },
];
