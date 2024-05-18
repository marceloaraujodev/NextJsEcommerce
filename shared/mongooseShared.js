import mongoose from "mongoose";

export async function mongooseConnectShared(){
    if(mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    }else{
        const uri = process.env.MONGODB_URI_ADMIN;
        const db = await mongoose.connect(uri)
        return db
    }
}