import express from "express";
 import { menuItem ,getMenu ,getSingleMenu,photoCTRL,deleteItems,updateItems} from "../Controllers/menuCTRL.js"; 
 import formidable from 'express-formidable'
const router=express.Router()
//Create Items
router.post("/menu",formidable(),menuItem)

router.get("/getItems",getMenu);


router.get('/get-singleItem/:id', getSingleMenu);
//Get Photo
router.get('/get-photo/:pid',photoCTRL)
//Delete Items
router.delete('/delete-items/:pid',deleteItems)
//update items
router.put('/update-item/:pid',updateItems)

export default router;