import mongoose from "mongoose";
import dotenv from"dotenv"


//environemtn variv=bale
dotenv.config();

 export const connectDB= async()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb connected : ${conn.connection.host}`);
    
  } catch (error) {
    console.log("Error connection to MongoDB:",error.message);
    process.exit(1);
    
  }
}


