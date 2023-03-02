import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3005/login");
        const data = await res.json();

        if (data.status == "ok") {
          return data.user;
        }
        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
