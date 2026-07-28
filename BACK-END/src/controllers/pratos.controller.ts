import type { Request, Response } from "express";
import { PratosService } from "../services/pratos.service.js";

export class PratosController {
  async getAllPratos(req: Request, res: Response) {
    try {
      const pratosService = new PratosService();
      const resultado = await pratosService.getAllPratos();
      
      if (!resultado.length) {
        return res.status(404).json({ message: "Nenhum prato encontrado" });
      }
      
      return res.status(200).json(resultado);
    } catch (error: any) {
      console.error("PratosController Error:", error);
      return res.status(500).json({
        message: "Erro interno ao buscar os pratos",
        details: error.message,
      });
    }
  }
}
