import jwt from "jsonwebtoken";


const authMiddleware=async(req,res,next)=>{

const {token}=req.headers;
if(!token){
    return res.json({success:false,message:"Not authorized login again"});
}
try {
    const decode_token=jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.body.userId=decode_token.id;
    next();
   
} catch (error) {
    console.log({error:error});
    res.json({success:false,message:"error occured"})
}

}
export default authMiddleware;