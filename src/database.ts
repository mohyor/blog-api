import { createPool } from 'mysql2/promise';
import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.join(__dirname, "../.env") });

export async function connect() {
    const connection = await createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        connectionLimit: 10//process.env.DB_CONNECTION_LIMIT
    });
    
    return connection;
}