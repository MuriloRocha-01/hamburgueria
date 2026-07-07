import 'dotenv/config';

import { configSocket } from './sockets/socket.js';
import express from 'express';
import cors from 'cors';
import http from 'http';



const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.API_PORT || 3000;

const server = http.createServer(app);

app.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

configSocket(server);

server.listen(PORT, () => {
  console.log(`✅ Back-end rodando na porta ${PORT}`);
});

export default app;