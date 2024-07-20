import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
};

// user Login
const userLogin = async (req, res) => {
 
  const{email ,password}=req.body;

  try {
    const user=await userModel.findOne({email});
    console.log(user)
    if(!user){
      return res.json({success:false,message:"user doesn't exist"})
    }
   const isMatch=await bcrypt.compare(password,user.password);
   if(!isMatch){
    return res.json({success:false,message:"please enter correct password"})
   }
   const token=createToken(user._id);
   return res.json({success:true,token})
  } catch (error) {
    console.log("error occured while login");
    res.json({success:false,message:"error"})
  }
};

// user signIn
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exist = await userModel.findOne({ email });

    if (exist) {
      return res.json({ success: false, message: "User already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email address",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });

  } catch (error) {
    console.log('Error during registration:', error);
    res.json({ success: false, message: "Error registering user" });
  }
};

export { userLogin, userRegister };
