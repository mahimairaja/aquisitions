import 'dotenv/config';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL, {
  poolSize: 10,
  idleTimeout: 30000,
  connectionTimeout: 10000,
});

const db = drizzle(sql, {
  logger: process.env.NODE_ENV === 'development',
});

export { sql, db };
