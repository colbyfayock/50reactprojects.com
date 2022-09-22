export function HarperDBAdapter() {
  return {
    async createUser(user) {
      return;
    },
    async getUser(id) {
      return;
    },
    async getUserByEmail(email) {
      return;
    },
    async getUserByAccount({ providerAccountId, provider }) {
      return;
    },
    async updateUser(updatedUser) {
      return;
    },
    async linkAccount(account) {
      return;
    },
    async createSession(session) {
      return;
    },
    async getSessionAndUser(sessionToken) {
      return;
    },
    async updateSession(session) {
      return;
    },
    async deleteSession(sessionToken) {
      return;
    },
  }
}