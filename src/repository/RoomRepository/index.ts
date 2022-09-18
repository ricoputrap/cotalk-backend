import { PrismaClient } from "@prisma/client";
import DbClient from "../../../database/DbClient";
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
}

export default RoomRepository;