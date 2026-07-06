import { ReactNode } from 'react';
import Link from 'next/link';
import { DeveloperBadge } from './DeveloperBadge';
import { useRouter } from 'next/router';
import { Divider } from './Divider';

type LayoutProps = {
  children: ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return (
    <>
      <DeveloperBadge />
      <header className="">
        <div className="flex h-24 justify-between items-center fixed z-10 inset-x-0 content-section max-w-[1355px] mx-auto min-[1900px]:max-w-none">
          <div className="flex justify-between items-center flex-1 mix-blend-difference text-white">
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
          <a
            className="mt-1 button ml-8"
            href="mailto:jonathan.sparvath@gmail.com"
          >
            Write me
          </a>
        </div>
      </header>
      {/* padding under header to make content go down */}
      <div className="h-24" />
      <div className="flex flex-col justify-center items-center">
        <main style={{ maxWidth: '1355px' }}> {children}</main>
      </div>
      <div className="content-section">
        <Divider />
        <footer className="pt-16 pb-40 flex flex-col md:flex-row justify-between">
          <p className="text-tiny max-w-sm w-1/2 mb-12 md:mb-0 pr-12">
            Feel free to reach out if you have any questions or just want to say
            hello!
          </p>
          <div className="flex w-1/2 gap-x-20 gap-y-10 flex-col lg:flex-row">
            <div style={{ width: 'fit-content' }}>
              <h3 className="text-tiny font-normal mb-4">Contact</h3>
              <ul className="text-tiny">
                <li>
                  <a href="mailto:jonathan.sparvath@gmail.com">
                    jonathan.sparvath@gmail.com
                  </a>
                </li>
                <li>+45 81 75 53 45</li>
                <li>Based in Copenhagen, Denmark</li>
              </ul>
            </div>
            <div style={{ width: 'fit-content' }}>
              <h3 className="text-tiny font-normal mb-4">Social</h3>
              <ul className="text-tiny">
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
