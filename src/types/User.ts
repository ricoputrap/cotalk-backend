import { Room } from "./Room";

export type User = {
  id: string;
  username: string;
  fullname: string;
  rooms?: Room[];
}