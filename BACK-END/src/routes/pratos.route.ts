import {Router} from 'express';
import { PratosController } from '../controllers/pratos.controller.js';

const router = Router();
const pratosController = new PratosController();

router.get('/', (req, res)=>pratosController.getAllPratos(req, res));



export default router;
