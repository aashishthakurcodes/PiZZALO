import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Server running Successfully with mongoose ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Connection Error: ${error}`);
  }
};

export default connectDb;
