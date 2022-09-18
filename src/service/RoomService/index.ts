import RoomRepository from "../../repository/RoomRepository";
import { Room } from "../../types/Room";

class RoomService {
  private repository: RoomRepository;

  constructor() {
    this.repository = new RoomRepository();
  }

  public async getAllRooms(): Promise<Room[]> {
    try {
      const rooms: Room[] = await this.repository.getAllRooms();

      return rooms;
    }
    catch (err: any) {
      throw err;
    }
  }
}

export default RoomService;