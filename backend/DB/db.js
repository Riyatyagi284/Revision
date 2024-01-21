import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectWithDb = () => {
     mongoose.connect(process.env.MONGODB_URL, ({
        useNewUrlParser: true,
        useUnifiedTopology: true,
     })).then(() => console.log('Our Application Connected with Mongodb Successfully!!'))
     .catch((error) => console.log(`There is some error occured while connecting with database,${error}`))
}

export default connectWithDb;