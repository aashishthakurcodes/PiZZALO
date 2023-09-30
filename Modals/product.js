import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    desc: {
      type: String,
      required: [true, "description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    photo:{
      data:Buffer,
      contentType:String
    }
  },
  { timestamps: true }
);

export default mongoose.model("menu", menuSchema);
