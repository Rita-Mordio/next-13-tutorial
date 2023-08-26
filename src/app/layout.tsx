import React from 'react';
import './globals.scss';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next Board Tutorial',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <Link href="/">
          <h1>Board</h1>
        </Link>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
