import  express  from "express";
import cors from 'cors'
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import {connectDB} from './data/database.js'
import bodyParser from "body-parser";

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:3000/"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     // allowedHeaders:["Content-Type","X-Auth-Token","Origin","Authorization"],
//     credentials: true,
    
//   })
// );

app.get("/",(req,res)=>{
    res.send("hi bhai")
})

app.use( userRouter);

// Using Error Middleware
app.use(errorMiddleware);


app.listen(5000,()=>{
    console.log(`server is working on port 5000`)
})

