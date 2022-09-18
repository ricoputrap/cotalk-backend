import { Express, NextFunction, Request, Response } from "express";
import RoomService from "../../../service/RoomService";
import { Room } from "../../../types/Room";

const RoomAPI = (app: Express) => {
  const service: RoomService = new RoomService();

  app.get("/rooms", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rooms: Room[] = await service.getAllRooms();
      return res.status(200).json(rooms);
    }
    catch (err: any) {
      return res.status(500).json({
        error: err
      })
    }
  });

  app.post("/rooms", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;
      const newRoom: Room = await service.createRoom(name)
      return res.status(200).json({ newRoom })
    }
    catch (err: any) {
      return res.status(500).json({
        error: err
      });
    }
  });
}

export default RoomAPI;