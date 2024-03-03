// db connection using mongoose

import mongoose from'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export async function DbConnected(){
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
        });
        console.log("db connected");
        
    } catch (error) {
        console.log("db connection",error);
        throw error;   
    }
}