import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Divider } from '../../components/Divider';
import { MediaCover } from '../../components/MediaCover';
import { Video } from '../../components/Video';
import { TextAnimationFadeIn } from '../../components/TextAnimationFadeIn';
import { TextAnimationLineByLine } from '../../components/TextAnimationLineByLine';
import { TechChips } from '../../components/TechChips';
import { caseStudies, getCaseStudy } from '../../data/caseStudies';

type WorkDetailProps = {
  slug: string;
};

export default function WorkDetail({ slug }: WorkDetailProps) {
  const study = getCaseStudy(slug);
  if (!study) return null;

  const studyIndex = caseStudies.findIndex((s) => s.slug === slug);
  const nextStudy = caseStudies[(studyIndex + 1) % caseStudies.length];

  return (
    <Layout>
      <section className="content-section mt-12">
        <Divider />
        <div className="relative py-16">
          <span className="absolute text-tiny top-6">{`0${
            studyIndex + 1
          }/`}</span>
          <h1 className="leading-none">
            <TextAnimationLineByLine>{study.title}</TextAnimationLineByLine>
          </h1>
          <p className="base pt-6 max-w-2xl">
            <TextAnimationFadeIn>{study.tagline}</TextAnimationFadeIn>
          </p>
        </div>
        <Divider />
        <div className="flex flex-col sm:flex-row gap-y-4 py-6 text-sm">
          <div className="sm:w-1/3">
            <span className="block text-tiny mb-1">Client</span>
            {study.meta.client}
          </div>
          <div className="sm:w-1/3">
            <span className="block text-tiny mb-1">Role</span>
            {study.meta.role}
          </div>
          <div className="sm:w-1/3">
            <span className="block text-tiny mb-1">Period</span>
            {study.meta.period}
          </div>
        </div>
        <Divider />
      </section>

      <section className="content-section mt-16">
        <div className="relative overflow-hidden max-w-5xl mx-auto">
          <MediaCover />
          {!study.video && (
            <Image
              src={study.image.src}
              alt={study.image.alt}
              layout="responsive"
              sizes=""
            />
          )}
          {study.video && (
            <Video
              src={study.video.src}
              aspectHeight={study.video.aspectHeight}
              aspectWidth={study.video.aspectWidth}
              backgroundColor={study.video.backgroundColor}
            />
          )}
        </div>
      </section>

      <section className="content-section mt-24 mb-24">
        <div className="max-w-2xl mx-auto">
          {study.sections.map((section) => (
            <div key={section.heading} className="mb-16">
              <h2 className="h3 mb-4">
                <TextAnimationFadeIn>{section.heading}</TextAnimationFadeIn>
              </h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-base mb-4">
                  <TextAnimationFadeIn interSectionOptions={{ threshold: 0 }}>
                    {paragraph}
                  </TextAnimationFadeIn>
                </p>
              ))}
            </div>
          ))}
          <div className="mb-16">
            <h2 className="h3 mb-4">Technologies</h2>
            <TechChips technologies={study.technologies} />
          </div>
          {study.meta.link && (
            <div className="mb-16">
              <a
                className="button-lg inline-block"
                href={study.meta.link.href}
                target="_blank"
                rel="noreferrer"
              >
                Visit {study.meta.link.label} &#8599;
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="content-section mb-32">
        <Divider className="mb-7" />
        <div className="flex justify-between items-baseline">
          <Link href="/">
            <a className="text-sm font-medium">&#8592; All work</a>
          </Link>
          <Link href={`/work/${nextStudy.slug}`}>
            <a className="text-sm font-medium">
              Next: {nextStudy.title} &#8594;
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: caseStudies.map((study) => ({ params: { slug: study.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<WorkDetailProps> = async ({
  params,
}) => ({
  props: { slug: params!.slug as string },
});
