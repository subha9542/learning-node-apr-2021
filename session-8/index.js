const express = require("express");
const socketio = require("socket.io")
const http = require("http");
const cors = require("cors");
const app = express();
const connections = {};

// Cross Origin for Anagular Application.
app.use(cors());






const server = http.createServer(app);
const io = socketio(server, {
    cors : {
        origin : "*"
    }
});


io.on("connection", (client)=>{

    client.on("login", (username)=>{
        connections[username] = client;
        io.emit("totalusers", { total : Object.keys(connections).length, names : Object.keys(connections) })
    });

    client.on("chat", (data)=>{

        const { message, user } = data;

        connections[user].emit("message", message)

        // Send to All people who have joined the chat.
        // client.broadcast.emit("message", data)
    })

})

server.listen(3800);
console.log("Application started at 3800")

