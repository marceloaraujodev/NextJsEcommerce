
import clientPromise from '@/lib/mongodb';  
import { MongoDBAdapter} from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID_FRONT,
      clientSecret: process.env.GOOGLE_SECRET_FRONT
    })
  ],
adapter: MongoDBAdapter(clientPromise),
})