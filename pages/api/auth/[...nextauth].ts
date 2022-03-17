import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
});

// googleClientId: 705825533858-0r7ropdmd9bdk5tvdgsvhchvcj3p093u.apps.googleusercontent.com
//googleCientSecret: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
