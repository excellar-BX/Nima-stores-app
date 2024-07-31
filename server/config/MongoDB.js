import mongoose from "mongoose";

const connectDatabase = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("MONGO DATABASE CONNECTED")
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
};

export default connectDatabase;