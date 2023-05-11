import { createPool, Pool } from 'mysql2/promise'
import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.join(__dirname, "../.env")})

const DATA_SOURCES = {
    mySqlDataSource: {
      DB_HOST: process.env.MY_SQL_DB_HOST,
      DB_USER: process.env.MY_SQL_DB_USER,
      DB_PASSWORD: process.env.MY_SQL_DB_PASSWORD,
      DB_PORT: process.env.MY_SQL_DB_PORT,
      DB_DATABASE: process.env.MY_SQL_DB_DATABASE,
      DB_CONNECTION_LIMIT: process.env.MY_SQL_DB_CONNECTION_LIMIT ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT) : 11,

    }
  };

const dataSource = DATA_SOURCES.mySqlDataSource;

export async function connect() {
    try {
        const connection = await createPool({
            /*
            host: 'localhost', 
            user: 'root', 
            password: 'Firebird14#', 
            database: 'blog', 
            connectionLimit: 10
            */
            connectionLimit: dataSource.DB_CONNECTION_LIMIT,
            host: dataSource.DB_HOST,
            user: dataSource.DB_USER,
            password: dataSource.DB_PASSWORD,
            database: dataSource.DB_DATABASE,
        })
    
        return connection;
    } catch (e) {
        console.log('Database connection failed')
        //throw new Error("")
    }
}
