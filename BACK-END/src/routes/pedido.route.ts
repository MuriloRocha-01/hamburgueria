import {Router} from 'express';
import { PedidoController } from '../controllers/pedido.controller.js';

const router = Router();
const pedidoController = new PedidoController();

router.post('/', (req, res)=>pedidoController.criarPedido(req, res));
router.patch('/:id/status',(req, res)=>pedidoController.StatusAtualizar(req, res));


export default router;
