import type {Server} from "socket.io"
export const SocketHandler = (io : Server) => {
    io.on("connection", (socket) => {
        console.log("a user connected !");
    });
}