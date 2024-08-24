import { SessionProvider } from 'next-auth/react';
import PlausibleProvider from 'next-plausible';

import '../styles/globals.scss';

function MyApp({ Component, pageProps: { session, ...pageProps }}) {
  return (
    <PlausibleProvider domain="50reactprojects.com" trackOutboundLinks={true}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </PlausibleProvider>
  );
}

export default MyApp
