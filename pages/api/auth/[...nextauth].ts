import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import EmailProvider from "next-auth/providers/email";
import { prisma } from "lib/db";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  // TODO: add google login provider
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.SECRET,
  },
  debug: true,
});
