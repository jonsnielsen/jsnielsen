import { ReactNode } from 'react';
import Link from 'next/link';
import { DeveloperBadge } from './DeveloperBadge';

type LayoutProps = {
  children: ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return (
    <>
      <DeveloperBadge />
      <header className="bg-background flex justify-between items-center fixed w-full py-3 px-10 z-10">
        <div>
          <Link passHref href="/">
            <a style={{ fontSize: '24px', lineHeight: 1.3 }}>
              Jonathan <br /> S. Nielsen
            </a>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li className="text-sm font-bold">
              <Link href="/">WORK</Link>
            </li>
            <li className="text-sm font-bold">
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* padding under header to make content go down */}
      <div style={{ height: '85px' }} />
      <main>{children}</main>
      <footer className="bg-background-600 py-20 px-20 flex gap-x-20">
        <p className="max-w-md">
          Feel free to reach out if you have any questions or just want to say
          hello!
        </p>
        <div>
          <h3 className="text-base font-normal mb-4">Contact</h3>
          <ul className="text-base">
            <li>jonathan.sparvath@gmail.com</li>
            <li>+45 81 75 53 45</li>
          </ul>
        </div>
        <div>
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
      </footer>
    </>
  );
}
