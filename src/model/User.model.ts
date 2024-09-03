import mongoose, { mongo, Schema } from "mongoose";


export interface Message extends Document{
  content: string;
  createdAt:Date;
}

const messageSchema: Schema<Message> = new Schema({
  content:{
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    required:true,
    default:Date.now()
  }
})

export interface User extends Document{
  username:string,
  email:string,
  password:string,
  verifyCode:string,
  verifyCodeExpiry:Date,
  isVerified:boolean,
  isAcceptingMessage:boolean,
  messages:Message[]
}

const userSchema: Schema<User> = new Schema({
  username:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  verifyCode:{
    type:String,
    required:true,
  },
  verifyCodeExpiry:{
    type:Date,
    required:true,
  },
  isAcceptingMessage:{
    type:Boolean,
    required:true,
    default:true,
  },
  isVerified:{
    type:Boolean,
    required:true,
  },
  messages:[messageSchema]
})

// export is different in next.js than react.js
// in react the application is running on the server continuously , so it uses the same schema which is created first time
// but in next.js , the application doesn't know that the application is running first time or it has runned multiple times. 
// if first time , the schema will be created , and if not it will use the already created schema

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema)

export default UserModel

