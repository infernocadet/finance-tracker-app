const { Pool } = require("pg");
require("dotenv").config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

async function testConnection() {
    try {
        const result = await pool.query('SELECT * FROM users'); 
        console.log('Users:', result.rows); 
    } catch (err) {
        console.error('Error connecting to the database:', err);
    } finally {
        await pool.end(); 
    }
}

testConnection();

module.exports = pool;