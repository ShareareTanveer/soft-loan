import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials):Promise<any> {
        try {
          const response = await axios.post(`${process.env.API_URL}/auth/jwt/create/`, {
            email: credentials?.email,
            password: credentials?.password,
          });

          if (response.data) {
            return {
              accessToken: response.data.access,
              refreshToken: response.data.refresh,
            };
          }
        } catch (error) {
          console.error("Authorization error", error);
          throw new Error("Invalid email or password");
        }
        return null;
      },
    }),
    {
      id: "google-oauth2",
      name: "Google",
      type: "oauth",
      version: "2.0",
      authorization: {
        url: `${process.env.API_URL}/auth/o/google-oauth2/`,
        params: { redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/google` },
      },
      profile(profile):any {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, user }:any) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }:any) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
