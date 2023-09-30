import express from 'express'
import connectDb from './Config/dbConnect.js'
import menuRoutes from './Routes/menuRoutes.js'
import contactUs from './Routes/contactUs.js'
import cors from 'cors'
const app =express()
connectDb()
app.use(express.json());
app.use(cors());
//Routes
app.use('/api/v1',menuRoutes)
app.use('/api/v1',contactUs) 

const PORT =8080;
app.listen(PORT, () => {
    console.log(`Server is running on the port=${PORT}`);
  });