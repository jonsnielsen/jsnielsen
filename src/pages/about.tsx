import { Divider } from '../components/Divider';
import { Layout } from '../components/Layout';
import {
  WorkExperienceTable,
  WorkExperienceTableProps,
} from '../components/WorkExperienceTable';
import { TechChips } from '../components/TechChips';
import cvData from '../../cv-data.json';

import styles from './about.module.css';

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
  'Dec',
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

export default function About() {
  return (
    <Layout>
      <section className="content-section">
        <Divider />
        <div className={`${styles['about-content-wrapper']} mt-7 mb-40`}>
          <p className={`${styles['about-title']} h2 -mt-2 mb-12`}>About</p>
          <div>
            <h1 className="text-lg font-normal">
              Hi! I’m Jonathan Nielsen, a freelance fullstack developer with
              7+ years of professional experience building modern websites,
              scalable web applications, CMS platforms, and design systems —
              both independently and as part of larger development teams.
            </h1>
            <br />
            <p className="text-lg">
              Contact me for any enquiries or just say hello:{' '}
              {cvData.profile.email}
            </p>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="relative">
          <Divider className="mb-7" />
          <div className="flex mb-24 items-start justify-between">
            <h2 className="relative -top-1">Work Experience &#8595;</h2>
            <a
              className="button-lg hidden sm:block sm:relative sm:bottom-0 sm:top-3"
              href="/cv-jonathan-nielsen.pdf"
              download
            >
              Download full CV &#8595;
            </a>
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
            I specialize in modern technologies to ensure fast and reliable
            results.
          </p>
          <br />
          <TechChips
            technologies={cvData.globalSkills.flatMap(
              (skillCategory) => skillCategory.technologies,
            )}
          />
        </div>
        <Divider />
      </section>
    </Layout>
  );
}

const workExperienceEntries: WorkExperienceTableProps['entries'] =
  cvData.experiences.map((experience) => ({
    year: formatDateRange(experience.startDate, experience.endDate),
    company: experience.company,
    role: experience.role,
  }));
