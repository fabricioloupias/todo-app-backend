import dotenv from 'dotenv';

dotenv.config()

export const PORT = 9001;
export const MONGODB_URI = `${process.env.MONGODB_URI}`;
