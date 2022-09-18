import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import DbClient from "../../../clients/DbClient";
import { Room } from "../../types/Room";

class RoomRepository {
  private dbClient: PrismaClient = DbClient.getInstance();

  public async getAllRooms(): Promise<Room[]> {
    try {
      const allRooms: Room[] = await this.dbClient.room.findMany({
        include: {
          members: true
        }
      });

      return allRooms;
    }
    catch (err: any) {
      throw err;
    }
  }

  public async createRoom(name: string): Promise<Room> {
    try {
      const newRoom: Room = await this.dbClient.room.create({
        data: {
          id: "room_" + uuidv4(),
          name,
          members: {}
        }
      });

      return newRoom;
    }
    catch (err: any) {
      throw err;
    }
  }
}

export default RoomRepository;