import express from "express"
import dotenv, { config } from"dotenv";
import  {connectDB} from "./database/index.database.js"
import authrouter from "./routes/auth.Routes.js";
import cors from "cors"
const app = express();
dotenv.config();

const PORT= process.env.PORT ||5050;
//parse incoming request
app.use(express.json());



app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/",(req,res)=>{
    res.send("hello there");
})

app.use("/api/auth",authrouter)

app.listen(PORT,(req,res)=>{
    connectDB();
    console.log("Server is running on port :",PORT);
    
})