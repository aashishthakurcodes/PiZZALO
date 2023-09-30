import express from "express";

const router=express.Router()

import {userFeedback} from '../Controllers/UserFeedback.js'
router.post('/feedback',userFeedback)

export default router;