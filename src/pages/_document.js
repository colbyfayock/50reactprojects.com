import { Html, Head, Main, NextScript } from 'next/document';
import PlausibleProvider from 'next-plausible';

import { GA_TRACKING_ID } from '../lib/gtag';

export default function Document() {
  return (
    <Html>
      <Head>
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
      </Head>
      <body>
        <PlausibleProvider domain="50reactprojects.com" trackOutboundLinks={true}>
          <Main />
        </PlausibleProvider>
        <NextScript />
      </body>
    </Html>
  )
}