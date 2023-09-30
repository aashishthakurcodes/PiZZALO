import mongoose from "mongoose";


const connectDb=async()=>{
    try {
        const connectdb =await mongoose.connect("mongodb+srv://at282844:9Fk5b5bbdnUvaU5b@cluster0.zoecuga.mongodb.net/PizzaWeb?retryWrites=true&w=majority")
        console.log(`Connected to mongo db Successfully ${connectdb.connection.host}`);
    } catch (error) {
        console.log(`Connection Error = ${error}`);
    }
}

export default connectDb;