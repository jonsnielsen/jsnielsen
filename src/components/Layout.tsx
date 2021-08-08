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
            <li>
              <Link href="/">WORK</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* padding under header to make content go down */}
      <div style={{ height: '85px', background: 'blue' }} />
      <main className="px-20">{children}</main>
    </>
  );
}
