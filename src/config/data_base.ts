
import express from 'express';
import mongoose from 'mongoose';
import dotenv from './dotenv';

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(dotenv.MONGO_URL, {
            dbName: 'typescript_DB',
        });
        console.log('Database Connected -------->');
    } catch (error) {
        console.error('MongoDB Connection Error ---->', error);
    }
};

export default connectDB;
