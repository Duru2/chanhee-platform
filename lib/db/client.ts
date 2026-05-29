import { Pool } from "pg";

export function createDbPool(connectionString = process.env.DATABASE_URL) {
  if (!connectionString) {
    throw new Error("DATABASE_URL is required to connect to PostgreSQL.");
  }

  return new Pool({
    connectionString
  });
}
