import path from "path";
import menuSchema from "../Modals/product.js";
import fs from "fs";
export const menuItem = async (req, res) => {
  try {
    const { name, desc, price } = req.fields;
    const { photo } = req.files; //For Image
    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required" });
      case !desc:
        return res.status(500).send({ error: "description  is required" });
      case !price:
        return res.status(500).send({ error: "Price is required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "Photo is required and less than 1 mb" });
    }
    const items = new menuSchema({ ...req.fields });
    //photo Validation
    if (photo) {
      items.photo.data = fs.readFileSync(photo.path);
      items.photo.contentType = photo.type;
    }
    items.save();
    res.status(201).send({
      success: "true",
      message: "Menu item Added",
      items,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Adding Items",
      error,
    });
  }
};
//Getting all items
export const getMenu = async (req, res) => {
  try {
    const items = await menuSchema
      .find({})
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: "true",
      message: "Getting All Items",
      items,
      total: items.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting all Items",
      error,
    });
  }
};

export const getSingleMenu = async (req, res) => {
  try {
    const items = await menuSchema
      .findById(req.params.id)
      .select("-photo")
      .lean();

    res.status(200).send({
      success: true,
      message: "Single Product Fetched",
      items,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting a single Item",
      error: error.message, // Send the error message for debugging
    });
  }
};


export const photoCTRL=async(req,res)=>{
  try {
    const productImg=await menuSchema.findById(req.params.pid).select('photo');
    if(productImg.photo.data){
       res.set('Content-type',productImg.photo.contentType)
       return res.status(200).send(productImg.photo.data)
    }
  } catch (error){
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting a Image",
      error: error.message, // Send the error message for debugging
    });
  }
}
//Delete Items
export const deleteItems=async(req,res)=>{
  try {
    await menuSchema.findByIdAndDelete(req.params.pid).select('-photo')
    res.status(200).send({
      success: true,
      message: "Product deleted successfully",
      error: error.message, // Send the error message for debugging
    });
  } catch (error){
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting a Image",
      error: error.message, // Send the error message for debugging
    });
  }
}
// updateItems
export  const updateItems=async(req,res)=>{
  try {
    const { name, desc, price } = req.fields;
    const { photo } = req.files; //For Image
    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required" });
      case !desc:
        return res.status(500).send({ error: "description  is required" });
      case !price:
        return res.status(500).send({ error: "Price is required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "Photo is required and less than 1 mb" });
    }
    const items = await menuSchema.findByIdAndUpdate(req.params.pid, { ...req.fields }, { new: true });
    //photo Validation
    if (photo) {
      items.photo.data = fs.readFileSync(photo.path);
      items.photo.contentType = photo.type;
    }
    items.save();
    res.status(201).send({
      success: "true",
      message: "Item updated successfully",
      items,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Updating Items",
      error,
    });
  }
}