import { Pool } from "pg";
import { config } from "dotenv";

config();

let pool: Pool | undefined;

if (!pool) {
  if (!process.env.PG_DB_URL) {
    throw new Error(
      "Please define the PG_DB_URL environment variable inside .env"
    );
  }

  pool = new Pool({
    connectionString: process.env.PG_DB_URL,
  });
}

export default pool!;
