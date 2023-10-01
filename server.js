import express from "express";
import connectDb from "./Config/dbConnect.js";
import menuRoutes from "./Routes/menuRoutes.js";
import contactUs from "./Routes/contactUs.js";
import cors from "cors";
import dotenv from 'dotenv'
import path, { dirname } from "path"; // Fixed import statements
import { fileURLToPath } from "url";

// config
dotenv.config();
const app = express();
connectDb();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//Routes
app.use("/api/v1", menuRoutes);
app.use("/api/v1", contactUs);

app.use(express.static(path.join(__dirname, "client", "build")));

// Rest API
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html")); // Fixed path.join
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on the port=${PORT}`);
});
