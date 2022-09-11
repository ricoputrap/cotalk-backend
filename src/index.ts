import express, { Express } from "express";
import { Server, Socket } from "socket.io";
import cors from "cors";
import { CLIENT_HOST, PORT } from "../config/index";

const app: Express = express();
app.use(cors());

const server = app.listen(PORT);

const io = new Server(server, {
  cors: {
    origin: CLIENT_HOST,
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket: Socket) => {
  console.log("===== Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log(`===== Client ${socket.id} disconnected`);
  })
})