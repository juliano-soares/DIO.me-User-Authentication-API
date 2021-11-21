import { Pool } from "pg";

const connectionString = process.env.KEY_DB;

const db = new Pool({connectionString});

export default db;