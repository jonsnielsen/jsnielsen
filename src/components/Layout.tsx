import { ReactNode } from 'react';
import Link from 'next/link';
import { DeveloperBadge } from './DeveloperBadge';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: ReactNode;
};
export function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <>
      <DeveloperBadge />
      <header className="">
        <div className="flex h-24 justify-between items-center fixed w-full z-10 content-section pr-42 tiny:pr-48 sm:pr-46 md:pr-60 text-white mix-blend-difference">
          <Link passHref href="/">
            <a className="text-sm font-medium">
              <span className="hidden tiny:block">
                Jonathan <br className="block sm:hidden" />
                S. Nielsen
              </span>
            </a>
          </Link>
          <nav className="-mr-1 md:-mr-0">
            <ul className="flex gap-8">
              <li className="text-sm font-medium">
                <Link href="/">Home</Link>
              </li>
              <li className="text-sm font-medium">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="fixed flex items-center h-24 z-10 top-0 right-0  content-section">
          <a className="mt-1 button" href="mailto:jonathan.sparvath@gmail.com">
            Write me
          </a>
        </div>
      </header>
      {/* padding under header to make content go down */}
      <div className="h-24" />
      <main>{children}</main>
      <div className="bg-background-600">
        <footer className="content-section pt-20 pb-40 flex gap-x-20 flex-col md:flex-row justify-between">
          <p className="max-w-md mb-12 md:mb-0">
            Feel free to reach out if you have any questions or just want to say
            hello!
          </p>
          <div className="flex gap-x-12 gap-y-10 flex-col lg:flex-row">
            <div style={{ width: 'fit-content' }}>
              <h3 className="text-base font-normal mb-4">Contact</h3>
              <ul className="text-base">
                <li>jonathan.sparvath@gmail.com</li>
                <li>+45 81 75 53 45</li>
              </ul>
            </div>
            <div style={{ width: 'fit-content' }}>
              <h3 className="text-base font-normal mb-4">Social</h3>
              <ul className="text-base">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/jsparvath/"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/jonsnielsen"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
