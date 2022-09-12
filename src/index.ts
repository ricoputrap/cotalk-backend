import express, { Express, NextFunction, Request, Response } from "express";
import { Server, Socket } from "socket.io";
import cors from "cors";
import { CLIENT_HOST, PORT } from "../config/index";

const app: Express = express();
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.json("Welcome to CoTalk API!");
});

const server = app.listen(PORT);

const io = new Server(server, {
  cors: {
    origin: CLIENT_HOST,
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket: Socket) => {
  console.log("===== CONNECTED:", socket.id);

  socket.on("join_room", (roomID: string) => {
    socket.join(roomID);
  })

  socket.on("send_message", (data: any) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`===== Client ${socket.id} DISCONNECTED`);
  })
})