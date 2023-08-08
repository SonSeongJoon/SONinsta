import NextAuth, {NextAuthOptions} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions: NextAuthOptions = {
    app: {
        signIn: '/auth/signin',
    },
    callbacks: {
        session: async function ({session}) {
            console.log(session);
            const user = session?.user;
            if (user) {
                session.user = {
                    ...user,
                    username: user.email?.split('@')[0] || '',
                }
            }
            return session
        },
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_ID || '',
            clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
        }),
    ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };