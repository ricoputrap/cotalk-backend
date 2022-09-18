import { Socket } from "socket.io";

class SocketClient {
  private static instance: Socket;

  public static getInstance(): Socket {
    return SocketClient.instance;
  }

  public static setInstance(socket: Socket) {
    SocketClient.instance = socket;
  }
}

export default SocketClient;