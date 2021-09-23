import { Layout } from '../components/Layout';
import { WorkItem, WorkItemProps } from '../components/WorkItem';
import soundboksImage from '../assets/images/soundboks.png';
import jonasElsgaardImage from '../assets/images/jonaselsgaard.png';
import rakatXImage from '../assets/images/rakatx.png';
import { TextAnimationFadeIn } from '../components/TextAnimationFadeIn';
import { Divider } from '../components/Divider';
import { DividerAnimated } from '../components/DividerAnimated';
import { TextAnimationLineByLine } from '../components/TextAnimationLineByLine';

export default function Home() {
  const workItemList = (
    <ul>
      {workItems.map((workItem, index) => (
        <>
          <Divider />
          <li key={workItem.title}>
            <WorkItem
              title={workItem.title}
              description={workItem.description}
              image={workItem.image}
              video={workItem.video}
              itemNumber={`0${index + 1}/`}
            />
          </li>
          {index === workItems.length - 1 && <Divider />}
        </>
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
      <section className="mt-40 xl:mt-90 mb-80 content-section">
        <h1 style={{ maxWidth: '1300px' }}>
          <TextAnimationLineByLine>
            Freelance frontend developer based in Copenhagen building immersive
            digital experiences.
          </TextAnimationLineByLine>
        </h1>
      </section>
      <section className="content-section">
        <h2 className="mb-8">Selected Work &#8595;</h2>
        {workItemList}
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

const workItems: Omit<WorkItemProps, 'itemNumber'>[] = [
  {
    title: 'Soundboks',
    description:
      'I worked as frontent developer between 2020 and 2021 on the amazing digital team at SOUNDBOKS. My main responsibilities included the webshop and on the mobile app.',
    image: {
      alt: 'soundboks website',
      src: soundboksImage,
    },
    video: {
      backgroundColor: '#E8542F',
      src: '/videos/soundboks-ultra.mp4',
      aspectWidth: 1654,
      aspectHeight: 1228,
    },
  },
  {
    title: 'Jonas Elsgaard',
    description:
      'Website implementation, design and headless CMS for the talented animator Jonas Elsgaard.',
    image: {
      alt: "jonas elsgaard's website",
      src: jonasElsgaardImage,
    },
    video: {
      src: '/videos/jonaselsgaard.mp4',
      aspectHeight: 1114,
      aspectWidth: 1644,
      backgroundColor: '#EFEEEF',
    },
  },
  {
    title: 'RakatX',
    description:
      'Front-end and back-end development on a webapp used in the online tendering process for managing contracts.',
    image: {
      alt: 'rakatx web app',
      src: rakatXImage,
    },
  },
];

type ServiceProps = {
  title: string;
  description: string;
};

const services: ServiceProps[] = [
  {
    title: 'Website development',
    description:
      'I care deeply about performace and best practices regarding SEO & accessibility and - both users and search engines are gonna love your website',
  },
  {
    title: 'App development',
    description:
      'I leverage modern technologies like React-Native to develop cross platform apps that work on Android and iOS',
  },
  {
    title: 'CMS',
    description:
      'I have extensive experience with various Content Management Systems and will gladly help you find the best fit for you and the project.',
  },
  {
    title: 'Automated testing',
    description:
      'Testing the application helps guarantee that things keep working as intented and gives confidence when the application grows and changes are needed',
  },
];
