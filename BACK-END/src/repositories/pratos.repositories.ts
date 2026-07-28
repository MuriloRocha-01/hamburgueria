import { poolPromise } from "../config/database.js";
import type { Pratos } from "../models/pratos.model.ts";

export class PratosRepository {

  async listPratos(): Promise<Pratos[]> {
    const pool = await poolPromise;
    
    if (!pool) throw new Error("❌ Conexão com o banco de dados não estabelecida");

    const result = await pool.query(`SELECT * FROM pratos ORDER BY cd_prato ASC`);
    return result.rows;
  }
}