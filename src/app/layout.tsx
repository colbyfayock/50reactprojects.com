import { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import PlausibleProvider from 'next-plausible'


import { GA_TRACKING_ID } from '@/lib/gtag';

import './globals.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
});

const description = 'Learn React with this FREE ebook! Dive in with 50 projects complete with project briefs and wireframes.';
const siteName = '50 Projects for React & the Static Web';
const url = 'https://50reactprojects.com';
const ogImage = `${url}/images/50-react-projects-og.jpg`;

export const metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    type: 'website',
    siteName,
    locale: 'en_US',
    images: [
      {
        url: ogImage,
        width: 2024,
        height: 1012,
        alt: '50 Projects for React & the Static Web - Learn by doing with this FREE ebook!'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    creator: '@colbyfayock',
    images: [ogImage],
  },
  authors: [{ name: 'Colby Fayock', url: 'https://colbyfayock.com/' }],
  creator: 'Colby Fayock',
}

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
          <PlausibleProvider domain="50reactprojects.com" trackOutboundLinks={true} />
        </head>
        <body>
          { children }
        </body>
      </html>
    </ClerkProvider>
  );
}