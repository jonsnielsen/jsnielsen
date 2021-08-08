import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../components/Layout';
import { WorkItem, WorkItemProps } from '../components/WorkItem';
import soundboksImage from '../assets/images/soundboks.png';
import jonasElsgaardImage from '../assets/images/jonaselsgaard.png';
import rakatXImage from '../assets/images/rakatx.png';

export default function Home() {
  return (
    <Layout>
      <section className="mt-90 mb-60">
        <h1 className="">
          Freelance frontend developer based in Copenhagen building immersive{' '}
          <span className="text-primary">digital</span> experiences.
        </h1>
      </section>
      <section>
        <h2 className="mb-8">Selected work ↓</h2>
        <ul>
          {workItems.map((workItem, index) => (
            <>
              <Seperator />
              <li className="my-20" key={workItem.title}>
                <WorkItem
                  title={workItem.title}
                  description={workItem.description}
                  image={workItem.image}
                />
              </li>
              {index === workItems.length - 1 && <Seperator />}
            </>
          ))}
        </ul>
      </section>
      <section className="mt-12 mb-40">
        <h2 className="mb-40">Services</h2>
        <ul className="grid grid-cols-2 grid-rows-2 gap-y-8 gap-x-52 max-w-6xl mx-auto">
          {services.map((service) => (
            <li key={service.title}>
              <h3 className="text-lg">{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

const workItems: WorkItemProps[] = [
  {
    title: 'Soundboks',
    description:
      'Frontend developer on the amazing digital team at SOUNDBOKS.  Main responsibilities included working on the webshop and on the  mobile app.',
    image: {
      alt: 'soundboks website',
      src: soundboksImage,
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

function Seperator() {
  return (
    <div
      style={{
        border: '1px solid black',
        marginLeft: '-80px',
        marginRight: '-80px',
      }}
    ></div>
  );
}
