import { PrismaClient } from "@prisma/client";
import { prisma } from "lib/db";

export type Context = {
  prisma: PrismaClient;
};

export const createContext = async (req, res): Promise<Context> => {
  return {
    prisma,
  };
};
