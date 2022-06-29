import { client } from './service/socket.js'

client.on("connection", (socket) => {
    console.log("front-end id: " + socket.id);
});



//Simulate push notification
setInterval(() => {
    client.emit("notification", { title: "Nova mensagem de fulano", from: "Fulano" });
}
    , 2000);



