// db.js


import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected",process.env.MONGO_URI);
    } catch (error) {
        console.log(error);
        console.log('error while connecting',process.env.MONGO_URI)
    }
}
export default connectDB;