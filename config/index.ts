import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const CLIENT_HOST: string = "http://localhost:3000";

export {
  PORT,
  CLIENT_HOST
}