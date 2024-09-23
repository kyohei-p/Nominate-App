import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/prisma';

const prisma = new PrismaClient({
  log: ["query"],
});
console.log(prisma.query)

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await prisma.user.findUnique({
          where: { email },
        });
        console.log(user)

        if (!user) {
          throw new Error("ユーザーが見つかりません")
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
          throw new Error("パスワードが間違っています")
        }
        return { id: user.id, email: user.email };
      }
    })
  ],
  adapter: PrismaAdapter(prisma),
}

export default NextAuth(authOptions)
