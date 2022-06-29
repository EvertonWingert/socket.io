import { Server } from "socket.io";

const io = new Server(3000, { cors: { origin: '*' } });

io.on("connection", (socket) => {
    console.log("front-end id: " + socket.id);
    io.emit("notification", { message: "hello" });
});





