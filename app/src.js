const app = require('express')();
const os = require('os');
const conn = require('./db.js');

let db;

app.get('/', async (req, res) => {
  const todos = await db.collection('todos').find().toArray();
  res.json({
    msg: 'Hello World from ' + os.hostname() + '!',
    todos
  });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  db = await conn();
  console.log(`Server is listening on port ${PORT}`);
})