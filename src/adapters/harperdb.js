import {
  harperClient,
  getUserByEmail,
  getUserById,
  getUserByProvider,
  updateUserById,
  getSessionByToken,
  getAccountById,
  getAccountByUserId,
} from '../lib/harperdb';

export function HarperDBAdapter() {
  return {
    async createUser(user) {
      const existing = await getUserByEmail(user.email);

      if ( existing ) return existing;

      const result = await harperClient({
        operation: 'insert',
        schema: 'Users',
        table: 'Profiles',
        records: [user]
      });

      return {
        ...user,
        id: result.inserted_hashes[0]
      };
    },
    async getUser(id) {
      return await getUserById(id);
    },
    async getUserByEmail(email) {
      return await getUserByEmail(email);
    },
    async getUserByAccount({ providerAccountId, provider }) {
      return await getUserByProvider({ providerAccountId, provider });
    },
    async updateUser(updatedProfile) {
      const profile = await updateUserById({
        id: user.id,
        profile: updatedProfile
      });
      return profile;
    },
    async linkAccount(account) {
      await harperClient({
        operation: 'insert',
        schema: 'Users',
        table: 'Accounts',
        records: [account]
      });
      return account;
    },
    async createSession(session) {
      await harperClient({
        operation: 'insert',
        schema: 'Users',
        table: 'Sessions',
        records: [session]
      });
      return session;
    },
    async getSessionAndUser(sessionToken) {
      const session = await getSessionByToken(sessionToken);
      const user = await getUserById(session?.userId);

      if ( !session || !user ) return;

      return { session, user };
    },
    async updateSession(session) {
      const existing = await getSessionByToken(session.sessionToken);
      const result = await harperClient({
        operation: 'update',
        schema: 'Users',
        table: 'Sessions',
        hash_values: [{
          id: existing.id,
          ...session
        }]
      });
      return session;
    },
    async deleteSession(sessionToken) {
      const existing = await getSessionByToken(sessionToken);
      await harperClient({
        operation: 'delete',
        schema: 'Users',
        table: 'Sessions',
        hash_values: [existing.id]
      });
      return sessionToken;
    },
  }
}