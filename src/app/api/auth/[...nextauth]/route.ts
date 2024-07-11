import NextAuth from "next-auth/next";
import { authOption } from "@/libs/auth";

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };

