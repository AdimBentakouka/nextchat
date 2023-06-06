import express from "express";
import http from "http";
import {Server} from "socket.io";
import {SocketHandler} from "./src/socket";

const app = express();

const server = http.createServer(app);

const io = new Server(server , {
    cors: {
        origin: "*"
    }
});


app.get("/", (req, res) => {
    res.status(200).send({
        apiVersion: "1.0.0",
        environment: "development"
    })
});

SocketHandler(io);

server.listen(3001, () => {
    console.log("Server started ! listening on http://localhost:3001");
})
