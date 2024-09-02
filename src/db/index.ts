import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import { Projects, ProjectTools, TaskAnswers, Tasks, Tools, Topics } from './schema';

const pool = new Pool({
  connectionString: process.env.XATA_DATABASE_URL,
});

export const db = drizzle(pool, {
  schema: { Projects, Topics, Tasks, TaskAnswers, Tools, ProjectTools },
});