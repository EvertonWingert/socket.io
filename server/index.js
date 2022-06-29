import { client } from './service/socket.js'

client.on("connection", (socket) => {
    console.log("front-end id: " + socket.id);
    client.emit("notification", { message: "hello" });
});





