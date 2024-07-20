import mongoose from "mongoose";

const connectDB=async()=>{
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connection is successful")
  } catch (error) {
    console.log('Error while connection with database',error)
  }
}
export {connectDB};