
import express, { Application } from 'express';
import connectDB from './config/data_base';
import dotenv from './config/dotenv';
import userRouter from './routers/userRouters';

const app: Application = express();

// connect to DB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Router setting 
app.use('/api/users', userRouter);

// Optional: Handle 404 errors for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});


export default app;