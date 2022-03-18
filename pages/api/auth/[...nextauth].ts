import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID : "",
      clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET : "",
    }),
    // ...add more providers here
  ],
});

//400731109120-cbp5pp4ik77vu9q2i0cnfgp6ok4gle51.apps.googleusercontent.com
//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
