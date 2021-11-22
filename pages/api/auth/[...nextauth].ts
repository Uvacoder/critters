import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "lib/db";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  // TODO: configure log in providers
  providers: [],
});
