import { Divider } from '../components/Divider';
import { Layout } from '../components/Layout';
import {
  WorkExperienceTable,
  WorkExperienceTableProps,
} from '../components/WorkExperienceTable';

import styles from './about.module.css';

export default function About() {
  return (
    <Layout>
      <section className="content-section">
        <Divider />
        <div className={`${styles['about-content-wrapper']} mt-7 mb-40`}>
          <p className={`${styles['about-title']} h2 -mt-2 mb-12`}>About</p>
          <div>
            <h1 className="text-lg font-normal">
              Hi! I’m Jonathan Nielsen, a freelance web developer specilized in
              frontend development . I have been consulting and freelancing for
              the past four years where I have worked with a broad range of
              programming languages and technologies specializing in frontend
              development.
            </h1>
            <br />
            <p className="text-lg">
              Contact me for any enquires or just say hello: hello@jsnielsen.com
            </p>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="relative">
          <Divider className="mb-7" />
          <div className="flex mb-24 items-start justify-between">
            <h2 className="relative -top-1">Work Experience &#8595;</h2>
            <button className="button-lg hidden sm:block sm:relative sm:bottom-0 sm:top-3">
              Download full CV &#8595;
            </button>
          </div>
          <WorkExperienceTable
            className="max-w-7xl mx-auto mb-20"
            entries={workExperienceEntries}
          />
          <Divider className="mb-7" />
        </div>
      </section>
      <section className={`${styles['tech-section']} content-section mb-20`}>
        <h2 className={`${styles['tech-section-title']} relative -top-1 mb-12`}>
          Technologies{' '}
          <span className={`${styles['tech-section-title-arrow-right']}`}>
            &#8594;
          </span>
          <span className={`${styles['tech-section-title-arrow-down']}`}>
            &#8595;
          </span>
        </h2>
        <div className={`${styles['tech-section-title']} mb-40`}>
          <p className="text-lg">
            I specialize in modern technologie to ensure fast and reliable
            results.
          </p>
          <br />
          <p className="text-lg">
            React, JavaScript, CSS, Html, TypeScript, NextJS, GatsbyJS,
            SanityCMS, StoryblokCMS, Wordpress, GraphQL, NodeJS, Vercel,
            Netlify, AWS, Azure.
          </p>
        </div>
        <Divider />
      </section>
    </Layout>
  );
}

const workExperienceEntries: WorkExperienceTableProps['entries'] = [
  {
    year: '2021',
    company: 'Mercell',
    role: 'Freelance fullstack developer',
  },
  {
    year: '2020 - 2021',
    company: 'SOUNDBOKS',
    role: 'Fulltime frontend developer',
  },
  {
    year: '2019',
    company: 'DHI',
    role: 'Freelance frontend developer',
  },
  {
    year: '2018 - 2019',
    company: 'Danmarks Miljøportal',
    role: 'Freelance fullstack developer',
  },
  {
    year: '2017',
    company: 'Kraftvaerk',
    role: 'IT Consultant',
  },
];
