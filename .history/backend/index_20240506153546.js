import express from 'express';
import databaseConnection from './utils/database.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoutes.js'

// Load environment variables
dotenv.config({ path: '.env' });

// Connect to the database
databaseConnection();

const app = express();
const PORT = process.env.PORT || 8080; // Set a default port if PORT is not defined in the environment variables

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser()) 

//api 
app.use('')


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
