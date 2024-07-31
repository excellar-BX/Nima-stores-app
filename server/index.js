import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDB.js';
import ImportData from './DataImport.js';
import productRoute from './Routes/ProductRoutes.js';
import { errorHandler, notFound } from './Middleware/Error.js';

 const app = express();

 dotenv.config();

 
 connectDatabase();

 
app.use(cors());
// API
app.use("/api/import", ImportData )
app.use("/api/products", productRoute)
//ERROR HANDLER
app.use(notFound);
app.use(errorHandler);


 app.get("/", (req, res) => {
   res.send("api running");
 });





 const PORT = process.env.PORT || 2000;
 app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`)
 })