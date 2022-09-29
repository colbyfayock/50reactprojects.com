import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';

import { HarperDBAdapter } from '../../../adapters/harperdb';

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET
    }),
  ],
  adapter: HarperDBAdapter(),
});