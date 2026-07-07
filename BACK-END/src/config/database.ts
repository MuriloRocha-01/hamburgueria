import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: { rejectUnauthorized: false },
  max: 10,
  idleTimeoutMillis: 30000,
});

pool.connect()
  .then((client) => {
    console.log('✅ Conectado ao Postgres (Supabase)');
    client.release(); // devolve a conexão pro pool, não fecha o pool inteiro
  })
  .catch((err) => {
    console.error('❌ Falha na conexão com o Postgres:', err);
  });

export { pool };