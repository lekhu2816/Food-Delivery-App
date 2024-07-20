import express from "express"
import authMiddleware from "../middleware/auth.js";
import {placeOrder,verifyOrder,userOrder,orderList,updateStatus} from "../controllers/orderController.js";
const orderRouter=express.Router();

orderRouter.post('/payment',authMiddleware,placeOrder);
orderRouter.post('/verify',verifyOrder);
orderRouter.post('/userOrder',authMiddleware,userOrder)
orderRouter.get('/listOrder',orderList)
orderRouter.post('/status',updateStatus);

export default orderRouter;