import { Socket } from "socket.io";
import SocketClient from "../../../clients/SocketClient";
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

  public async createRoom(name: string): Promise<Room> {
    try {
      const newRoom: Room = await this.repository.createRoom(name);
      
      // join to the newRoom and notify all clients
      const socketClient: Socket = SocketClient.getInstance();
      socketClient.join(newRoom.id);
      socketClient.emit("new_room", newRoom);

      return newRoom;
    }
    catch (err: any) {
      throw err;
    }
  }
}

export default RoomService;