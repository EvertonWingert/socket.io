import { Server } from "socket.io";

const client = new Server(3000, { cors: { origin: '*' } });

export {
    client
}
