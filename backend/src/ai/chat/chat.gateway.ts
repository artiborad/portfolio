import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: ['http://localhost:5173'], credentials: true },
})
export class ChatGateway {
  @WebSocketServer()
  server!: Server;

  broadcastToken(token: string) {
    this.server.emit('ai:chat-token', token);
  }
}
