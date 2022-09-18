import { User } from "./User";

export type Room = {
  id: string;
  name: string;
  members?: User[];
}