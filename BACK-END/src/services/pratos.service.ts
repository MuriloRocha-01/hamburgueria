import { PratosRepository } from "../repositories/pratos.repositories.js";
import type { Pratos } from "../models/pratos.model.js";

export class PratosService {
  private readonly repository = new PratosRepository();

  async getAllPratos(): Promise<Pratos[]> {
    const pratos = await this.repository.listPratos();

    return pratos;
  }

}

