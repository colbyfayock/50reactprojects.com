import { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { GA_TRACKING_ID } from '@/lib/gtag';

import './globals.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '50 Projects for React & the Static Web',
  description: '-',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={sourceSans3.className}>
        <head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </head>
        <body>
          { children }
        </body>
      </html>
    </ClerkProvider>
  );
}