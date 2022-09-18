import { Express } from "express"
import RoomAPI from "./api/v1/RoomAPI"

const expressApp = (app: Express) => {
  RoomAPI(app);
}

export default expressApp;