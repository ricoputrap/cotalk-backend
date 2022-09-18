import { PrismaClient } from "@prisma/client";

class DbClient {
  private static instance: PrismaClient;

  public static getInstance(): PrismaClient {
    if (DbClient.instance == undefined) {
      DbClient.instance = new PrismaClient();
    }

    return DbClient.instance;
  }
}

export default DbClient;