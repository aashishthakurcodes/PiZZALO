import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
      },
  
      email: {
        type: String,
        required: [true, "Email is required"],
      },
      lname: {
        type: String,
        required: [true, "last name is required"],
      },
      feedback: {
        type: String,
        required: [true, "Message is required"],
      },
})

export default mongoose.model('contact',contactSchema)