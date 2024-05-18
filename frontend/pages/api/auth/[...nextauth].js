// import NextAuth, { getServerSession } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import clientPromise from '@/lib/mongodb';
// import { MongoDBAdapter} from '@next-auth/mongodb-adapter';


// change to a function a request to db. create a model for admins, 
// const adminEmails = ['ppzmarcelo@gmail.com'];

// export const authOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID_FRONT,
//             clientSecret: process.env.GOOGLE_SECRET_FRONT
//           })
//         ],
//         adapter: MongoDBAdapter(clientPromise),
//         // callbacks: {
//           //   session: ({session, token, user}) => {
//             //     // console.log(session, user)
//             //     if(adminEmails.includes(session?.user?.email)){
//               //       // console.log('admin user')
//               //       return session;
//               //     }
//               //     return false;
//               //   },
//               // }
//             }
            
//             export default NextAuth(authOptions)
            
// export async function getServerAuthSession(req, res){
  //   return await getServerSession(req, res, authOptions)
  // }
  // console.log('secret front:', process.env.GOOGLE_SECRET_FRONT, 'id front:', process.env.GOOGLE_ID_FRONT)
  
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