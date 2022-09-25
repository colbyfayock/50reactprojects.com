/**
 * harperClient
 */

export async function harperClient(body) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${process.env.HARPER_API_KEY}`,
    },
    body: JSON.stringify(body),
    redirect: 'follow',
  }

  const response = await fetch('https://test1-colbyfayock.harperdbcloud.com', requestOptions);
  const result = await response.text();

  return JSON.parse(result, (key, value) => {
    if ( !isNaN(Date.parse(value)) ) {
      return new Date(value);
    }
    return value;
  });
}

/**
 * getUserByEmail
 */

export async function getUserByEmail(email) {
  const user = await harperClient({
    operation: 'sql',
    sql: `SELECT * FROM Users.Profiles WHERE email = "${email}"`
  });
  return user && user[0];
}

/**
 * getUserById
 */

export async function getUserById(id) {
  const user = await harperClient({
    operation: 'sql',
    sql: `SELECT * FROM Users.Profiles WHERE id = "${id}"`
  });
  return user && user[0];
}

/**
 * getUserByProvider
 */

export async function getUserByProvider({ provider, providerAccountId }) {
  const account = await harperClient({
    operation: 'sql',
    sql: `SELECT * FROM Users.Accounts WHERE provider = "${provider}" AND providerAccountId = "${providerAccountId}"`
  });
  const user = await getUserById(account[0]?.userId);
  return user;
}

/**
 * updateUser
 */

export async function updateUserById({ id, profile: updatedProfile }) {
  const existing = await getUserById(user.id);
  const profile = {
    ...existing,
    ...updatedProfile
  }
  const result = await harperClient({
    operation: 'update',
    schema: 'Users',
    table: 'Profiles',
    hash_values: [profile]
  });
  return profile;
}

/**
 * getSessionByToken
 */

export async function getSessionByToken(token) {
  const session = await harperClient({
    operation: 'sql',
    sql: `SELECT * FROM Users.Sessions WHERE sessionToken = "${token}"`
  });
  return session && session[0];
}

/**
 * getAccountById
 */

export async function getAccountById(id) {
  const account = await harperClient({
    operation: 'sql',
    sql: `SELECT * FROM Users.Accounts WHERE id = "${id}"`
  });
  return account && account[0];
}

/**
 * getAccountByUserId
 */

export async function getAccountByUserId(userId) {
  const account = await harperClient({
    operation: 'sql',
    sql: `SELECT * FROM Users.Accounts WHERE userId = "${userId}"`
  });
  return account && account[0];
}