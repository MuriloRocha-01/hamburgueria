import { Server } from 'socket.io';
import type { Server as HttpServer } from 'http';

let io: Server;

export function configSocket(server: HttpServer): Server {
    io = new Server (server, {
    cors: { origin: '*' } // restrinja em produção
  })

   io.on('connection', (socket) => {
    console.log('Cliente conectado:', socket.id);

    socket.on('disconnect', () => {
      console.log('Cliente desconectado:', socket.id);
    });
  });

  return io;
}

export function getIO(): Server {
  if (!io) {
    throw new Error('Socket.io ainda não foi inicializado');
  }
  return io;
}