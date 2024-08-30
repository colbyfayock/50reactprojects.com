import PlausibleProvider from 'next-plausible';

import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps }}) {
  return (
    <PlausibleProvider domain="50reactprojects.com" trackOutboundLinks={true}>
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp
