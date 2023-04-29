const { MongoClient } = require('mongodb');

const DB_URI = process.env.DB_URI || '';
const DB_USER = process.env.DB_USER || '';
const DB_PASS = process.env.DB_PASS || '';

if (!DB_URI) {
  throw new Error('No DB_URI provided');
}

const client = new MongoClient(`mongodb://${DB_URI}`, {
  auth: {
    username: DB_USER,
    password: DB_PASS
  }
});

let _db;
async function db() {
  if (_db) return _db;
  let conn;

  try {
    conn = await client.connect();
    console.log('DB connected')
  } catch(e) {
    console.error(e);
  }

  return _db = conn.db("todos");
}

module.exports = db;
