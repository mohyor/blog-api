import { createPool } from 'mysql2/promise'

export async function connect() {
    const connection = await createPool({
        host: 'localhost', user: 'root', password: '123456', database: 'blog', connectionLimit: 10
    })

    return connection;
}