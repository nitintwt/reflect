import mongoose from "mongoose";

type ConnectionObject ={
   isConnected?:true
}

const connection: ConnectionObject={}

// here the function will return a promise , and i am using void here , means that i don't what's coming with the promise
async function dbConnect(): Promise<void> {
  // the server runs on demand , so first we will check is there already a connection with db
  if (connection.isConnected){
    console.log("Already connected to db")
    return
  }
  // if not , connect with db
  try {
    const db =await mongoose.connect(process.env.MONGODB_URI || '', {});
    console.log("DB connected successfully")
  } catch (error) {
    console.log("DB connection failed", error)
    process.exit(1)
  }
}

export default dbConnect