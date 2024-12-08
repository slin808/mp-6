import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";

export const { handlers, auth } = NextAuth({
    providers: [GitHub({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
    })],
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60, 
    },
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.sub as string;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id as string;
            }
            return token;
        },
    },
});
