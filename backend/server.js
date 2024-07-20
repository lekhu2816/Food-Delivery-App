import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
import userRouter from './routes/userRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js'


// app config
const app=express();
const PORT=process.env.PORT||4000;

// middleware
app.use(express.json());
app.use(cors());

// database connnection
connectDB()

// api endpoints
app.use('/api/food',foodRouter);
app.use('/api/user',userRouter);
app.use( '/images' , express.static('./uploads'))
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API working")
})

app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})